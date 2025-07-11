import { useTranslation } from "react-i18next";

import reactLogo from "../../../assets/react.svg";

import styles from "./logo.module.scss";

export function Logo() {
  const { t } = useTranslation();

  return (
    <img src={reactLogo} className={styles.logo} alt={t("logo.altName")} />
  );
}
