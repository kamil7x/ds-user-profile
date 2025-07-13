import "./i18n/i18n.ts";

import { Navigate, Route, Routes } from "react-router";

import { Layout } from "./layout/Layout.tsx";
import { UserFormPage } from "./pages/user-form/UserFormPage.tsx";
import { UserProfilePage } from "./pages/user-profile/UserProfilePage.tsx";
import { routes } from "./routes.ts";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={routes.profile} />} />
        <Route path={routes.profile} element={<UserProfilePage />} />
        <Route path={routes.form} element={<UserFormPage />} />
      </Route>
    </Routes>
  );
}
