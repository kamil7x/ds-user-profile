import { Controller, useFormContext } from "react-hook-form";

import { TextInput, TextInputProps } from "@carbon/react";

interface TextInputFieldProps extends TextInputProps {
  name: string;
}

export function TextInputField({ name, ...props }: TextInputFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextInput
          {...props}
          {...field}
          invalid={fieldState.invalid}
          invalidText={fieldState.error?.message || null}
        />
      )}
    />
  );
}
