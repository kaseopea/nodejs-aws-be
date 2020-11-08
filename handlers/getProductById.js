import { productService } from './services/product.service';
import { responseService } from './services/response.service';
import { loggerService } from './services/logger.service';
import { errorService } from './services/error.service';

export const handler = async (event) => {
    const { id } = event.pathParameters;
    let response;

    loggerService.logRequest(event);
    
    try {
        const product = await productService.getProductById(id);
        if (product) {
            response = responseService.getResponse(200, product);
        } else {
            response = responseService.getResponse(404, {
                status: 404,
                message: '404 Product not found'
            });
        }

        return await Promise.resolve(response);
    } catch(err) {
        return await Promise.resolve(errorService.handleError(err));
    }
}
