import { SortOrder } from "../../util/SortOrder";

export type LibraryResourceOrderByInput = {
  author?: SortOrder;
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
