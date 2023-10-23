import { Heading } from "@chakra-ui/react";
import CharacterList from "Example/features/CharacterList";
import PageLayout from "Base/layout/PageLayout";

const CharacterPage = () => (
  <PageLayout>
    {{ header: <Heading>Cool feature</Heading>, content: <CharacterList /> }}
  </PageLayout>
);

export default CharacterPage;
