import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps extends FormControlProps {
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  label: string;
  name: string;
  type?: string;
  inputProps: UseFormRegisterReturn;
}

const FormInputText = ({
  errorMessage,
  inputProps,
  isDisabled,
  isRequired,
  label,
  name,
  type = "text",
  ...formControlProps
}: FormInputProps) => (
  <FormControl
    id={name}
    isDisabled={isDisabled}
    isInvalid={Boolean(errorMessage)}
    isRequired={isRequired}
    {...formControlProps}
  >
    <FormLabel>{label}</FormLabel>
    <Input type={type} {...inputProps} />
    {errorMessage ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null}
  </FormControl>
);

export default FormInputText;
