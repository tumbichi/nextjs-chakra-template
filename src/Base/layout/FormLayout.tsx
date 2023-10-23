import { PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";

interface FormLayoutProps extends PropsWithChildren {
  onSubmit?: () => void;
}

const FormLayout = ({ children, onSubmit }: FormLayoutProps) => (
  <Flex
    as="form"
    flexDirection="column"
    gap={8}
    w={{ base: "md", md: "container.sm" }}
    onSubmit={onSubmit}
  >
    {children}
  </Flex>
);

export default FormLayout;
