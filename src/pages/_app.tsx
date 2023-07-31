import type { AppProps } from "next/app";
import { Center, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";

import AppLayout from "Shared/layout/AppLayout";
import styleCache from "Shared/styles/styleCache";
import theme from "Shared/theme";
import { Loading } from "Shared/components";
import useRouteLoading from "Shared/hooks/useRouteLoading";

export default function App({ Component, pageProps }: AppProps) {
  const { loading: isRouteLoading } = useRouteLoading();

  return (
    <CacheProvider value={styleCache}>
      <ChakraProvider theme={theme}>
        <AppLayout>
          {isRouteLoading ? (
            <Center h="calc(100% - 70px)">
              <Loading />
            </Center>
          ) : (
            <Component {...pageProps} />
          )}
        </AppLayout>
      </ChakraProvider>
    </CacheProvider>
  );
}
