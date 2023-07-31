import { PropsWithChildren } from "react";

import { useDisclosure } from "@chakra-ui/react";

import SidebarContext from "./SidebarContext";

const SidebarProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const {
    isOpen,
    onOpen: open,
    onClose: close,
    onToggle: toggle,
  } = useDisclosure({
    defaultIsOpen: false,
  });

  return (
    <SidebarContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
