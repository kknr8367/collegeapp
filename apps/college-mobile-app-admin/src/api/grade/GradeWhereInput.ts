import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GradeWhereInput = {
  academicProgress?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  value?: FloatNullableFilter;
};
