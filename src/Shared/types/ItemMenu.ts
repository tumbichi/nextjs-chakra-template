export default interface ItemMenu {
  title: string;
  path: string;
  icon?: (props: React.ComponentProps<"svg"> & { title?: string; titleId?: string }) => JSX.Element;
}
