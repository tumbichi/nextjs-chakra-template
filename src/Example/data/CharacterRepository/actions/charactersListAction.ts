import BaseAction from "Base/types/BaseAction";
import FetchPayload, { FetchActionTypes } from "Base/types/FetchPayload";

import Character from "../types/Character";
import PagintionMetadata from "../types/PagintionMetadata";

interface SuccessFetchActionPayload {
  data: Character[];
  paginationMetadata: PagintionMetadata;
}

type CharacterListPayload = FetchPayload<SuccessFetchActionPayload>;

type CharacterListActions = BaseAction<CharacterListPayload>;

type CharacterListAction = CharacterListActions[keyof CharacterListActions];

export const startFetch = (): CharacterListActions["START_FETCH"] => ({
  type: FetchActionTypes.Start,
});

export const successFetchAction = (
  payload: SuccessFetchActionPayload
): CharacterListActions["SUCCESS_FETCH"] => ({
  type: FetchActionTypes.Succeess,
  payload,
});

export const failFetchAction = (
  payload: string
): CharacterListActions["FAILURE_FETCH"] => ({
  type: FetchActionTypes.Failure,
  payload,
});

export default CharacterListAction;
