// eslint-disable-next-line no-shadow
export enum FetchActionTypes {
  Start = "START_FETCH",
  Succeess = "SUCCESS_FETCH",
  Failure = "FAILURE_FETCH",
}

type FetchPayload<Response> = {
  [FetchActionTypes.Start]: undefined;
  [FetchActionTypes.Succeess]: Response;
  [FetchActionTypes.Failure]: string;
};

export default FetchPayload;
