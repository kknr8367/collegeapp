import { CourseMaterialCreateNestedManyWithoutClassModelsInput } from "./CourseMaterialCreateNestedManyWithoutClassModelsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClassModelCreateInput = {
  courseMaterials?: CourseMaterialCreateNestedManyWithoutClassModelsInput;
  name?: string | null;
  notification?: boolean | null;
  schedule?: string | null;
  user?: UserWhereUniqueInput | null;
};
