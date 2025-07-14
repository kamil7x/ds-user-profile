import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

import { Content, Theme } from "@carbon/react";

import { CookiePrompt } from "../components/cookie-prompt/CookiePrompt.tsx";
import { useConfig } from "../hooks/useConfig.ts";
import { AppFooter } from "./components/app-footer/AppFooter.tsx";
import { AppHeader } from "./components/app-header/AppHeader.tsx";

export function Layout() {
  const { cookiePromptEnabled } = useConfig();
  const { t } = useTranslation();

  return (
    <>
      <Theme theme="g10">
        <AppHeader />
      </Theme>

      <Content>
        <Outlet />
      </Content>

      <AppFooter />

      {cookiePromptEnabled && (
        <CookiePrompt
          acceptButtonLabel={t("cookiePrompt.acceptButtonLabel")}
          closeButtonLabel={t("cookiePrompt.closeButtonLabel")}
        >
          {t("cookiePrompt.description")}
        </CookiePrompt>
      )}
    </>
  );
}
