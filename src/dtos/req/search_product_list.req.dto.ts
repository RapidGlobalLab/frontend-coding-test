import { ProductModel } from "../models/product.model";
import { PaginationReqDTO } from "./common/pagination.req.dto";

export type SearchProductListDTO = Partial<
  Pick<
    ProductModel,
    | "title"
    | "isUploaded"
    | "smartStoreId"
    | "st11Id"
    | "st11AbroadId"
    | "gmarketId"
    | "auctionId"
    | "gmarketV2Id"
    | "auctionV2Id"
    | "coupangId"
    | "interparkId"
    | "employeeId"
    | "memo"
  >
> &
  PaginationReqDTO & {
    start_createdAt?: string;
    end_createdAt?: string;
    label?: string;
  };
