import { useEffect, useReducer } from "react";
import {
  failFetchAction,
  startFetch,
  successFetchAction,
} from "../actions/allCharactersAction";
import allCharactersReducer, {
  initialState,
} from "../reducers/allCharactersReducer";
import getAllCharacters from "../services/getAllCharacters";

const useAllCharacters = () => {
  const [state, dispatch] = useReducer(allCharactersReducer, initialState);

  useEffect(() => {
    dispatch(startFetch());
    getAllCharacters()
      .then((response) => {
        dispatch(
          successFetchAction({
            data: response.results,
            paginationMetadata: response.info,
          })
        );
      })
      .catch((e) => {
        dispatch(failFetchAction({ error: e.message }));
      });
  }, []);

  return {
    loading: state.loading,
    characters: state.data,
    paginationMetadata: state.paginationMetadata,
    error: state.error,
  };
};

export default useAllCharacters;
