import { useAuthMethods, useAuthStatus } from "@kushitech/auth-module";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import loginSchema, { LoginSchema } from "Auth/schemas/LoginSchema";
import { useTranslation } from "Base/i18n";
import useEffectAuth from "Auth/hooks/useEffectAuth";
import ErrorMessageTop from "Auth/components/ErrorMessageTop";
import { useCallback, useState } from "react";
import { Logo } from "Base/components";

interface LoginProps {
  navigateToHome: () => void;
  navigateToSignUp?: () => void;
}

export default function Login({
  navigateToHome,
}: // navigateToSignUp,
LoginProps) {
  const { t } = useTranslation("auth");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const { login, validateToken } = useAuthMethods();
  const { authenticate, loading } = useAuthStatus();

  const [errorMessage, setErrorMessage] = useState("");
  const onErrorClose = useCallback(() => setErrorMessage(""), []);

  useEffectAuth({ authenticate }, { validateToken, navigateToHome });

  const handleLogin: SubmitHandler<LoginSchema> = (data) => {
    login(data.email, data.password)
      .then(navigateToHome)
      .catch((e: unknown) => {
        const msg =
          e && typeof e === "object" && "message" in e
            ? (e.message as string)
            : "Error inesperado, por favor intente nuevamente mas tarde";

        setErrorMessage(msg);
      });
  };

  const navigateToSignUp = useCallback(
    // eslint-disable-next-line no-console
    () => console.warn("Not implemented yet!"),
    []
  );

  return (
    <Stack direction={{ base: "column", md: "row" }} height="full" spacing={0}>
      <Box
        flex={{ base: "auto", md: 1 }}
        height={"100vh"}
        maxH={{ base: "800px", md: "initial" }}
        overflow-y="scroll"
        position="relative"
      >
        <Box bottom={0} left={0} position="absolute" right={0} top={0}>
          {errorMessage.length > 0 ? (
            <ErrorMessageTop message={errorMessage} onClose={onErrorClose} />
          ) : null}
        </Box>
        <Flex
          alignItems="center"
          flexDirection="column"
          h="full"
          justify="center"
          p={8}
        >
          <Stack
            as="form"
            h={{ base: "full", md: "initial" }}
            maxW={"md"}
            spacing={4}
            w={"full"}
            onSubmit={handleSubmit(handleLogin)}
          >
            <Box mb={6}>
              <Logo width={280} />
            </Box>
            <Stack flex={1} spacing={{ base: 0, md: 12 }}>
              <Stack
                flex={1}
                justifyContent="flex-end"
                spacing={{ base: 6, md: 6 }}
              >
                <Heading fontSize={"2xl"}>{t("signIn.title")}</Heading>
                <Stack spacing={{ base: 8, md: 6 }}>
                  <FormControl id="email" isInvalid={Boolean(errors.email)}>
                    <FormLabel>{t("common.label.email")}</FormLabel>
                    <Input type="email" {...register("email")} />
                    {errors.email ? (
                      <FormErrorMessage>
                        {t(`common.error.${errors.email.message}`)}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl
                    id="password"
                    isInvalid={Boolean(errors.password)}
                  >
                    <FormLabel>{t("common.label.password")}</FormLabel>
                    <Input type="password" {...register("password")} />
                    {errors.password ? (
                      <FormErrorMessage>
                        {t(`common.error.${errors.password.message}`)}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                </Stack>
              </Stack>
              <Stack flex={1} justifyContent="flex-end" spacing={6}>
                <Button
                  colorScheme={"main"}
                  isLoading={loading}
                  type="submit"
                  variant={"solid"}
                >
                  {t("signIn.button.submit")}
                </Button>
                <Button variant="outline" onClick={navigateToSignUp}>
                  {t("signIn.button.signUp")}
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
      </Box>
      <Box flex={1}>
        <Image
          alt={"Login Image"}
          display={{ base: "none", md: "block" }}
          h="100%"
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
          w="100%"
        />
      </Box>
    </Stack>
  );
}
