import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useTranslation("appLayout");

  return (
    <Box py={10}>
      <Flex
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mx: 8,
        }}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mx: 8,
        }}
        align={"center"}
      >
        <Logo />
      </Flex>
      <Text fontSize={"sm"} pt={6} textAlign={"center"}>
        © {new Date().getFullYear()} Kushi Tech. {t("footer.rightsReserved")}
      </Text>
    </Box>
  );
};

export default Footer;
