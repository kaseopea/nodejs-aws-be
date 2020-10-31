import { productService } from './services/product.service';
import { responseService } from './services/response.service';

export const handler = async (event) => {
    const { id } = event.pathParameters;
    let response;
    
    try {
        const product = productService.getProductById(id);
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
            ...err
        }));
    }
}
