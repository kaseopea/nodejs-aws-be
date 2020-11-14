import AWS from 'aws-sdk';
import { responseService } from '../libs/services/response.service';
import { GENERAL_CONFIG } from '../config/genaral.config';

const BUCKET = GENERAL_CONFIG.productsImportBucket;

export const handler = async (event) => {
    const importName = event.queryStringParameters.name || 'undefinedName.csv';
    const importPath = `uploaded/${importName}`;

    const s3 = new AWS.S3({
        region: 'eu-west-1'
    });
    const params = {
        Bucket: BUCKET,
        Key: importPath,
        Expires: 60,
        ContentType: 'text/csv'
    };

    return new Promise((resolve, reject) => {
        s3.getSignedUrl('putObject', params, (error, url) => {
            if (error) {
                reject(responseService.getResponse(500, {
                    status: 500,
                    message: error.message
                }));
            }

            resolve({
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: url
            });
        });
    });
}
