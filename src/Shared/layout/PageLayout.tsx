import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PeopleLayoutProps {
  children: {
    header: ReactNode;
    content: ReactNode;
  };
}

const PageLayout = ({ children }: PeopleLayoutProps) => (
  <Stack pb={24} px={6} spacing={8}>
    {children.header}
    {children.content}
  </Stack>
);

export default PageLayout;
