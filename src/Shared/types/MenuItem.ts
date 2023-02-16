import { ReactNode } from "react";

export interface MenuItem {
  label: ReactNode;
  onClick: () => void;
}
