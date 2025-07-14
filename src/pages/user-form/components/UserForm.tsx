import { useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Button, Column, Grid, Heading, Stack } from "@carbon/react";

import { AvatarSelectorField } from "../../../components/form/avatar-selector/AvatarSelectorField.tsx";
import { DatePickerField } from "../../../components/form/DatePickerField.tsx";
import { Form } from "../../../components/form/Form.tsx";
import { TextAreaField } from "../../../components/form/TextAreaField.tsx";
import { TextInputField } from "../../../components/form/TextInputField.tsx";
import { useSaveUserProfile } from "../../../hooks/useSaveUserProfile.ts";
import { useUserProfile } from "../../../hooks/useUserProfile.ts";
import { fileToBase64 } from "../../../utils/fileToBase64.ts";
import { UserFormSchemaType, userFormSchema } from "./UserForm.schema.ts";

import styles from "./UserForm.module.scss";

export interface UserFormProps {
  onSuccess: () => void;
}

export function UserForm({ onSuccess }: UserFormProps) {
  const { t } = useTranslation();

  const { data: userProfile } = useUserProfile();

  const { mutate } = useSaveUserProfile({
    onSuccess,
  });

  const onAvatarSelected = useCallback(
    async (avatar: File, setValue: UseFormReturn["setValue"]) => {
      if (avatar) {
        const avatarUrl = await fileToBase64(avatar);
        setValue("avatarUrl", avatarUrl);
      } else {
        setValue("avatarUrl", "");
      }
    },
    [],
  );

  const onFormSubmit = useCallback(
    (data: UserFormSchemaType) => {
      mutate(data);
    },
    [mutate],
  );

  return (
    <Form<UserFormSchemaType>
      schema={userFormSchema}
      defaultValues={userProfile}
      onSubmit={onFormSubmit}
      aria-label={t("userForm.ariaLabel")}
    >
      <Stack gap={6}>
        <Heading>{t("userForm.heading")}</Heading>

        <Grid>
          <Column span={4}>
            <AvatarSelectorField
              name="avatarUrl"
              onAvatarSelected={onAvatarSelected}
            />
          </Column>
          <Column sm={4} md={6}>
            <Stack gap={6} className={styles.nameContainer}>
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
            </Stack>
          </Column>
        </Grid>

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
