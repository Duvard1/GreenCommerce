import { buildSchema } from 'type-graphql';
import { CreateProductResolver } from '../modules/product/controller/createProduct.controller';

export async function createSchema() {
  return await buildSchema({
    resolvers: [CreateProductResolver],
    validate: false,
  });
}
