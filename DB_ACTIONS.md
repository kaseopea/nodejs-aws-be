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
    ('f4532e84-5e58-4a47-8408-1347540bfd2b', 6),
    ('f4532e84-5e58-4a47-8408-1347540bfd2b', 7),
    ('f4532e84-5e58-4a47-8408-1347540bfd2b', 12),
    ('f4532e84-5e58-4a47-8408-1347540bfd2b', 7),
    ('f4532e84-5e58-4a47-8408-1347540bfd2b', 8),
    ('f4532e84-5e58-4a47-8408-1347540bfd2b', 2),
    ('f4532e84-5e58-4a47-8408-1347540bfd2b', 3),
    ('f4532e84-5e58-4a47-8408-1347540bfd2b', 2);