import React from "react";

import {
  Drawer as ChakraDrawer,
  DrawerProps as ChakraDrawerProps,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Icon,
  IconButton,
  Show,
  Hide,
  Flex,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { useDrawer } from "../contexts/DrawerContexts";
import Link from "next/link";
import ItemMenu from "../types/ItemMenu";
import Logo from "./Logo";

interface DrawerProps extends Omit<ChakraDrawerProps, "onClose" | "isOpen" | "children"> {
  menu: ItemMenu[];
}

const Drawer = ({ menu, ...drawerProps }: DrawerProps) => {
  const { isOpen, close } = useDrawer();
  return (
    <ChakraDrawer placement={"left"} {...drawerProps} onClose={close} isOpen={isOpen}>
      <Hide above="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" display="flex" alignItems="center" justifyContent="space-between">
            <Box cursor="pointer">
              <Flex h="fit-content" w="fit-content" flexDir="column">
                <Logo />
              </Flex>
            </Box>
            <IconButton
              aria-label="Menu"
              icon={<Icon as={Bars3Icon} h={4} w={4} />}
              variant="ghost"
              mr={2}
              px={3}
              size="xs"
              onClick={close}
              // display=
            />
          </DrawerHeader>
          <DrawerBody p="0">
            <Flex flexDir="column" pt={5}>
              {menu.map((itemMenu) => (
                <Link key={itemMenu.title} href={itemMenu.path}>
                  <Button
                    justifyContent={isOpen ? "flex-start" : "center"}
                    leftIcon={isOpen ? <Icon ml={4} as={itemMenu.icon} /> : undefined}
                    variant="ghost"
                    iconSpacing={0}
                    w="100%"
                    borderRadius={0}
                  >
                    {isOpen ? <Text ml={4}>{itemMenu.title}</Text> : <Icon as={itemMenu.icon} />}
                  </Button>
                </Link>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Hide>
    </ChakraDrawer>
  );
};

export default Drawer;
