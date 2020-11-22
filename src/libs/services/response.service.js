class ResponseService {
    constructor() {}

    getResponsePlain(httpStatusCode, data) {
        return {
            'statusCode': httpStatusCode,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            'isBase64Encoded': false,
            'body': data
        }
    }

    getResponse(httpStatusCode, data) {
        return {
            'statusCode': httpStatusCode,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            'isBase64Encoded': false,
            'body': JSON.stringify(data)
        }
    }
}

export const responseService = new ResponseService();
