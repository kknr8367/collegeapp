import { CourseMaterialListRelationFilter } from "../courseMaterial/CourseMaterialListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClassModelWhereInput = {
  courseMaterials?: CourseMaterialListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  notification?: BooleanNullableFilter;
  schedule?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
