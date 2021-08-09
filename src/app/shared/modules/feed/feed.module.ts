import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FeedComponent} from "./components/feed.component";
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {FeedService} from "./services/feed.service";
import {RouterModule} from "@angular/router";
import {ErrorMessageModule} from "../errorMessage/errorMessage.module";
import {LoaderModule} from "../loader/loader.module";
import {PaginationModule} from "../pagination/pagination.module";

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    ErrorMessageModule,
    LoaderModule,
    PaginationModule
  ],
  exports: [
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})

export class FeedModule {}
