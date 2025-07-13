import * as yup from "yup";

export const userFormSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

export type UserFormSchemaType = yup.InferType<typeof userFormSchema>;
