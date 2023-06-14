import { useTranslation as useI18NTranslation } from "react-i18next";
import { AppTranslations } from ".";

const useTranslation = (
  ns?: keyof AppTranslations | (keyof AppTranslations)[]
) => useI18NTranslation<keyof AppTranslations | (keyof AppTranslations)[]>(ns);

export default useTranslation;
