import {Component, Input, OnInit} from "@angular/core";
import {UtilsService} from "../../../services/utils.service";

@Component({
  selector: 'rw-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit{
  @Input('total')totalProps: number;
  @Input('limit')limitProps: number;
  @Input('url')urlProps: string;
  @Input('currentPage')currentPageProps: number;

  pagesCount: number;
  pages: number[];

  constructor(
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utils.range(1, this.pagesCount);
  }


}
