import { productService } from './product.service';
import { PRODUCTS_MOCK } from '../../mock/products';

test('Product service should return list of products', () => {
    expect(productService.getProducts()).toBe(PRODUCTS_MOCK);
});

test('Product service should return product by specific id', () => {
    const product = PRODUCTS_MOCK[PRODUCTS_MOCK.length - 1];

    expect(productService.getProductById(product.id)).toBe(product);
});
