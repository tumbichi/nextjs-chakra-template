import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const LogoSymbol = ({ h, w }: BoxProps) => {
  const imageSrc = useColorModeValue(
    "/logo-reducido.png",
    "/logo-reducido.png"
  );

  return (
    <Box h={h} position="relative" w={w}>
      <Image priority alt="logo" layout="fill" src={imageSrc} />
    </Box>
  );
};

export default LogoSymbol;
