import { HealthService as THealthService } from "../api/healthService/HealthService";

export const HEALTHSERVICE_TITLE_FIELD = "name";

export const HealthServiceTitle = (record: THealthService): string => {
  return record.name?.toString() || String(record.id);
};
