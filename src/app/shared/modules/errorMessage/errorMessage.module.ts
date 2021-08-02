import {NgModule} from "@angular/core";
import {ErrorMessageComponent} from "./components/errorMessage.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMessageComponent
  ]
})

export class ErrorMessageModule {}
