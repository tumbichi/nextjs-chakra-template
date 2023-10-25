import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const SearchInput = () => (
  <InputGroup colorScheme="primary">
    <Input borderRadius="base" placeholder="Buscar" variant="filled" />
    <InputRightElement>
      <IconButton
        aria-label="search icon"
        borderRadius="base"
        h="100%"
        icon={<SearchIcon color="black" />}
        px={2}
        py={2}
        variant="ghost"
        w="100%"
      />
    </InputRightElement>
  </InputGroup>
);

export default SearchInput;
