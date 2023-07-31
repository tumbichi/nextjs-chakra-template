import { useEffect, useReducer, useState } from "react";
import {
  failFetchAction,
  startFetch,
  successFetchAction,
} from "../actions/charactersListAction";
import allCharactersReducer, {
  initialState,
} from "../states/characterList/characterListReducer";
import getAllCharacters from "../services/getAllCharacters";

const useCharacterListPaginated = () => {
  const [state, dispatch] = useReducer(allCharactersReducer, initialState);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(startFetch());
    getAllCharacters(currentPage)
      .then((response) => {
        dispatch(
          successFetchAction({
            data: response.results,
            paginationMetadata: response.info,
          })
        );
      })
      .catch((e) => {
        dispatch(failFetchAction(e.message ?? "Error inesperado"));
      });
  }, [currentPage]);

  return {
    characters: state.data,
    currentPage,
    setCurrentPage,
    error: state.error,
    loading: state.loading,
    paginationMetadata: state.paginationMetadata,
  };
};

export default useCharacterListPaginated;
