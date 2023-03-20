/* eslint-disable no-console */
import { PropsWithChildren } from "react";
import { Flex, Stack } from "@chakra-ui/react";

import { SidebarProvider } from "Shared/contexts/SidebarContext";
import { DrawerProvider } from "Shared/contexts/DrawerContexts";

import { Drawer, Header, Sidebar } from "Shared/components";

const HEADER_HEIGHT = "70px";

const AppLayout = ({ children }: PropsWithChildren) => {
  const sidebarMenu = [
    {
      title: "Home",
      path: "#",
    },
  ];

  return (
    <DrawerProvider>
      <SidebarProvider>
        <Flex>
          <Drawer menu={sidebarMenu} />
          <Sidebar display={{ base: "none", sm: "block" }} menu={sidebarMenu} />
          <Stack flex="1" spacing={0}>
            <Header
              menu={[
                {
                  label: "Home",
                  onClick: () => console.warn("Not implemented yet"),
                },
                {
                  label: "Nosotros",
                  onClick: () => console.warn("Not implemented yet"),
                },
                {
                  label: "Salir",
                  onClick: () => console.warn("Not implemented yet"),
                },
              ]}
            />
            <Flex
              direction="column"
              minH={`calc(100vh - ${HEADER_HEIGHT})`}
              pt="xlarge"
              px="deka"
            >
              {children}
            </Flex>
          </Stack>
        </Flex>
      </SidebarProvider>
    </DrawerProvider>
  );
};

export default AppLayout;
