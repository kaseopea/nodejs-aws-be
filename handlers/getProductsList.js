import { PRODUCTS_MOCK } from '../mock/products';

export const handler = async (event) => {
    console.log('Something Changed!!!');
    try {
        return await Promise.resolve(PRODUCTS_MOCK);
    } catch(err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log(err);
}