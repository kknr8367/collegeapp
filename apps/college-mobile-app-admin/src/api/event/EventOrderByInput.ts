import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  calendarNotification?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
