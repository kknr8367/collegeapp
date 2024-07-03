import { CourseMaterial } from "../courseMaterial/CourseMaterial";
import { User } from "../user/User";

export type ClassModel = {
  courseMaterials?: Array<CourseMaterial>;
  createdAt: Date;
  id: string;
  name: string | null;
  notification: boolean | null;
  schedule: string | null;
  updatedAt: Date;
  user?: User | null;
};
