import { productService } from './services/product.service';
import { responseService } from './services/response.service';
import { loggerService } from './services/logger.service';

export const handler = async (event) => {
    const body = JSON.parse(event.body) || {};
    let response;

    loggerService.logRequest(event);

    try {
        if (!body.title || (body.title !== 'string')) {
            response = responseService.getResponse(400, {
                status: 400,
                message: '400 Invalid payload'
            });
        }

        const product = await productService.createProduct(body);
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
        return await Promise.resolve(responseService.getResponse(500, {
            status: 500,
            message: err.message
        }));
    }
}
