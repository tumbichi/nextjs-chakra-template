import { Flex, Stack } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { Header, Sidebar } from "../components";
import { SidebarProvider } from "../contexts/SidebarContext";
const HEADER_HEIGHT = "70px";

const AppLayout = ({ children }: PropsWithChildren) => {
  const sidebarMenu = [
    {
      title: "Home",
      path: "#",
    },
  ];

  return (
    <SidebarProvider>
      <Flex>
        <Sidebar menu={sidebarMenu} />
        <Stack flex="1" spacing={0}>
          <Header
            menu={[
              { label: "Home", onClick: () => console.warn("Not implemented yet") },
              { label: "Nosotros", onClick: () => console.warn("Not implemented yet") },
              { label: "Salir", onClick: () => console.warn("Not implemented yet") },
            ]}
          />
          <Flex minH={`calc(100vh - ${HEADER_HEIGHT})`} direction="column" px="deka" pt="xlarge">
            {children}
          </Flex>
        </Stack>
      </Flex>
    </SidebarProvider>
  );
};

export default AppLayout;
