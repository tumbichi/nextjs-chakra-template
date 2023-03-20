import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const Logo = () => {
  const imageSrc = useColorModeValue("/logo.svg", "/logo.svg");

  return <Image src={imageSrc} alt="logo" height={20} width={160} priority />;
};

export default Logo;
