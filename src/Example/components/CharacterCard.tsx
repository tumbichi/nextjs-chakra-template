import {
  Stack,
  Flex,
  Icon,
  chakra,
  Box,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import Character from "Example/data/CharacterRepository/types/Character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => (
  <Stack
    border="1px solid"
    borderColor="gray.400"
    direction={{ base: "column", md: "row" }}
    overflow="hidden"
    p={2}
    pos="relative"
    rounded="md"
    spacing={{ base: 0, md: 4 }}
    w={{ base: "full", lg: "md", "2xl": "27rem" }}
  >
    {character.status && (
      <Flex
        alignItems="center"
        bg="red.400"
        color="white"
        fontSize="xs"
        fontWeight="500"
        left={0}
        p={1}
        pos="absolute"
        top={0}
      >
        <Text>{character.status}</Text> &nbsp;{" "}
        {/* <Icon as={AiOutlineExclamationCircle} h={4} w={4} /> */}
      </Flex>
    )}
    <Flex ml="0 !important">
      <Image
        alt="product image"
        h="auto"
        objectFit="cover"
        rounded="md"
        src={character.image}
        w={{ base: "100%", md: "18rem" }}
      />
    </Flex>
    <Stack
      direction="column"
      mt={{ base: "5px !important", sm: 0 }}
      spacing={2}
      w="100%"
    >
      <Flex justify="space-between">
        <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
          {character.name}
        </chakra.h3>
        <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
          {character.gender}
        </chakra.h3>
      </Flex>
      <Box>
        <Text fontSize="lg" fontWeight="500">
          {character.location.name}
        </Text>
      </Box>
      <Flex alignItems="center" color="gray.500">
        <>
          {character.type} | {character.gender} | {character.species} |{" "}
          {character.origin.name}
        </>
        {/* {product.detail.map((data, index) => (
          <Fragment key={index}>
            <Text fontSize={{ base: "sm", sm: "md" }}>{data}</Text>
            {product.detail.length - 1 != index && (
              <chakra.span mx={2} fontSize={{ base: "sm", sm: "md" }}>
                |
              </chakra.span>
            )}
          </Fragment>
        ))} */}
      </Flex>
      <Stack
        alignItems={{ base: "flex-start", sm: "center" }}
        direction={{ base: "column-reverse", sm: "row" }}
        justify="space-between"
      >
        <Text fontSize="sm" mt={{ base: 1, sm: 0 }}>
          <>Created {character.created}</>
        </Text>
        <Stack direction="row" spacing={1} mb="0 !important">
          {/* <IconButton >
            <Icon as={AiOutlineHeart} w={4} h={4} />
          </IconButton> */}
          {/* <IconButton spacing={2} bg="green.500" color="white">
            <Icon as={BsTelephoneX} w={4} h={4} />
            <Text fontSize="sm">Show Phone no.</Text>
          </IconButton> */}
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);

export default CharacterCard;
