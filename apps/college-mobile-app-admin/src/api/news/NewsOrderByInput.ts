import { SortOrder } from "../../util/SortOrder";

export type NewsOrderByInput = {
  announcement?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
