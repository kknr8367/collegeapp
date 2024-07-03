import { LibraryResource as TLibraryResource } from "../api/libraryResource/LibraryResource";

export const LIBRARYRESOURCE_TITLE_FIELD = "title";

export const LibraryResourceTitle = (record: TLibraryResource): string => {
  return record.title?.toString() || String(record.id);
};
