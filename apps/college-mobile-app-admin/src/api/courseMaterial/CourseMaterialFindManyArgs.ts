import { CourseMaterialWhereInput } from "./CourseMaterialWhereInput";
import { CourseMaterialOrderByInput } from "./CourseMaterialOrderByInput";

export type CourseMaterialFindManyArgs = {
  where?: CourseMaterialWhereInput;
  orderBy?: Array<CourseMaterialOrderByInput>;
  skip?: number;
  take?: number;
};
