class ResponseService {
    constructor() {}

    getResponsePlain(httpStatusCode, data) {
        return {
            "statusCode": httpStatusCode,
            "isBase64Encoded": false,
            "body": data
        }
    }

    getResponse(httpStatusCode, data) {
        return {
            "statusCode": httpStatusCode,
            "headers": {
                "Content-Type": 'application/json'
            },
            "isBase64Encoded": false,
            "body": JSON.stringify(data)
        }
    }
}

export const responseService = new ResponseService();