import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackUpdateInput = {
  comment?: string | null;
  user?: UserWhereUniqueInput | null;
};
