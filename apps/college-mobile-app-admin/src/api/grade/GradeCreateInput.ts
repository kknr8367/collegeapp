import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GradeCreateInput = {
  academicProgress?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
