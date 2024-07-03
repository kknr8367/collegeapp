import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type CourseMaterialUpdateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
