import {Injectable} from "@angular/core";

import {GetPopularTagsService} from "../../services/getPopularTags.service";
import {Actions, ofType, createEffect} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {PopularTagType} from "../../../../types/popularTagType.interface";
import {popularTagsAction, popularTagsActionFailure, popularTagsActionSuccess} from "../actions/popularTags.action";
import {of} from "rxjs";

@Injectable()
export class PopularTagsEffect {
  getPopularTags$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(popularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags:PopularTagType[]) => {
            return popularTagsActionSuccess({popularTags})
          }),
          catchError(() => of(popularTagsActionFailure()))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private popularTagsService: GetPopularTagsService
  ) {}
}
