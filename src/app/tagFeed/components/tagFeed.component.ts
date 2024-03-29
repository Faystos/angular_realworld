import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'rw-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss']
})

export class TagFeedComponent implements OnInit {
  apiUrl: string;
  tagName: string;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = params.tag;
      this.apiUrl = `/articles?tag=${this.tagName}`;
    })
  }
}
