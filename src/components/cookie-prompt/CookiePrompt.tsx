import { PropsWithChildren } from "react";

import cookieImage from "./cookie-bite-solid.svg";
import { useCookiePrompt } from "./useCookiePropmpt.ts";
import { classNames } from "./utils.ts";

import styles from "./CookiePrompt.module.scss";

export interface CookiePromptProps extends PropsWithChildren {
  acceptButtonLabel?: string;
  closeButtonLabel?: string;
  imgAltLabel?: string;
  storageKey?: string;
  className?: string;
}

const defaultProps = {
  acceptButtonLabel: "Accept",
  closeButtonLabel: "Close",
  imgAltLabel: "Cookie image",
  storageKey: "cookiePrompt",
};

export function CookiePrompt({
  acceptButtonLabel = defaultProps.acceptButtonLabel,
  closeButtonLabel = defaultProps.closeButtonLabel,
  imgAltLabel = defaultProps.imgAltLabel,
  storageKey = defaultProps.storageKey,
  className,
  children,
}: CookiePromptProps) {
  const { isOpen, onClose, onAccept } = useCookiePrompt(storageKey);

  return (
    <section
      className={classNames(styles.container, isOpen && styles.open, className)}
    >
      <div className={styles.imageContainer}>
        <img src={cookieImage} alt={imgAltLabel} className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>{children}</div>
        <div className={styles.buttons}>
          <button
            className={classNames(styles.button, styles.close)}
            onClick={onClose}
          >
            {closeButtonLabel}
          </button>
          <button
            className={classNames(styles.button, styles.accept)}
            onClick={onAccept}
          >
            {acceptButtonLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
