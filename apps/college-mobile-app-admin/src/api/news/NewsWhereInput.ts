import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NewsWhereInput = {
  announcement?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
