import {Component, Input} from "@angular/core";
import {PopularTagType} from "../../../types/popularTagType.interface";

@Component({
  selector: 'rw-tag-list',
  templateUrl: './tagList.component.html',
  styleUrls:['./tagList.component.scss']
})

export class TagListComponent {

  @Input('tags')tagListProps: PopularTagType[];
}
