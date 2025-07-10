import { Navigate, Route, Routes } from "react-router";
import { UserProfile } from "./pages/user-profile/UserProfile.tsx";
import { Layout } from "./layout/Layout.tsx";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={"/profile"} />} />
        <Route path="/profile" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}
