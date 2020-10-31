import { productService } from './services/product.service';

export const handler = async (event) => {
    try {
        const products = productService.getProducts();

        return await Promise.resolve(products);
    } catch(err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log(err);
}