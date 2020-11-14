class LoggerService {
    constructor() {}

    logRequest(event) {
        const { routeKey, body, pathParameters } = event;

        console.log('##### Incoming request ######');
        console.log(`${routeKey}`);
        if (JSON.stringify(pathParameters)) {
            console.log(`pathParameters: ${JSON.stringify(pathParameters)}`);
        }
        if (body) {
            console.log(`Body: ${body}`);
        }
        console.log('#############################');
    }
}

export const loggerService = new LoggerService();
