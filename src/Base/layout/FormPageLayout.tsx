import { PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";

interface FormPageLayoutProps extends PropsWithChildren {
  onSubmit?: () => void;
}

const FormPageLayout = ({ children, onSubmit }: FormPageLayoutProps) => (
  <Flex
    as="form"
    flexDirection="column"
    gap={8}
    m="auto"
    w={{ base: "md", md: "container.md" }}
    onSubmit={onSubmit}
  >
    {children}
  </Flex>
);

export default FormPageLayout;
