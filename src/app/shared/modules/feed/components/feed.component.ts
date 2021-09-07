import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {getFeedAction} from "../store/action/getFeed.action";
import {Observable, Subscription} from "rxjs";
import {parseUrl, stringify} from 'query-string';
import {GetFeedResponseInterface} from "../types/getFeedResponse.interface";
import {errorSelector, feedDataSelector, isLoadingSelector} from "../store/selectors";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'rw-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit, OnChanges, OnDestroy{
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feedData$: Observable<GetFeedResponseInterface | null>;
  limit = environment.limit;
  baseUrl: string;
  queryParamsSubscription: Subscription;
  currentPage: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged: boolean = !changes.apiUrlProps.firstChange &&
      changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue;
    if (isApiUrlChanged)  this.fetchFeed();
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) this.queryParamsSubscription.unsubscribe();
  }

  initializeValues = (): void => {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feedData$ = this.store.pipe(select(feedDataSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners = (): void => {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || '1');
      this.fetchFeed();
    })
  }

  fetchFeed = (): void => {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}));
  }
}
