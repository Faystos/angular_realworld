import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {FeedModule} from "../shared/modules/feed/feed.module";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {PopularTagsModule} from "../shared/modules/popularTags/popularTags.module";
import {FeedTogglerModule} from "../shared/modules/feedToggler/feedToggler.module";
import {TagFeedComponent} from "./components/tagFeed.component";

const routes: Routes = [{
  path: 'tags/:tag',
  component: TagFeedComponent
}];

@NgModule({
  declarations: [
    TagFeedComponent
  ],
  exports: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ]
})

export class TagFeedModule {}
