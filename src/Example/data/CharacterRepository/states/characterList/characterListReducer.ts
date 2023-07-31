// import CharacterListAction from "../actions/allCharactersAction";

import { FetchActionTypes } from "Shared/types/FetchPayload";
import CharacterListAction from "../../actions/charactersListAction";
import Character from "../../types/Character";
import PagintionMetadata from "../../types/PagintionMetadata";

interface CharacterListState {
  data: Character[];
  loading: boolean;
  paginationMetadata: PagintionMetadata;
  error?: string;
}

export const initialState: CharacterListState = {
  data: [],
  loading: false,
  paginationMetadata: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
};

const allCharactersReducer = (
  state: CharacterListState = initialState,
  action: CharacterListAction
): CharacterListState => {
  switch (action.type) {
    case FetchActionTypes.Start: {
      return {
        ...state,
        loading: true,
      };
    }
    case FetchActionTypes.Succeess: {
      const { data, paginationMetadata } = action.payload;
      return {
        ...state,
        loading: false,
        data,
        paginationMetadata,
      };
    }
    case FetchActionTypes.Failure: {
      return {
        ...state,
        loading: false,
        data: initialState.data,
        paginationMetadata: initialState.paginationMetadata,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default allCharactersReducer;
