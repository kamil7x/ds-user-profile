import { useCallback } from "react";
import { Controller, UseFormReturn, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import {
  AspectRatio,
  Button,
  FileUploader,
  FileUploaderProps,
} from "@carbon/react";

import styles from "./AvatarSelector.module.scss";

interface AvatarSelectorFieldProps {
  name: string;
  onAvatarSelected: (avatar: File, setValue: UseFormReturn["setValue"]) => void;
}

export function AvatarSelectorField({
  name,
  onAvatarSelected,
}: AvatarSelectorFieldProps) {
  const { control, setValue } = useFormContext();
  const { t } = useTranslation();

  const onChange = useCallback<Required<FileUploaderProps>["onChange"]>(
    (event) => {
      const selectedFile = event.target.files[0];

      if (selectedFile) {
        onAvatarSelected(selectedFile, setValue);
      }
    },
    [onAvatarSelected, setValue],
  );

  const onClear = useCallback(() => {
    setValue(name, "");
  }, [setValue, name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.container}>
          <div className={styles.previewContainer}>
            {field.value && (
              <img
                alt={t("avatarSelector.previewAlt")}
                src={field.value}
                className={styles.preview}
              />
            )}
            {!field.value && (
              <AspectRatio ratio="1x1">
                <div className={styles.placeholder} />
              </AspectRatio>
            )}
          </div>
          <div className={styles.buttonsContainer}>
            <FileUploader
              name={field.name}
              accept={["image/jpeg", "image/png"]}
              filenameStatus="complete"
              buttonLabel={t("avatarSelector.buttonSelectLabel")}
              onChange={onChange}
              className={styles.uploader}
              size="sm"
            />
            {field.value && (
              <Button
                type="button"
                kind="danger--ghost"
                size="sm"
                onClick={onClear}
              >
                {t("avatarSelector.buttonClearLabel")}
              </Button>
            )}
          </div>
        </div>
      )}
    />
  );
}
