import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Button, Heading, Stack } from "@carbon/react";

import { DatePickerField } from "../../../components/form/DatePickerField.tsx";
import { Form } from "../../../components/form/Form.tsx";
import { TextAreaField } from "../../../components/form/TextAreaField.tsx";
import { TextInputField } from "../../../components/form/TextInputField.tsx";
import { useSaveUserProfile } from "../../../hooks/useSaveUserProfile.ts";
import { useUserProfile } from "../../../hooks/useUserProfile.ts";
import { UserFormSchemaType, userFormSchema } from "./UserForm.schema.ts";

export interface UserFormProps {
  onSuccess: () => void;
}

export function UserForm({ onSuccess }: UserFormProps) {
  const { t } = useTranslation();

  const { data: userProfile } = useUserProfile();

  const { mutate } = useSaveUserProfile({
    onSuccess,
  });

  const onFormSubmit = useCallback(
    (data: UserFormSchemaType) => {
      console.log(data);
      mutate({ ...data, avatarUrl: "" });
    },
    [mutate],
  );

  return (
    <Form<UserFormSchemaType>
      schema={userFormSchema}
      defaultValues={userProfile}
      onSubmit={onFormSubmit}
    >
      <Stack gap={6}>
        <Heading>{t("userForm.heading")}</Heading>

        <TextInputField
          name="firstName"
          id="firstName"
          labelText={t("userForm.fields.firstName")}
        />
        <TextInputField
          name="lastName"
          id="lastName"
          labelText={t("userForm.fields.lastName")}
        />
        <TextInputField
          name="email"
          id="email"
          labelText={t("userForm.fields.email")}
        />
        <TextInputField
          name="phoneNumber"
          id="phoneNumber"
          labelText={t("userForm.fields.phoneNumber")}
        />

        <DatePickerField
          name="birthDate"
          id="birthDate"
          labelText={t("userForm.fields.birthDate")}
          maxDate={Date.now()}
        />

        <TextAreaField
          name="about"
          id="about"
          labelText={t("userForm.fields.about")}
        />

        <Button type="submit">{t("userForm.save")}</Button>
      </Stack>
    </Form>
  );
}
