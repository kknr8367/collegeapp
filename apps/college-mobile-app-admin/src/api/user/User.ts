import { ClassModel } from "../classModel/ClassModel";
import { Feedback } from "../feedback/Feedback";
import { Grade } from "../grade/Grade";
import { JsonValue } from "type-fest";

export type User = {
  classes?: Array<ClassModel>;
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  grades?: Array<Grade>;
  id: string;
  lastName: string | null;
  profile: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
