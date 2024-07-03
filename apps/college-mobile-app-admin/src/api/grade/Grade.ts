import { User } from "../user/User";

export type Grade = {
  academicProgress: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
  value: number | null;
};
