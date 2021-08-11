import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {popularTagsAction} from "../store/actions/popularTags.action";
import {Observable} from "rxjs";
import {PopularTagType} from "../../../types/popularTagType.interface";
import {errorSelector, loadingSelector, popularTagsSelector} from "../store/selectors";

@Component({
  selector: 'rw-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss']
})

export class PopularTagsComponent implements OnInit {

  popularTags$: Observable<PopularTagType[] | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;


  constructor(private store: Store) {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(loadingSelector));
  }

  ngOnInit(): void {
    this.initialazeValues();
    this.fetchData();
  }

  initialazeValues = (): void => {

  }

  fetchData = (): void => {
    this.store.dispatch(popularTagsAction());
  }
}
