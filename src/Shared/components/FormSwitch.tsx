import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { RefCallBack } from "react-hook-form";

interface FormSwitchProps {
  label: string;
  isChecked?: boolean;
  checked?: boolean;
  inputRef?: RefCallBack;
  isDisabled?: boolean;
  isRequired?: boolean;
  onBlur?: () => void;
  onChange?: (...event: []) => void;
}

const FormSwitch = ({
  isChecked,
  checked,
  inputRef,
  isDisabled,
  isRequired,
  label,
  onBlur,
  onChange,
}: FormSwitchProps) => (
  <FormControl
    alignItems="center"
    display="flex"
    isDisabled={isDisabled}
    isRequired={isRequired}
  >
    <FormLabel htmlFor="email-alerts" mb="0">
      {label}
    </FormLabel>
    <Switch
      ref={inputRef}
      checked={checked}
      colorScheme="main"
      isChecked={isChecked}
      onBlur={onBlur}
      onChange={onChange}
    />
  </FormControl>
);

export default FormSwitch;
