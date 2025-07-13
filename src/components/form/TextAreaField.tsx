import { Controller, useFormContext } from "react-hook-form";

import { TextArea, TextAreaProps } from "@carbon/react";

interface TextAreaFieldProps extends TextAreaProps {
  name: string;
}

export function TextAreaField({ name, ...props }: TextAreaFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextArea
          {...props}
          {...field}
          invalid={fieldState.invalid}
          invalidText={fieldState.error?.message || null}
        />
      )}
    />
  );
}
