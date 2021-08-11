import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PopularTagType} from "../../../types/popularTagType.interface";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {GetPopularTagsInterface} from "../types/getPopularTags.interface";
import {map} from "rxjs/operators";

@Injectable()

export class GetPopularTagsService {
  constructor(
    private http: HttpClient
  ) {}

  getPopularTags = (): Observable<PopularTagType[]> => {
    const url = `${environment.apiUrl}tags`;
    return  this.http.get<GetPopularTagsInterface>(url).pipe(
      map((response: GetPopularTagsInterface) => response.tags)
    );
  }

}
