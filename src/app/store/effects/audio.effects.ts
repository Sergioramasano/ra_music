import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {exhaustMap, mergeMap, share, switchMap} from 'rxjs/operators';
import {IAudious, ISearchParams} from "../../interfaces";
import {GetAuthorService} from "../../services/get-author.service";
import {GetSongsLoadedSuccess, SongsActions} from "../actions/audio.actions";

@Injectable()
export class SongsEffects {
  @Effect()
  fetch$ = this.actions$.pipe(
    ofType(SongsActions.GetSongs),
    exhaustMap((action: ISearchParams) => {
      return this.getSongs.getSongByName(action.songName, action.limit)
        .pipe(
          mergeMap((response) => {
          return [new GetSongsLoadedSuccess(response.results)];
        })
      );
    }),
    share()
  );
  constructor(
    private actions$: Actions,
    private getSongs: GetAuthorService
  ) {}
}
