import { Box, Center, CenterProps, keyframes } from "@chakra-ui/react";
import Logo from "./Logo";

const loop = keyframes`
  0%,100% { transform: translateX(-28px); }
  50% { transform: translateX(78px); }
`;

const Loading = (props: CenterProps): JSX.Element => (
  <Center flexDir="column" gap="centi" {...props}>
    <Logo width={220} />

    <Box
      _after={{
        content: "''",
        width: "50px",
        height: "20px",
        position: "absolute",
        backgroundColor: "main.400",
        transform: "translateX(-20px)",
        animation: `${loop} 2s ease infinite`,
      }}
      bg="#d6cec2"
      borderRadius="10px"
      height="2px"
      mt={3}
      overflow="hidden"
      position="relative"
      w="100px"
    />
  </Center>
);

export default Loading;
