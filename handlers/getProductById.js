import { PRODUCTS_MOCK } from '../mock/products';

export const handler = async (event) => {
    try {
        const product = PRODUCTS_MOCK.find(product => product.id === event.id);

        return await Promise.resolve(product);
    } catch(err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log(err);
}