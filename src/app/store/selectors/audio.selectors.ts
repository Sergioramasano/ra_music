import {createFeatureSelector, createSelector, State} from '@ngrx/store';
import {IAudious} from "../../interfaces";
export const selectSongs = createFeatureSelector('songs');

export const selectSongsList = createSelector(selectSongs, (state: IAudious) => {
  return  state.songs;
});
