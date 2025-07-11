import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
} from "@carbon/react";

import { routes } from "../../../routes.ts";
import { Logo } from "../logo/Logo.tsx";

export function AppHeader() {
  const { t } = useTranslation();

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label={t("header.ariaLabel")}>
          <SkipToContent />

          <HeaderMenuButton
            aria-label={t("header.openMenu")}
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />

          <HeaderName prefix="" as={Link} to={routes.home}>
            <Logo />
            {t("header.appName")}
          </HeaderName>

          <HeaderNavigation>
            <HeaderMenuItem as={Link} to={routes.profile}>
              {t("header.navigation.profile")}
            </HeaderMenuItem>
            <HeaderMenuItem as={Link} to={routes.form}>
              {t("header.navigation.form")}
            </HeaderMenuItem>
          </HeaderNavigation>

          <SideNav
            aria-label={t("header.sideNavigation")}
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem as={Link} to={routes.profile}>
                  {t("header.navigation.profile")}
                </HeaderMenuItem>
                <HeaderMenuItem as={Link} to={routes.form}>
                  {t("header.navigation.form")}
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </Header>
      )}
    />
  );
}
