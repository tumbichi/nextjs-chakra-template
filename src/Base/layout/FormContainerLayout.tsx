import { PropsWithChildren } from "react";
import { Heading, Stack } from "@chakra-ui/react";

const FormContainerLayout = ({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) => (
  <Stack spacing={12}>
    {title && <Heading>{title}</Heading>}
    {children}
  </Stack>
);

export default FormContainerLayout;
