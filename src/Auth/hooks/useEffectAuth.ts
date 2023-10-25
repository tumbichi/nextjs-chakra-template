import { useEffect } from "react";
import { TokenHandler } from "@kushitech/auth-module";

interface UseEffectAuthParams {
  states: {
    authenticate: boolean;
  };
  methods: {
    validateToken: (token: string) => Promise<void>;
    navigateToHome: () => void;
  };
}

const useEffectAuth = (
  { authenticate }: UseEffectAuthParams["states"],
  { validateToken, navigateToHome }: UseEffectAuthParams["methods"]
) =>
  useEffect(() => {
    if (authenticate) {
      navigateToHome();
    } else {
      const token = TokenHandler.getTokenFromCookies();
      validateToken(token ?? "").then(navigateToHome);
    }
  }, [authenticate, navigateToHome, validateToken]);

export default useEffectAuth;
