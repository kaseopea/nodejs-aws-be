import { productService } from './services/product.service';
import { responseService } from './services/response.service';

export const handler = async (event) => {
    const { id } = event.pathParameters;
    try {
        const product = productService.getProductById(id);
        const response = responseService.getResponse(200, product);

        return await Promise.resolve(response);
    } catch(err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log(err);
}