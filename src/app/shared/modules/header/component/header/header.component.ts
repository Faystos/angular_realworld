import {Component, OnInit} from "@angular/core";
import {currentUserSelector, isAnonymousSelector, isLoggedInSelector} from "../../../../../auth/store/selectors";
import {Observable} from "rxjs";
import {CurrentUserInterface} from "../../../../types/currentUser.interface";
import {select, Store} from "@ngrx/store";



@Component({
  selector: 'mc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;
  stopperUserPhoto: string;

  constructor(private store: Store) {
    this.stopperUserPhoto = '../../../../../../assets/img/no_photo.jpg'
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues = (): void => {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}

// [src]="(currentUser$ | async).username"
// (currentUser$ | async).image ||
