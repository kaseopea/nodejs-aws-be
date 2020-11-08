import { productService } from './services/product.service';
import { responseService } from './services/response.service';
import { loggerService } from './services/logger.service';

export const handler = async (event) => {
    loggerService.logRequest(event);

    try {
        const products = await productService.getProducts();
        const response = responseService.getResponse(200, products);
        
        return await Promise.resolve(response);
    } catch(err) {
        return await Promise.resolve(responseService.getResponse(500, {
            status: 500,
            message: err.message
        }));
    }
}
