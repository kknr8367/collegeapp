import { DiningMenu as TDiningMenu } from "../api/diningMenu/DiningMenu";

export const DININGMENU_TITLE_FIELD = "item";

export const DiningMenuTitle = (record: TDiningMenu): string => {
  return record.item?.toString() || String(record.id);
};
