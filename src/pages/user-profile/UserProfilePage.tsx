import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { Calendar, Email, Phone } from "@carbon/icons-react";
import { Button, Heading, Section, Stack } from "@carbon/react";
import { format } from "date-fns";

import { useUserProfile } from "../../hooks/useUserProfile.ts";
import { routes } from "../../routes.ts";

import styles from "./UserProfilePage.module.scss";

export function UserProfilePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: profileData } = useUserProfile();

  if (!profileData) {
    return (
      <Section>
        <Stack gap={8}>
          <Heading>{t("userProfile.welcome.heading")}</Heading>
          <p>{t("userProfile.welcome.description")}</p>
          <Button
            type="button"
            kind="primary"
            onClick={() => navigate(routes.form)}
          >
            {t("userProfile.welcome.updateProfile")}
          </Button>
        </Stack>
      </Section>
    );
  }

  return (
    <Section as="article">
      <Stack gap={8}>
        <header className={styles.header}>
          <div className={styles.avatarContainer}>
            {profileData.avatarUrl && (
              <img
                alt={t("userProfile.avatar.alt")}
                src={profileData.avatarUrl}
                className={styles.avatar}
              />
            )}
            {!profileData.avatarUrl && <div className={styles.placeholder} />}
          </div>
          <Heading>
            {profileData.firstName} {profileData.lastName}
          </Heading>
        </header>

        <section className={styles.container}>
          <Section className={styles.aboutSection}>
            <Stack gap={8}>
              <Heading>{t("userProfile.about.heading")}</Heading>
              <Section>{profileData.about}</Section>
            </Stack>
          </Section>

          <Section className={styles.informationSection}>
            <Stack gap={8}>
              <Heading>{t("userProfile.info.heading")}</Heading>
              <Stack gap={6}>
                <div className={styles.infoItem}>
                  <Calendar aria-label={t("userProfile.info.birthDate")} />
                  {format(profileData.birthDate, "MM/dd/yyyy")}
                </div>
                <div className={styles.infoItem}>
                  <Phone aria-label={t("userProfile.info.phoneNumber")} />
                  {profileData.phoneNumber}
                </div>
                <div className={styles.infoItem}>
                  <Email aria-label={t("userProfile.info.email")} />
                  {profileData.email}
                </div>
              </Stack>
            </Stack>
          </Section>
        </section>
      </Stack>
    </Section>
  );
}
