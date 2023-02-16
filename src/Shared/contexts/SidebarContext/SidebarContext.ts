import { createContext } from "react";

export interface SidebarContext {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContext | undefined>(undefined);

export default SidebarContext;
