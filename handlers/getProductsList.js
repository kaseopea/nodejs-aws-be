import { productService } from './services/product.service';
import { responseService } from './services/response.service';

export const handler = async () => {
    try {
        const products = productService.getProducts();
        const response = responseService.getResponse(200, products);
        
        return await Promise.resolve(response);
    } catch(err) {
        return await Promise.resolve(responseService.getResponse(500, {
            status: 500,
            ...err
        }));
    }
}
