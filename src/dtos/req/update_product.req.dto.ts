import { ProductModel } from "../models/product.model";

export type UpdateProductDTO = Partial<
  Omit<ProductModel, "id" | "createdAt">
> & {};
