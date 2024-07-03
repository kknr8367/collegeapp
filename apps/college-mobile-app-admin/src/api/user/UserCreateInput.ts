import { ClassModelCreateNestedManyWithoutUsersInput } from "./ClassModelCreateNestedManyWithoutUsersInput";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { GradeCreateNestedManyWithoutUsersInput } from "./GradeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  classes?: ClassModelCreateNestedManyWithoutUsersInput;
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  grades?: GradeCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  profile?: string | null;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
};
