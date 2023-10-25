import { defineStyle, defineStyleConfig, theme } from "@chakra-ui/react";

const pagination = defineStyle(({ colorMode }) => ({
  px: 3,
  py: 2,
  color: colorMode === "light" ? "black" : "white",
  border: "1px solid",
  borderColor: "main.500",
  borderRadius: "none",
  borderLeft: "none",
  _selected: { bg: "main.500", color: "white" },
  _hover: {
    bg: colorMode === "light" ? "gray.100" : "whiteAlpha.200",
  },
}));

const buttonTheme = defineStyleConfig({
  variants: {
    pagination,
    solid: {
      colorScheme: "main",
      ...theme.components.Button.variants?.solid,
    },
  },
  defaultProps: { variant: "solid" },
});

export default buttonTheme;
