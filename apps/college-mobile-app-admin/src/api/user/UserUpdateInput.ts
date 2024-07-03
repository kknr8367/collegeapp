import { ClassModelUpdateManyWithoutUsersInput } from "./ClassModelUpdateManyWithoutUsersInput";
import { FeedbackUpdateManyWithoutUsersInput } from "./FeedbackUpdateManyWithoutUsersInput";
import { GradeUpdateManyWithoutUsersInput } from "./GradeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  classes?: ClassModelUpdateManyWithoutUsersInput;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutUsersInput;
  firstName?: string | null;
  grades?: GradeUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  profile?: string | null;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};
