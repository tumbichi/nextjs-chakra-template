import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup colorScheme="primary">
      <Input placeholder="Buscar" borderRadius="base" variant="filled" />
      <InputRightElement p="atto">
        <IconButton
          h="100%"
          w="100%"
          px={2}
          py={2}
          aria-label="search icon"
          icon={<SearchIcon color="black" />}
          borderRadius="base"
          variant="ghost"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
