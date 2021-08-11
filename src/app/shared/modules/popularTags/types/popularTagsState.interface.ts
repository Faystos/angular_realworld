import {PopularTagType} from "../../../types/popularTagType.interface";

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null;
  error: string | null;
  loading: boolean;
}
