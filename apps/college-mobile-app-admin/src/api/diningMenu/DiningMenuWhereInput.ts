import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DiningMenuWhereInput = {
  hours?: StringNullableFilter;
  id?: StringFilter;
  item?: StringNullableFilter;
};
