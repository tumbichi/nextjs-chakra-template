import charactersClient from "../client";
import Character from "../types/Character";
import PagintionMetadata from "../types/PagintionMetadata";

interface GetAllCharactersResponse {
  results: Character[];
  info: PagintionMetadata;
}

export default async function getAllCharacters(): Promise<GetAllCharactersResponse> {
  try {
    const response = await charactersClient.get<GetAllCharactersResponse>("/");
    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[Characters/serices] getAllCharacters", e);
    throw new Error("Error inesperado");
  }
}
