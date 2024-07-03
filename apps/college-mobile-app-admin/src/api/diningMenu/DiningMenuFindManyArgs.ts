import { DiningMenuWhereInput } from "./DiningMenuWhereInput";
import { DiningMenuOrderByInput } from "./DiningMenuOrderByInput";

export type DiningMenuFindManyArgs = {
  where?: DiningMenuWhereInput;
  orderBy?: Array<DiningMenuOrderByInput>;
  skip?: number;
  take?: number;
};
