import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  calendarNotification?: BooleanNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
