import generateUrlWithQuery from "Shared/helpers/generateUrlWithQuery";
import charactersClient from "../client";
import Character from "../types/Character";
import PagintionMetadata from "../types/PagintionMetadata";

interface GetAllCharactersResponse {
  results: Character[];
  info: PagintionMetadata;
}

export default async function getAllCharacters(
  page: number
): Promise<GetAllCharactersResponse> {
  const url = generateUrlWithQuery("", { page });
  try {
    const response = await charactersClient.get<GetAllCharactersResponse>(url);
    return response.data;
  } catch (e) {
    // TODO: Handle error
    // eslint-disable-next-line no-console
    console.error("[Characters/serices] getAllCharacters", e);
    throw new Error("Error inesperado");
  }
}
