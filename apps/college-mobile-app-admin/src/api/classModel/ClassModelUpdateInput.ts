import { CourseMaterialUpdateManyWithoutClassModelsInput } from "./CourseMaterialUpdateManyWithoutClassModelsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClassModelUpdateInput = {
  courseMaterials?: CourseMaterialUpdateManyWithoutClassModelsInput;
  name?: string | null;
  notification?: boolean | null;
  schedule?: string | null;
  user?: UserWhereUniqueInput | null;
};
