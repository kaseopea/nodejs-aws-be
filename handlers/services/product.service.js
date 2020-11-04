import * as PG from 'pg';

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } = process.env;
const dbConnection = `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`;
const dbConfig = {
    connectionString: dbConnection,
    ssl: {
        rejectUnauthorized: false,
    },
    connectionTimeoutMillis: 5000
};

class ProductService {
    constructor() {
        this.client = new PG.Pool(dbConfig);
    }

    async getProducts() {
        const query = `SELECT products.id,title,description,photo,price,count
        FROM products
        INNER JOIN stocks
        ON (products.id = stocks.product_id)`;

        try {
            const client = await this.client.connect();
            const { rows: products } = await client.query(query);
            client.release();
            
            return products; 
        }
        catch (err) {
            throw new Error(err.message);
        }
    }

    async getProductById(productId) {
        const query = `SELECT p.id,p.title,p.description,p.photo,p.price,s.count
        FROM products p        
        INNER JOIN stocks s
        ON (p.id = s.product_id)
        WHERE p.id='${productId}'`;

        try {
            const client = await this.client.connect();
            const product = await client.query(query);
            client.release();
            console.log(product);
            
            return product.rows[0]; 
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}

export const productService = new ProductService();
