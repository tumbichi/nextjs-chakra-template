import { createContext } from "react";

export interface DrawerContext {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const DrawerContext = createContext<DrawerContext | undefined>(undefined);

export default DrawerContext;
