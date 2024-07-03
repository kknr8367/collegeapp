import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  classes?: ClassModelListRelationFilter;
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  firstName?: StringNullableFilter;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profile?: StringNullableFilter;
  role?: "Option1";
  username?: StringFilter;
};
