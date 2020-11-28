import AWS from 'aws-sdk';
import * as csvParser from 'csv-parser';
import { responseService } from '../libs/services/response.service';
import { GENERAL_CONFIG } from '../config/genaral.config';

const BUCKET = GENERAL_CONFIG.productsImportBucket;
AWS.config.update({region: 'eu-west-1'});
const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    region: GENERAL_CONFIG.region
});
const sqs = new AWS.SQS({
    apiVersion: '2012-11-05',
});


const sendMessage = async (message) => {
    return new Promise((resolve, reject) => {
        const params = {
            QueueUrl: process.env.SQS_URL,
            MessageBody: JSON.stringify(message),
        };
        sqs.sendMessage(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

export const handler = async (event) => {
    for (const record of event.Records) {
        let response;
        try {
            const fileKey = record.s3.object.key;
            const data = await readFile(fileKey);
            
            //Move file
            await s3.copyObject({
                Bucket: BUCKET,
                CopySource: `${BUCKET}/${fileKey}`,
                Key: fileKey.replace('uploaded', 'processed')
            }).promise();
            await s3.deleteObject({
                Bucket: BUCKET,
                Key: fileKey
            }).promise();
            
            console.log(JSON.stringify(data));
            console.log(`sqsUrl:`, process.env.SQS_URL);
            
            // send data to SQS
            for (const item of data) {
                const send = await sendMessage(item);
                console.log(send);
            }

            response = responseService.getResponse(200, data);
        } catch (error) {
            console.log(JSON.stringify(error));
            response = responseService.getResponse(500, {
                status: 500,
                message: error.message
            })
        }

        return response;
    }
}

async function readFile(key) {
    return new Promise((resolve, reject) => {
        const results = [];
        const params = {
            Bucket: BUCKET,
            Key: key
        };
        s3.getObject(params).createReadStream()
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => reject(error));
    });
}