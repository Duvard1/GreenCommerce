import { ProductInput } from '../dto/product.input';
import { insertProduct } from '../repository/product.repository';
import logger from '../../../config/logger'; 

export async function createProductService(data: ProductInput): Promise<string> {
  try {
    logger.info(`Trying to create product: ${JSON.stringify(data)}`);
    await insertProduct(data);
    logger.info(`Product successfully created: ${data.name}`);
    return 'Product successfully created';
  } catch (error) {
    logger.error(`Error creating product: ${error instanceof Error ? error.message : error}`);
    throw error;
  }
}
