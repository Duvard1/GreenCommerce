import { InputType, Field, Float, Int } from 'type-graphql';

@InputType({ description: "Input to create a product" })
export class ProductInput {
  @Field({ description: "Product Name" }) name!: string;
  @Field({ description: "Detailed description" }) description!: string;
  @Field(() => Float, { description: "Product Price" }) price!: number;
  @Field(() => Int, { description: "Quantity in stock" }) stock!: number;
  @Field({ description: "Product Brand" }) brand!: string;
  @Field({ description: "Product Category" }) category!: string;
  @Field({ description: "Product image URL" }) image_url!: string;
}
