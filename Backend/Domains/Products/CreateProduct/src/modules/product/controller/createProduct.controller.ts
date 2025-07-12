import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { ProductInput } from '../dto/product.input';
import { createProductService } from '../service/createProduct.service';
import logger from '../../../config/logger';

@Resolver()
export class CreateProductResolver {
  @Mutation(() => String, { description: "Create a new product and save it to the database" })
  async createProduct(@Arg('data') data: ProductInput): Promise<string> {
    logger.info(`Creating a new product: ${JSON.stringify(data)}`);
    return await createProductService(data);
  }

  @Query(() => String)
  hello(): string {
    logger.info('Ping a hello');
    return 'GraphQL API is working!';
  }
}
