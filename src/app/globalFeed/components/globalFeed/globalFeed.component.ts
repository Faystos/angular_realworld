import {Component} from "@angular/core";

@Component({
  selector: 'rw-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss']
})

export class GlobalFeedComponent {
  apiUrl = 'articles';
}
