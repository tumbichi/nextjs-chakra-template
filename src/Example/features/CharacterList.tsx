import { Grid } from "@chakra-ui/react";
import CharacterCard from "Example/components/CharacterCard";
import { useState } from "react";
import { Pagination } from "Shared/components";
import useAllCharacters from "../data/CharacterRepository/hooks/useAllCharacters";

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { loading, characters, error, paginationMetadata } = useAllCharacters();

  if (loading) return <div>Loading</div>;

  if (error) return <div>{error}</div>;

  return (
    <>
      <Grid
        gap={4}
        my={8}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        w="100%"
      >
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        numberOfPages={paginationMetadata.pages}
        numberOfRows={paginationMetadata.count}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default CharacterList;
