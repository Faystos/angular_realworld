import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FeedTogglerComponent} from "./components/feedToggler.component";

@NgModule({
  declarations:[
    FeedTogglerComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
  ],
  exports: [
    FeedTogglerComponent
  ]
})
export class FeedTogglerModule {}
