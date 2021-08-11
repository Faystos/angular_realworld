import {PopularTagsStateInterface} from "../types/popularTagsState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {popularTagsAction, popularTagsActionFailure, popularTagsActionSuccess} from "./actions/popularTags.action";

export const initialState: PopularTagsStateInterface = {
  data: null,
  error: null,
  loading: false
}

export const popularTagsReducer = createReducer(
  initialState,
  on(popularTagsAction, (state): PopularTagsStateInterface => ({
    ...state,
    loading: true
  })),
  on(popularTagsActionSuccess, (state, action): PopularTagsStateInterface => ({
    ...state,
    loading: false,
    data: action.popularTags
  })),
  on(popularTagsActionFailure, (state): PopularTagsStateInterface => ({
    ...state,
    loading: false
  }))
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}
