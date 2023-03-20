import Character from "../types/Character";
import PagintionMetadata from "../types/PagintionMetadata";

interface StartFetchAction {
  type: "START_FETCH";
}

interface SuccessFetchActionPayload {
  data: Character[];
  paginationMetadata: PagintionMetadata;
}

interface SuccessFetchAction {
  type: "SUCCESS_FETCH";
  payload: SuccessFetchActionPayload;
}

interface FailFetchActionPayload {
  error: string;
}

interface FailFetchAction {
  type: "FAIL_FETCH";
  payload: FailFetchActionPayload;
}

export const startFetch = (): StartFetchAction => ({
  type: "START_FETCH",
});

export const successFetchAction = (payload: SuccessFetchActionPayload): SuccessFetchAction => ({
  type: "SUCCESS_FETCH",
  payload,
});

export const failFetchAction = (payload: FailFetchActionPayload): FailFetchAction => ({
  type: "FAIL_FETCH",
  payload,
});

type AllCharactersAction = StartFetchAction | SuccessFetchAction | FailFetchAction;

export default AllCharactersAction;
