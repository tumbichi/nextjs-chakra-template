import {
  FormControl,
  FormLabel,
  CheckboxGroup,
  Checkbox,
  Box,
  BoxProps,
  Text,
} from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";

import formatWithThousand from "Base/utils/formatters/formatWithThousand";

export interface CheckboxItem {
  value: string;
  label: string;
}

interface FormCheckboxGroupProps<T extends CheckboxItem>
  extends Omit<BoxProps, "onChange"> {
  checkboxContainer?: FunctionComponent<PropsWithChildren<{ index: number }>>;
  checkboxItems: T[];
  label: string;
  value?: string[];
  onChange: (value: string[]) => void;
}

const FormCheckboxGroup = <T extends CheckboxItem>({
  checkboxContainer: CheckboxContainer = ({ children }) => <>{children}</>,
  checkboxItems,
  label,
  value,
  onChange,
  ...boxProps
}: FormCheckboxGroupProps<T>) => (
  <FormControl as="fieldset">
    <FormLabel as="legend" htmlFor={undefined}>
      {label}
    </FormLabel>
    <CheckboxGroup colorScheme="main" value={value} onChange={onChange}>
      <Box {...boxProps}>
        {checkboxItems.map((item, index) => (
          <CheckboxContainer key={item.value} index={index}>
            <Checkbox value={item.value}>
              {item.label}
              {"amount" in item && typeof item.amount === "number" ? (
                <Text>
                  <strong>$ {formatWithThousand(item.amount)}</strong>
                </Text>
              ) : null}
            </Checkbox>
          </CheckboxContainer>
        ))}
      </Box>
    </CheckboxGroup>
    {/* <FormHelperText>Select only if you're a fan.</FormHelperText> */}
  </FormControl>
);

export default FormCheckboxGroup;
