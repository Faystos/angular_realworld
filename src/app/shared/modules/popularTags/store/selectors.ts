import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../types/appState.interface";
import {PopularTagsStateInterface} from "../types/popularTagsState.interface";

export const popularTagFeatureSelector = createFeatureSelector<AppStateInterface, PopularTagsStateInterface>('popularTags');

export const popularTagsSelector = createSelector(popularTagFeatureSelector, (popularTagsState: PopularTagsStateInterface) => (
  popularTagsState.data
));

export const loadingSelector = createSelector(popularTagFeatureSelector, (popularTagsState: PopularTagsStateInterface) => (
  popularTagsState.loading
));

export const errorSelector = createSelector(popularTagFeatureSelector, (popularTagsState: PopularTagsStateInterface) => (
  popularTagsState.error
));
