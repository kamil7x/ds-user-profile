import * as yup from "yup";

/*
 NOTE: regex from https://www.sitepoint.com/community/t/phone-number-regular-expression-validation/2204
 To be refined, if needed
 */
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userFormSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(),
  })
  .required();

export type UserFormSchemaType = yup.InferType<typeof userFormSchema>;
