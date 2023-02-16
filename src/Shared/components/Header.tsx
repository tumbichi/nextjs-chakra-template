import React from "react";
import { Center, Flex, Icon, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Bars3Icon, BellIcon, MoonIcon, Squares2X2Icon, SunIcon } from "@heroicons/react/24/outline";
import { SearchInput, ProfileMenu } from "@/Shared/components";
import { useSidebar } from "@/Shared/contexts/SidebarContext";
import { MenuItem } from "../types/MenuItem";

interface HeaderProps {
  menu: MenuItem[];
}

const Header = ({ menu }: HeaderProps): JSX.Element => {
  const { isOpen, open } = useSidebar();
  const { toggleColorMode } = useColorMode();
  const ColorModeIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <Flex h="70px" px={4} justifyContent="space-between" borderBottom="1px solid" borderColor="main.300">
      <Center py={3}>
        {!isOpen && (
          <IconButton
            aria-label="Menu"
            icon={<Icon as={Bars3Icon} h={4} w={4} />}
            variant="ghost"
            mr={2}
            px={3}
            size="xs"
            onClick={open}
          />
        )}
        <SearchInput />
      </Center>
      <Center gap={2}>
        <IconButton
          aria-label="dark mode"
          icon={<Icon as={ColorModeIcon} />}
          variant="ghost"
          onClick={toggleColorMode}
        />
        <IconButton aria-label="notifications" icon={<Icon as={BellIcon} />} variant="ghost" />
        <ProfileMenu menu={menu} username={"pity"} profileImageUrl="" />
      </Center>
    </Flex>
  );
};

export default Header;
