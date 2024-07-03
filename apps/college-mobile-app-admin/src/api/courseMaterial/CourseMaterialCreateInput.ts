import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type CourseMaterialCreateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
