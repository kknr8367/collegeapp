import { ClassModel } from "../classModel/ClassModel";

export type CourseMaterial = {
  classField?: ClassModel | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
