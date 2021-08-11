import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PopularTagsComponent} from "./components/popularTags.component";
import {GetPopularTagsService} from "./services/getPopularTags.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducer";
import {EffectsModule} from "@ngrx/effects";
import {PopularTagsEffect} from "./store/effects/popularTags.effect";
import {RouterModule} from "@angular/router";
import {LoaderModule} from "../loader/loader.module";
import {ErrorMessageModule} from "../errorMessage/errorMessage.module";

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([PopularTagsEffect]),
    RouterModule,
    LoaderModule,
    ErrorMessageModule
  ],
  exports: [PopularTagsComponent],
  providers: [GetPopularTagsService]
})

export class PopularTagsModule {}
