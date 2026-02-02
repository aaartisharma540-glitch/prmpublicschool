import { SchoolData } from "../types";
import { fetchSchoolInfo as staticFetch } from "./schoolService";

/**
 * Redundant service kept for compatibility.
 * Redirects to the pure static schoolService.
 */
export const fetchSchoolInfo = async (): Promise<SchoolData> => {
  return staticFetch();
};