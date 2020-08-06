import { hen, Hen } from "../utility/createReducer";
import { createSelector } from "reselect";
import { RootState } from ".";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

export type audiobook = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  author: string;
  medium_image_url: string;
  thumb_image_url: string;
  cover_image_url: string;
  sharing_url: string;
  audio_url: string;
};

export interface audiobookState {
  audiobooks: Array<audiobook>;
  audiobook: audiobook;
  previouslyAudiobooks: Array<number>;
  loading: boolean;
}

export type InitialState = audiobookState;

const initialState: InitialState = {
  loading: false,
  audiobook: {} as audiobook,
  previouslyAudiobooks: [],
  audiobooks: [],
};

// Selectors
const mainSelector = (state: RootState) => state.audiobooks;

export const getLoading = createSelector(mainSelector, (state) => {
  state.loading;
});

export const getAudiobookList = createSelector(mainSelector, (state) => {
  return {
    audiobooks: state.audiobooks,
  };
});

export const getPreviouslyAudiobooksList = createSelector(
  mainSelector,
  (state) => {
    return {
      audiobooks: state.audiobooks,
      previouslyAudiobooks: state.previouslyAudiobooks,
    };
  }
);

export const getAudiobook = createSelector(mainSelector, (state) => {
  return {
    audiobook: state.audiobook,
  };
});

//Actions
class EditorReactions extends Hen<InitialState> {
  setLoading(a: boolean) {
    this.state.loading = a;
  }

  audiobooksList(a: Array<audiobook>) {
    this.state.audiobooks = a;
  }

  setActualAudiobook(a: audiobook) {
    this.state.audiobook = a;
  }

  previouslyAudiobooksList(id: number) {
    if (this.state.previouslyAudiobooks.find((item) => item === id)) {
      return;
    }
    this.state.previouslyAudiobooks = [...this.state.previouslyAudiobooks, id];
  }
}

//Reducers

export const [menuReducer, actions] = hen(new EditorReactions(initialState));
export default menuReducer;

export function fetchListAudiobooks(): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(`https://run.mocky.io/v3/96f0177a-118f-43b8-9c99-e84e3dc3fa81`)
      .then((r) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.audiobooksList(r.data.data));
      })
      .catch((e) => {
        console.log(e);
        dispatch(actions.setLoading(false));
      });
  };
}
