import {
  Center,
  Flex,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { useSidebar } from "Shared/contexts/SidebarContext";
import { useDrawer } from "Shared/contexts/DrawerContext";

import { ProfileMenu } from "Shared/components";

import ContextMenuItem from "Shared/types/ContextMenuItem";

interface HeaderProps {
  menu: ContextMenuItem[];
  username: string;
  hideMenuOnMobile?: boolean;
}

const Header = ({
  menu,
  username,
  hideMenuOnMobile,
}: HeaderProps): JSX.Element => {
  const sidebar = useSidebar();
  const drawer = useDrawer();
  const { toggleColorMode } = useColorMode();
  const ColorModeIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <Flex
      borderBottom="1px solid"
      borderColor="neutral.300"
      h="70px"
      justifyContent="space-between"
      px={4}
      transition="width 0.4s"
      w={{ lg: `calc(100vw - 16px - ${sidebar.isOpen ? "250px" : "70px"} )` }}
    >
      <Center py={3}>
        <IconButton
          aria-label="Menu"
          display={{ base: "none", md: !sidebar.isOpen ? "initial" : "none" }}
          icon={<Icon as={Bars3Icon} h={4} w={4} />}
          mr={2}
          px={3}
          size="xs"
          variant="ghost"
          onClick={sidebar.toggle}
        />
        <IconButton
          aria-label="Menu"
          display={{ base: hideMenuOnMobile ? "none" : "initial", md: "none" }}
          icon={<Icon as={Bars3Icon} h={4} w={4} />}
          mr={2}
          px={3}
          size="xs"
          variant="ghost"
          onClick={drawer.toggle}
        />
      </Center>
      <Center gap={2}>
        <IconButton
          aria-label="dark mode"
          icon={<Icon as={ColorModeIcon} />}
          variant="ghost"
          onClick={toggleColorMode}
        />
        <ProfileMenu menu={menu} username={username} />
      </Center>
    </Flex>
  );
};

export default Header;
