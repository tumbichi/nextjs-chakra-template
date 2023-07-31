import { PropsWithChildren } from "react";

import { useDisclosure } from "@chakra-ui/react";

import DrawerContext from "./DrawerContext";

const DrawerProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const {
    isOpen,
    onOpen: open,
    onClose: close,
    onToggle: toggle,
  } = useDisclosure({ defaultIsOpen: false });

  return (
    <DrawerContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
