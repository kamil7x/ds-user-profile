import "./i18n/i18n.ts";

import { Navigate, Route, Routes } from "react-router";

import { Layout } from "./layout/Layout.tsx";
import { UserForm } from "./pages/user-form/UserForm.tsx";
import { UserProfile } from "./pages/user-profile/UserProfile.tsx";
import { routes } from "./routes.ts";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={routes.profile} />} />
        <Route path={routes.profile} element={<UserProfile />} />
        <Route path={routes.form} element={<UserForm />} />
      </Route>
    </Routes>
  );
}
