import { useCallback } from "react";
import type { AppProps } from "next/app";
import { Center, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";

import { AuthProvider, PrivateRouteWrapper } from "@kushitech/auth-module";

import AppLayout from "Base/layout/AppLayout";
import styleCache from "Base/styles/styleCache";
import theme from "Base/theme";
import { Loading } from "Base/components";
import useRouteLoading from "Base/utils/hooks/useRouteLoading";

const isClientSide = typeof window !== "undefined";

export default function App({ Component, pageProps, router }: AppProps) {
  const { loading: isRouteLoading } = useRouteLoading();

  const handleRedirectToLogin = useCallback(() => {
    if (isClientSide) {
      router.replace("/auth/login");
    }
  }, [router]);

  return (
    <AuthProvider>
      <CacheProvider value={styleCache}>
        <ChakraProvider theme={theme}>
          {router.pathname.startsWith("/auth") ? (
            <Component {...pageProps} />
          ) : (
            <PrivateRouteWrapper
              loadingElement={() => <Loading h="100vh" />}
              redirectLogin={handleRedirectToLogin}
            >
              <AppLayout>
                {isRouteLoading ? (
                  <Center h="calc(100% - 70px)">
                    <Loading />
                  </Center>
                ) : (
                  <Component {...pageProps} />
                )}
              </AppLayout>
            </PrivateRouteWrapper>
          )}
        </ChakraProvider>
      </CacheProvider>
    </AuthProvider>
  );
}
