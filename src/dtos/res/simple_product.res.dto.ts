import { ProductModel } from "../models/product.model";

export type SimpleProductDTO = Omit<
  ProductModel,
  | "rawTitle"
  | "contentHtml"
  | "lastExcelExportedDate"
  | "optionConfirmed"
  | "tagConfirmed"
  | "contentConfirmed"
  | "excelExported"
  | "isDeleted"
  | "currency"
  | "json"
  | "includesOptionHtml"
  | "exported"
  | "includesVideoToHtml"
  | "videoMuted"
  | "deletedAt"
> & {};
