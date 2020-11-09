# Task 4

### SQL Queries

Create `products` table
    
    CREATE TABLE products (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        description TEXT,
        photo TEXT,
        price NUMERIC
    );

Create `stocks` table
    
    CREATE TABLE stocks (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        product_id uuid,
        count SMALLINT,
        FOREIGN KEY ('product_id') REFERENCES products('id')
    );

Plugin for using uuid
    
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

Insert data into both tables
    
    INSERT INTO public.products (title, description, photo, price) values
    ('Sigma 50mm F1.4 DG ART', 'Travel, Wedding & Events, Portrait, Family', 'sigma_50_1_4.jpg', 949),
    ('Sigma 35mm F1.4 DG', 'Travel, Wedding & Events, Portrait, Specialty', 'sigma_35_1_4.jpg', 799),
    ('Sigma 24mm F1.4 DG HSM', 'Creative, Travel, Landscape, Wedding & Events, Nature & Wildlife', 'sigma_24_1_4.jpg', 849),
    ('Sigma 35mm F1.2 DG DN', 'Creative, Travel, Wedding & Events, Portrait, Family, Specialty', 'sigma_35_1_2.jpg', 1499),
    ('Sigma 14-24mm F2.8 DG DN', 'Creative, Travel, Landscape, Wedding & Events, Family, Nature & Wildlife, Specialty', 'sigma_14_24_2_8.jpg', 1399),
    ('Sigma 40mm F1.4 DG HSM', 'Creative, Travel, Landscape, Wedding & Events, Family, Specialty', 'sigma_40_1_4.jpg', 1399),
    ('Sigma 24-70mm F2.8 DG', 'Creative, Travel, Landscape, Wedding & Events, Portrait, Family, Specialty', 'sigma_24_70_2_8.jpg', 1099),
    ('Sigma 24-105mm F4 DG', 'Travel, Portrait, Family, Nature & Wildlife', 'sigma_24_105_4.jpg', 849),
    ('Sigma 105mm F1.4 DG HSM', 'Creative, Wedding & Events, Portrait, Sports & Action, Specialty', 'sigma_105_1_4.jpg', 1599);

    INSERT INTO public.stocks (product_id, count) values
    ('f4532e84-5e58-4a47-8408-1347540bfd2b', 4),
    ('9cdd7bde-9e36-4249-b7c6-cba383316139', 6),
    ('1481eeff-a34c-4860-9f73-c33394e85b6d', 7),
    ('672aabae-ad51-425a-838b-34bfadaaf4f9', 12),
    ('03e01b85-885d-4bab-8bd0-cbe442b99756', 7),
    ('9fcb04d8-7159-4930-8e60-182f1892438c', 8),
    ('2cd18f32-2487-425e-abc8-3254fdad39ce', 2),
    ('3bc8c376-2940-44e8-8f59-a8c89293b9d8', 3),
    ('40aadad4-c64e-4af5-900f-04903586f0d5', 2);