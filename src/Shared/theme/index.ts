import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  main: {
    50: "#F3F0FF",
    100: "#E9E3FF",
    200: "#B9A2FF",
    300: "#9374FF",
    400: "#7551FF",
    500: "#4318FF",
    600: "#3311DB",
    700: "#2200B7",
    800: "#190793",
    900: "#11047A",
  },
};

const theme = extendTheme({ colors });

export default theme;
