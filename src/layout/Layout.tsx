import { Outlet } from "react-router";

import { Content, Theme } from "@carbon/react";

import { AppHeader } from "./components/app-header/AppHeader.tsx";

export function Layout() {
  return (
    <>
      <Theme theme="g10">
        <AppHeader />
      </Theme>

      <Content>
        <Outlet />
      </Content>
    </>
  );
}
