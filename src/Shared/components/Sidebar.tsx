import Link from "next/link";
import { Flex, IconButton, Text, Center, Box, Button, Icon, BoxProps } from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSidebar } from "@/Shared/contexts/SidebarContext";

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
      borderRight="1px"
      borderColor="neutral.300"
      w={isOpen ? "250px" : "70px"}
      minW={isOpen ? "250px" : "70px"}
      transition="all"
      transitionDuration="0.3s"
      {...boxProps}
    >
      <Flex w="100%">
        <Center h="70px" w="100%" justifyContent="space-between" alignItems="center">
          {isOpen ? (
            <>
              <Box px={6}>
                <Flex h="fit-content" w="fit-content" flexDir="column" cursor="pointer">
                  <Link href="/">
                    <Logo />
                  </Link>
                </Flex>
              </Box>
              <Box>
                <IconButton
                  aria-label="Menu"
                  icon={<Icon as={Bars3Icon} h={4} w={4} />}
                  variant="ghost"
                  mr={2}
                  size="xs"
                  onClick={close}
                />
              </Box>
            </>
          ) : (
            <Center w={"100%"} cursor="pointer">
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
    </Box>
  );
};

export default Sidebar;
