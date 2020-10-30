import { productService } from './services/product.service';

export const handler = async (event) => {
    const { id } = event.pathParameters;
    try {
        const product = productService.getProductById(id);

        return await Promise.resolve(product);
    } catch(err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log(err);
}