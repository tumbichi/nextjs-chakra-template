import Link from "next/link";
import { Flex, IconButton, Text, Center, Box, Button, Icon, BoxProps } from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSidebar } from "Shared/contexts/SidebarContext";

import Logo from "./Logo";
import LogoSymbol from "./LogoSymbol";
import ItemMenu from "../types/ItemMenu";

interface SidebarProps extends BoxProps {
  menu: ItemMenu[];
}

const Sidebar = ({ menu, ...boxProps }: SidebarProps) => {
  const { isOpen, close } = useSidebar();

  return (
    <Box
      bg="neutral.200"
      borderColor="neutral.300"
      borderRight="1px"
      minW={isOpen ? "250px" : "70px"}
      transition="all"
      transitionDuration="0.3s"
      w={isOpen ? "250px" : "70px"}
      {...boxProps}
    >
      <Flex w="100%">
        <Center alignItems="center" h="70px" justifyContent="space-between" w="100%">
          {isOpen ? (
            <>
              <Box px={6}>
                <Flex cursor="pointer" flexDir="column" h="fit-content" w="fit-content">
                  <Link href="/">
                    <Logo />
                  </Link>
                </Flex>
              </Box>
              <Box>
                <IconButton
                  aria-label="Menu"
                  icon={<Icon as={Bars3Icon} h={4} w={4} />}
                  mr={2}
                  size="xs"
                  variant="ghost"
                  onClick={close}
                />
              </Box>
            </>
          ) : (
            <Center cursor="pointer" w={"100%"}>
              <Link href="/">
                <LogoSymbol h="24px" w="24px" />
              </Link>
            </Center>
          )}
        </Center>
      </Flex>
      <Flex flexDir="column" pt={5}>
        {menu.map((itemMenu) => (
          <Link key={itemMenu.title} href={itemMenu.path}>
            <Button
              borderRadius={0}
              iconSpacing={0}
              justifyContent={isOpen ? "flex-start" : "center"}
              leftIcon={isOpen ? <Icon as={itemMenu.icon} ml={4} /> : undefined}
              variant="ghost"
              w="100%"
            >
              {isOpen ? <Text ml={4}>{itemMenu.title}</Text> : <Icon as={itemMenu.icon} />}
            </Button>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
