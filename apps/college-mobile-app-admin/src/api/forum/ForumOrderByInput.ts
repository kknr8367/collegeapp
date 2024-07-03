import { SortOrder } from "../../util/SortOrder";

export type ForumOrderByInput = {
  createdAt?: SortOrder;
  discussion?: SortOrder;
  id?: SortOrder;
  studyGroup?: SortOrder;
  updatedAt?: SortOrder;
};
