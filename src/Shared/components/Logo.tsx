import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  const imageSrc = useColorModeValue("/logo.svg", "/logo.svg");

  return <Image priority alt="logo" height={20} src={imageSrc} width={160} />;
};

export default Logo;
