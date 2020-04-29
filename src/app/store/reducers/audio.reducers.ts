import {SongsActions, SongsUnion} from "../actions/audio.actions";
import {IAudious} from "../../interfaces";
import {initialState} from "../state/audio.state";

export function songsReducer(state: IAudious = initialState, action: SongsUnion) {
  switch (action.type) {
    case SongsActions.GetSongs:
      return {
        ...state
      };
    case SongsActions.GetSongsLoadedSuccess:
      return {
        ...state,
        songs: action.payload['result']
      };
    default:
      return state;
  }
}
