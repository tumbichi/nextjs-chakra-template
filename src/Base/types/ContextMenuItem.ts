import { ReactNode } from "react";

export default interface ContextMenuItem {
  label: ReactNode;
  onClick: () => void;
}
