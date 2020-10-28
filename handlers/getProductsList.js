import { PRODUCTS_MOCK } from '../mock/products';

export const handler = async (event) => {
    try {
        return await Promise.resolve(PRODUCTS_MOCK);
    } catch(err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log(err);
}