import { LibraryResourceWhereInput } from "./LibraryResourceWhereInput";
import { LibraryResourceOrderByInput } from "./LibraryResourceOrderByInput";

export type LibraryResourceFindManyArgs = {
  where?: LibraryResourceWhereInput;
  orderBy?: Array<LibraryResourceOrderByInput>;
  skip?: number;
  take?: number;
};
