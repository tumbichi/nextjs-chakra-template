import Link from "next/link";
import { Flex, IconButton, Text, Center, Box, Button, Icon } from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSidebar } from "@/Shared/contexts/SidebarContext";

interface ItemMenu {
  title: string;
  path: string;
  icon?: (props: React.ComponentProps<"svg"> & { title?: string; titleId?: string }) => JSX.Element;
}

interface SidebarProps {
  menu: ItemMenu[];
}

const Sidebar = ({ menu }: SidebarProps) => {
  const { isOpen, close } = useSidebar();

  return (
    <Box
      bg="main.200"
      borderRight="hairline"
      borderColor="main.300"
      w={isOpen ? "250px" : "70px"}
      minW={isOpen ? "250px" : "70px"}
      transition="all"
      transitionDuration="0.3s"
    >
      <Flex w="100%">
        <Flex h="70px" w="100%" justifyContent="space-between" alignItems="center">
          {isOpen ? (
            <>
              <Link href="/">
                <Box cursor="pointer">
                  <Flex h="fit-content" w="fit-content" flexDir="column" my={4} ml={6}>
                    <Box>Logo</Box>
                  </Flex>
                </Box>
              </Link>
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
            <Link href="/">
              <Center w={"100%"} cursor="pointer">
                <Box>
                  <Box>S</Box>
                </Box>
              </Center>
            </Link>
          )}
        </Flex>
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
