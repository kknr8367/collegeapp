import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  comment?: string | null;
  user?: UserWhereUniqueInput | null;
};
