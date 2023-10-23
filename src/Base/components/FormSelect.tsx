import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

import {
  GroupBase,
  Props,
  Select,
  SelectInstance,
  chakraComponents,
  LoadingIndicatorProps,
} from "chakra-react-select";
import { forwardRef, Ref, useMemo } from "react";

interface OptionItem {
  label: string;
  value: string | number | object;
}

interface FormSelectProps<
  Option extends OptionItem = OptionItem,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
  label: string;
  errorMessage?: string;
}

type FormSelectRef<
  Option extends OptionItem = OptionItem,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = SelectInstance<Option, IsMulti, Group>;

const FormSelect = forwardRef<FormSelectRef, FormSelectProps>(
  <
    Option extends OptionItem,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  >(
    {
      colorScheme = "main",
      errorMessage,
      isDisabled,
      isLoading,
      isMulti,
      isRequired,
      label,
      menuPortalTarget,
      name,
      options,
      value,
      onChange,
    }: FormSelectProps<Option, IsMulti, Group>,
    ref: Ref<SelectInstance<Option, IsMulti, Group>> | undefined
  ) => {
    const LoadingIndicator = useMemo(
      () =>
        function LoadingIndicatorMemorized(
          props: LoadingIndicatorProps<Option, IsMulti, Group>
        ) {
          return (
            <chakraComponents.LoadingIndicator
              // The color of the main line which makes up the spinner
              // This could be accomplished using `chakraStyles` but it is also available as a custom prop
              color={`${colorScheme}.500`} // <-- This default's to your theme's text color (Light mode: gray.700 | Dark mode: whiteAlpha.900)
              // The color of the remaining space that makes up the spinner
              emptyColor="transparent"
              // A CSS <time> variable (s or ms) which determines the time it takes for the spinner to make one full rotation
              speed="0.45s"
              // The `size` prop on the Chakra spinner
              // Defaults to one size smaller than the Select's size
              spinnerSize="sm"
              // A CSS size string representing the thickness of the spinner's line
              thickness="2px"
              // Don't forget to forward the props!
              {...props}
            />
          );
        },
      [colorScheme]
    );

    return (
      <FormControl
        isDisabled={isDisabled}
        isInvalid={Boolean(errorMessage)}
        isRequired={isRequired}
      >
        <FormLabel>{label}</FormLabel>
        <Select<Option, IsMulti, Group>
          ref={ref}
          chakraStyles={{
            container: () => ({
              position: "relative",
              pointerEvents: "auto",
            }),
            menu: (base) => ({
              ...base,
              zIndex: 99,
            }),
          }}
          colorScheme={colorScheme}
          components={{
            LoadingIndicator,
          }}
          focusBorderColor={`${colorScheme}.500`}
          isLoading={isLoading}
          isMulti={isMulti}
          menuPortalTarget={menuPortalTarget}
          name={name}
          options={options}
          selectedOptionColorScheme={colorScheme}
          value={value}
          onChange={onChange}
        />
        <FormErrorMessage>
          {errorMessage ? (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          ) : null}
        </FormErrorMessage>
      </FormControl>
    );
  }
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
