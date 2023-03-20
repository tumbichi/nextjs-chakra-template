import { useContext } from "react";
import DrawerContext, {
  DrawerContext as IDrawerContext,
} from "../DrawerContext";

const useDrawer = (): IDrawerContext => {
  const context = useContext<IDrawerContext | undefined>(DrawerContext);

  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }

  return context;
};

export default useDrawer;
