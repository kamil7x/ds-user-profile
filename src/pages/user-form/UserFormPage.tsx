import { useCallback } from "react";
import { useNavigate } from "react-router";

import { Column, Grid } from "@carbon/react";

import { routes } from "../../routes.ts";
import { UserForm } from "./components/UserForm.tsx";

export function UserFormPage() {
  const navigate = useNavigate();

  const onSuccess = useCallback(() => {
    navigate(routes.profile);
  }, [navigate]);

  return (
    <Grid>
      <Column sm={4} md={{ start: 2, span: 6 }} lg={{ start: 4, span: 10 }}>
        <UserForm onSuccess={onSuccess} />
      </Column>
    </Grid>
  );
}
