import { responseService } from './response.service';

class ErrorService {
    constructor() {}

    handleError(error) {
        const status = error.status || 500;
        
        return responseService.getResponse(status, {
            status,
            message: error.message
        });
    }
}

export const errorService = new ErrorService();
