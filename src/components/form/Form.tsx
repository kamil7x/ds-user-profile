import { useEffect } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import { Form as CForm, FormProps as CFormProps } from "@carbon/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";

export interface FormProps<TSchema extends FieldValues>
  extends Omit<CFormProps, "onSubmit"> {
  schema: ObjectSchema<TSchema>;
  defaultValues?: DefaultValues<TSchema>;
  onSubmit: SubmitHandler<TSchema>;
}

export function Form<TSchema extends FieldValues>({
  schema,
  defaultValues,
  children,
  onSubmit,
  ...props
}: FormProps<TSchema>) {
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = form;

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  return (
    <FormProvider {...form}>
      {/* @ts-expect-error There is something wrong with RHF and yupResolver typings */}
      <CForm {...props} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </CForm>
    </FormProvider>
  );
}
