import { useContext } from "react";
import SidebarContext, {
  SidebarContext as ISidebarContext,
} from "../SidebarContext";

const useSidebar = (): ISidebarContext => {
  const context = useContext<ISidebarContext | undefined>(SidebarContext);

  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};

export default useSidebar;
