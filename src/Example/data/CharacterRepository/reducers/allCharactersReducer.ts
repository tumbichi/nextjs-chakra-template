import AllCharactersAction from "../actions/allCharactersAction";

import Character from "../types/Character";
import PagintionMetadata from "../types/PagintionMetadata";

interface AllCharactersState {
  data: Character[];
  loading: boolean;
  paginationMetadata: PagintionMetadata;
  error?: string;
}

export const initialState: AllCharactersState = {
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
  state: AllCharactersState = initialState,
  action: AllCharactersAction
): AllCharactersState => {
  switch (action.type) {
    case "START_FETCH": {
      return {
        ...state,
        loading: true,
      };
    }
    case "SUCCESS_FETCH": {
      const { data, paginationMetadata } = action.payload;
      return {
        ...state,
        loading: false,
        data,
        paginationMetadata,
      };
    }
    case "FAIL_FETCH": {
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        data: initialState.data,
        paginationMetadata: initialState.paginationMetadata,
        error,
      };
    }

    default: {
      return state;
    }
  }
};

export default allCharactersReducer;
