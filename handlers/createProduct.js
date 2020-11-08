import { productService } from './services/product.service';
import { responseService } from './services/response.service';
import { loggerService } from './services/logger.service';
import { errorService } from './services/error.service';

export const handler = async (event) => {
    console.log(JSON.stringify(event));
    const body = event.body ? JSON.parse(event.body) : {};
    let response;
    loggerService.logRequest(event);

    try {
        if (!body || !body.title || (body.title !== 'string')) {
            throw {
                status: 400,
                message: '400 Invalid payload'
            };
        }

        const product = await productService.createProduct(body);

        if (!product) {
            throw {
                status: 404,
                message: '404 Product not found'
            };
        }
      
        response = responseService.getResponse(200, product);

        return await Promise.resolve(response);
    } catch(err) {
        return await Promise.resolve(errorService.handleError(err));
    }
}
