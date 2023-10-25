import { useCallback } from "react";
import { useRouter } from "next/router";
import Login from "Auth/features/Login";

const LoginPage = () => {
  const router = useRouter();

  const navigateToHome = useCallback(() => {
    router.replace("/");
  }, [router]);

  /*   const navigateToSignUp = useCallback(() => {
    router.push("/auth/sign-up");
  }, [router]); */

  return (
    <Login
      navigateToHome={navigateToHome}
      // navigateToSignUp={navigateToSignUp}
    />
  );
};

export default LoginPage;
