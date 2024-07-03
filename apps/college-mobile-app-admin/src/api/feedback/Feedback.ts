import { User } from "../user/User";

export type Feedback = {
  comment: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
