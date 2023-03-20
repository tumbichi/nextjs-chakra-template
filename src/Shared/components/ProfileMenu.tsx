import React, { ReactNode } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, Button, Center, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ContextMenuItem as IMenuItem } from "../types/MenuItem";

interface ProfileMenuProps {
  menu: IMenuItem[];
  profileImageUrl?: string;
  username?: string;
}

const ProfileMenu = ({ menu, profileImageUrl, username }: ProfileMenuProps): JSX.Element => (
  <Center gap={4} bg="neutral.200" height="100%" px={2}>
    <Avatar h={9} w={9} borderWidth="3px" borderColor="black" src={profileImageUrl} />
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="unstyled" display="flex">
        {username}
      </MenuButton>
      <MenuList>
        {menu.map((menuItem) => (
          <MenuItem key={String(menuItem)} onClick={menuItem.onClick}>
            {menuItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  </Center>
);

export default ProfileMenu;
