import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseMaterialWhereInput = {
  classField?: ClassModelWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
