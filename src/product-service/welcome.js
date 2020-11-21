import { responseService } from '../libs/services/response.service';

export const handler = async (event) => {
    const message = 'Mess with the Best, Die like the Rest';
    console.log({
        sqaUrl: process.env.SQS_URL,
        sqaArn: process.env.SQS_ARN,
        message,
    });
    const response = responseService.getResponsePlain(200, {
        sqaUrl: process.env.SQS_URL,
        sqaArn: process.env.SQS_ARN,
        message,
    });

    console.log(JSON.stringify(response));

    return await Promise.resolve(response);
}
