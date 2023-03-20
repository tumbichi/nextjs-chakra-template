import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const LogoSymbol = ({ h, w }: BoxProps) => {
  const imageSrc = useColorModeValue("/logo-reducido.png", "/logo-reducido.png");

  return (
    <Box position="relative" h={h} w={w}>
      <Image src={imageSrc} alt="logo" layout="fill" priority />
    </Box>
  );
};

export default LogoSymbol;
