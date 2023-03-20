import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import colors from "./colors";

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      bg: mode("white", "black")(props),
      color: mode("black", "white")(props),
    },
    ":root": {
      "--chakra-colors-neutral-200": mode("#f7f9fc", "#373d43")(props),
      "--chakra-colors-neutral-300": mode("#e1e9ef", "#777a7c")(props),
      "--chakra-colors-neutral-800": mode("#777a7c", "#e1e9ef")(props),
      "--chakra-colors-neutral-900": mode("#373d43", "#f7f9fc")(props),
    },
  }),
};

const theme = extendTheme({ colors, styles });

export default theme;
