import { db } from '../../../config/database';
import { ProductInput } from '../dto/product.input';

export async function insertProduct(product: ProductInput): Promise<void> {
  await db.execute(
    `INSERT INTO products (name, description, price, stock, brand, category, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      product.name,
      product.description,
      product.price,
      product.stock,
      product.brand,
      product.category,
      product.image_url,
    ]
  );
}
