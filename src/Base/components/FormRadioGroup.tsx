import {
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";

export interface RadioItem {
  value: number | string;
  label: string;
}

interface FormRadioGroupProps {
  label: string;
  radioItems: RadioItem[];
  selected?: string;
  onChange?: (nextValue: string) => void;
}

function FormRadioGroup({
  label,
  selected,
  radioItems = [],
  onChange,
}: FormRadioGroupProps) {
  return (
    <FormControl as="fieldset">
      <FormLabel as="legend" htmlFor={undefined}>
        {label}
      </FormLabel>
      <RadioGroup colorScheme="main" value={selected} onChange={onChange}>
        <HStack spacing={6}>
          {radioItems.map((item) => (
            <Radio
              key={item.value}
              value={
                typeof item.value === "number" ? String(item.value) : item.value
              }
            >
              {item.label}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
      {/* <FormHelperText>Select only if you're a fan.</FormHelperText> */}
    </FormControl>
  );
}

export default FormRadioGroup;
