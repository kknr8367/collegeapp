import { CourseMaterial as TCourseMaterial } from "../api/courseMaterial/CourseMaterial";

export const COURSEMATERIAL_TITLE_FIELD = "title";

export const CourseMaterialTitle = (record: TCourseMaterial): string => {
  return record.title?.toString() || String(record.id);
};
