import {Component, Input, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {getFeedAction} from "../store/action/getFeed.action";
import * as url from "url";
import {Observable} from "rxjs";
import {GetFeedResponseInterface} from "../types/getFeedResponse.interface";
import {errorSelector, feedDataSelector, isLoadingSelector} from "../store/selectors";

@Component({
  selector: 'rw-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit{
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feedData$: Observable<GetFeedResponseInterface | null>;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  initializeValues = ():void => {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feedData$ = this.store.pipe(select(feedDataSelector));
  }

  fetchData = (): void => {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}));
  }
}
