import {Action} from '@ngrx/store';
import {IAudious, ISearchParams} from "../../interfaces";

export enum SongsActions {
  GetSongs = '[Songs Page] GetSongs',
  GetSongsLoadedSuccess = '[Songs Success] SongsLoadedSuccess',
  GetSongsLoadedError = '[Songs Page] SongsLoadedError'
}

export class GetSongs implements Action {
  readonly type = SongsActions.GetSongs;
  constructor(public payload: ISearchParams) {}
}

export class GetSongsLoadedSuccess implements Action {
  readonly type = SongsActions.GetSongsLoadedSuccess;

  constructor(public payload: IAudious) {}
}

export class GetSongsLoadedError implements Action {
  readonly type = SongsActions.GetSongsLoadedError;
}

// Смешанный тип
export type SongsUnion = GetSongs | GetSongsLoadedSuccess | GetSongsLoadedError;
