import React from "react";
import useAllCharacters from "../data/CharacterRepository/hooks/useAllCharacters";

const CharacterList = () => {
  const { loading, characters, error, paginationMetadata } = useAllCharacters();

  if (loading) return <div>Loading</div>;

  if (error) return <div>{error}</div>;
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>{JSON.stringify(character, undefined, 2)}</div>
      ))}
    </div>
  );
};

export default CharacterList;
