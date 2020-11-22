import { productService } from './services/product.service';
import { responseService } from '../libs/services/response.service';
import { errorService } from '../libs/services/error.service';

export const handler = async (event) => {
    console.log(JSON.stringify(event));
    const body = event.body ? JSON.parse(event.body) : {};
    let response;

    console.log(JSON.stringify(body));

    try {
        if (!body.title || (typeof body.title !== 'string')) {
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
