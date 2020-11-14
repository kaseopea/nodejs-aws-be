import AWS from 'aws-sdk';
import * as csvParser from 'csv-parser';
import { responseService } from '../libs/services/response.service';
import { GENERAL_CONFIG } from '../config/genaral.config';

const BUCKET = GENERAL_CONFIG.productsImportBucket;
const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    region: 'eu-west-1'
});
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

            response = responseService.getResponse(200, data);
        } catch (error) {
            response = responseService.getResponse(500, {
                status: 500,
                message: error.message
            })
        }

        return response;
    }
}

function readFile(key) {
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