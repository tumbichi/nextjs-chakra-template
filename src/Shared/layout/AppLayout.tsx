/* eslint-disable no-console */
import { PropsWithChildren } from "react";
import { Flex, Stack } from "@chakra-ui/react";

import { HomeModernIcon } from "@heroicons/react/24/outline";

import { SidebarProvider } from "Shared/contexts/SidebarContext";
import { DrawerProvider } from "Shared/contexts/DrawerContexts";

import { Drawer, Header, Sidebar } from "Shared/components";
import { useTranslation } from "Shared/i18n";

const HEADER_HEIGHT = "70px";

const AppLayout = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation("appLayout");

  const sidebarMenu = [
    {
      title: t("sidebar.menu.home"),
      path: "#",
      icon: HomeModernIcon,
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
                  label: t("header.menu.logout"),
                  onClick: () => console.warn("Not implemented yet"),
                },
              ]}
            />
            <Flex
              direction="column"
              minH={`calc(100vh - ${HEADER_HEIGHT})`}
              pt={4}
              px={6}
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
