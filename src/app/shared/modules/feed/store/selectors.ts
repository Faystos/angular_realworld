import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../types/appState.interface";
import {FeedStateInterface} from "../types/feedState.interface";

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
  >('feed');

export const isLoadingSelector = createSelector(feedFeatureSelector, (feedState: FeedStateInterface) =>{
  return feedState.isLoading;
});

export  const errorSelector = createSelector(feedFeatureSelector, (feedState: FeedStateInterface) => {
  return feedState.error;
});

export const feedDataSelector = createSelector(feedFeatureSelector, (feedState: FeedStateInterface) => {
  return feedState.data;
});
