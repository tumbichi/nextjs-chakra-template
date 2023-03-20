import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";

import AppLayout from "@/Shared/layout/AppLayout";
import styleCache from "@/Shared/styles/styleCache";
import theme from "@/Shared/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={styleCache}>
      <ChakraProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ChakraProvider>
    </CacheProvider>
  );
}
