import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LibraryResourceWhereInput = {
  author?: StringNullableFilter;
  availability?: BooleanNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
