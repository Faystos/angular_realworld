import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";
import {PopularTagType} from "../../../../types/popularTagType.interface";

export const popularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const popularTagsActionSuccess = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{popularTags: PopularTagType[]}>()
);

export const popularTagsActionFailure = createAction(ActionTypes.GET_POPULAR_TAGS_FAILURE)

