import { Heading, Stack, StackProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface FormSectionLayoutProps extends Omit<StackProps, "title"> {
  title?: string | null;
  titleSize?: "md" | "sm" | "lg" | "xl" | "2xl" | "4xl" | "3xl" | "xs";
}

const FormSectionLayout = ({
  children,
  title,
  titleSize = "md",
  ...stackProps
}: PropsWithChildren<FormSectionLayoutProps>) => (
  <Stack maxW={"container.md"} spacing={6} {...stackProps}>
    {title ? <Heading size={titleSize}>{title}</Heading> : null}
    {children}
  </Stack>
);

export default FormSectionLayout;
