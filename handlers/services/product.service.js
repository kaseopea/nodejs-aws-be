import { PRODUCTS_MOCK } from '../../mock/products';

class ProductService {
    constructor() {
        this.products = PRODUCTS_MOCK;
    }

    getProducts() {
        return this.products || [];
    }

    getProductById(productId) {
        return this.products.find(product => product.id === productId);
    }
}

export const productService = new ProductService();