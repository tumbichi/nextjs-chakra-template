import { Grid, Skeleton } from "@chakra-ui/react";
import CharacterCard from "Example/components/CharacterCard";
import { Pagination } from "Shared/components";
import useCharacterListPaginated from "../data/CharacterRepository/hooks/useCharacterListPaginated";

const CharacterList = () => {
  const {
    loading,
    characters,
    error,
    paginationMetadata,
    currentPage,
    setCurrentPage,
  } = useCharacterListPaginated();

  if (error) return <div>{error}</div>;

  console.log("paginationMetadata :>> ", paginationMetadata);

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
        {loading
          ? [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((item) => (
              <Skeleton
                key={item}
                h={{ base: "300px", sm: "330px", lg: "230px" }}
                w={{ base: "full", lg: "md", "2xl": "27rem" }}
              />
            ))
          : characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        numberOfPages={paginationMetadata.pages}
        numberOfRows={paginationMetadata.count}
        rowsPerPage={20}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default CharacterList;
