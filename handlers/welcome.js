import { responseService } from './services/response.service';

export const handler = async (event) => {
    const message = 'Mess with the Best, Die like the Rest';
    const response = responseService.getResponsePlain(200, message);

    return await Promise.resolve(response);
}