import Link from "next/link";

import {
  Drawer as ChakraDrawer,
  DrawerProps as ChakraDrawerProps,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Hide,
  Flex,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { useDrawer } from "Shared/contexts/DrawerContexts";

import ItemMenu from "Shared/types/ItemMenu";

import Logo from "./Logo";

interface DrawerProps
  extends Omit<ChakraDrawerProps, "onClose" | "isOpen" | "children"> {
  menu: ItemMenu[];
}

const Drawer = ({ menu, ...drawerProps }: DrawerProps) => {
  const { isOpen, close } = useDrawer();
  return (
    <ChakraDrawer
      placement={"left"}
      {...drawerProps}
      isOpen={isOpen}
      onClose={close}
    >
      <Hide above="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            alignItems="center"
            borderBottomWidth="1px"
            display="flex"
            justifyContent="space-between"
          >
            <Box cursor="pointer">
              <Flex flexDir="column" h="fit-content" w="fit-content">
                <Logo />
              </Flex>
            </Box>
            <IconButton
              aria-label="Menu"
              colorScheme="gray"
              icon={<Icon as={Bars3Icon} h={4} w={4} />}
              mr={2}
              px={3}
              size="xs"
              variant="ghost"
              onClick={close}
            />
          </DrawerHeader>
          <DrawerBody p="0">
            <Flex flexDir="column" pt={5}>
              {menu.map((itemMenu) => (
                <Link key={itemMenu.title} href={itemMenu.path}>
                  <Button
                    borderRadius={0}
                    colorScheme="gray"
                    iconSpacing={0}
                    justifyContent={isOpen ? "flex-start" : "center"}
                    leftIcon={
                      isOpen ? <Icon as={itemMenu.icon} ml={4} /> : undefined
                    }
                    variant="ghost"
                    w="100%"
                  >
                    {isOpen ? (
                      <Text ml={4}>{itemMenu.title}</Text>
                    ) : (
                      <Icon as={itemMenu.icon} />
                    )}
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
