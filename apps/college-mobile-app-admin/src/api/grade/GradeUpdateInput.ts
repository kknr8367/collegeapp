import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GradeUpdateInput = {
  academicProgress?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
