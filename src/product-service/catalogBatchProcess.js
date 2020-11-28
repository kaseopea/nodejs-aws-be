import AWS from 'aws-sdk';
import { productService } from './services/product.service';
import { responseService } from '../libs/services/response.service';
import { errorService } from '../libs/services/error.service';
import { GENERAL_CONFIG } from '../config/genaral.config';

const sns = new AWS.SNS({
    apiVersion: '2010-03-31',
    region: GENERAL_CONFIG.region,
});

const publishMessage = async (message) => {
    return new Promise((resolve, reject) => {
        sns.publish({
            Subject: 'CatalogBatchProcess Event',
            Message: JSON.stringify(message),
            TopicArn: process.env.SNS_ARN
        }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

export const handler = async (event) => {
    // create product in DB
    for (const record of event.Records) {
        let response;
        const item = JSON.parse(record.body);
        try {
            if (!item.title || (typeof item.title !== 'string')) {
                throw {
                    status: 400,
                    message: '400 Invalid payload'
                };
            }
            const product = await productService.createProduct(item);
            if (!product) {
                throw {
                    status: 404,
                    message: '404 Product not found'
                };
            }
            console.log('######', product);
            // SNS
            const message = await publishMessage(product);
            console.log(message);

            response = responseService.getResponse(200, product);
    
        } catch(err) {
            response = errorService.handleError(err);
        }

        return await Promise.resolve(response);
    }
    
}
