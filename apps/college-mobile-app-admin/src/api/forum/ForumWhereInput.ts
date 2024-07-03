import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ForumWhereInput = {
  discussion?: StringNullableFilter;
  id?: StringFilter;
  studyGroup?: BooleanNullableFilter;
};
