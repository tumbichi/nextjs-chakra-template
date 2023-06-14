import {
  Center,
  Flex,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Bars3Icon,
  BellIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import { useSidebar } from "Shared/contexts/SidebarContext";
import { useDrawer } from "Shared/contexts/DrawerContexts";

import { ProfileMenu } from "Shared/components";

import ContextMenuItem from "Shared/types/ContextMenuItem";

interface HeaderProps {
  menu: ContextMenuItem[];
}

const Header = ({ menu }: HeaderProps): JSX.Element => {
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
    >
      <Center py={3}>
        <IconButton
          aria-label="Menu"
          colorScheme="gray"
          display={{ base: "none", sm: !sidebar.isOpen ? "initial" : "none" }}
          icon={<Icon as={Bars3Icon} h={4} w={4} />}
          mr={2}
          px={3}
          size="xs"
          variant="ghost"
          onClick={sidebar.toggle}
        />
        <IconButton
          aria-label="Menu"
          colorScheme="gray"
          display={{ base: "initial", sm: "none" }}
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
          colorScheme="gray"
          icon={<Icon as={ColorModeIcon} />}
          variant="ghost"
          onClick={toggleColorMode}
        />
        <IconButton
          aria-label="notifications"
          colorScheme="gray"
          icon={<Icon as={BellIcon} />}
          variant="ghost"
        />
        <ProfileMenu menu={menu} profileImageUrl="" username={"pity"} />
      </Center>
    </Flex>
  );
};

export default Header;
