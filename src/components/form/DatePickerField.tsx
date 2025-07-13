import { Controller, useFormContext } from "react-hook-form";

import {
  DatePicker,
  DatePickerInput,
  DatePickerInputProps,
  DatePickerProps,
} from "@carbon/react";

interface DatePickerFieldProps
  extends Omit<DatePickerProps, "children">,
    Pick<DatePickerInputProps, "id" | "labelText" | "placeholder"> {
  name: string;
}

export function DatePickerField({
  name,
  id,
  labelText,
  placeholder,
  ...props
}: DatePickerFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <DatePicker
          datePickerType="single"
          {...field}
          {...props}
          invalid={fieldState.invalid}
          invalidText={fieldState.error?.message || null}
        >
          <DatePickerInput
            id={id}
            labelText={labelText}
            placeholder={placeholder}
            invalid={fieldState.invalid}
            invalidText={fieldState.error?.message || null}
          />
        </DatePicker>
      )}
    />
  );
}
