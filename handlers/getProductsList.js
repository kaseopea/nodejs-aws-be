import { productService } from './services/product.service';
import { responseService } from './services/response.service';

export const handler = async () => {
    try {
        const products = productService.getProducts();
        const response = responseService.getResponse(200, products);
        
        return await Promise.resolve(response);
    } catch(err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log(err);
}