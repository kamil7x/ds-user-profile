import { BrowserRouter } from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "../App";
import { i18next } from "../i18n/i18n.ts";
import { routes } from "../routes";
import { userProfileMock } from "./mocks/userProfile.mock.ts";

describe("User Profile Integration Test", () => {
  let queryClient: QueryClient;

  const renderApp = () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>,
    );
  };

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
        mutations: {
          retry: false,
        },
      },
    });
    window.history.pushState({}, "", routes.form);

    // Mock window.matchMedia
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(min-width: 768px)",
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  afterEach(() => {
    cleanup();
    queryClient.clear();
    sessionStorage.clear();
  });

  it("should successfully submit form with valid data and display on profile page", async () => {
    const user = userEvent.setup();
    renderApp();

    // Fill in all required fields
    await user.type(
      screen.getByRole("textbox", {
        name: i18next.t("userForm.fields.firstName"),
      }),
      userProfileMock.firstName,
    );
    await user.type(
      screen.getByRole("textbox", {
        name: i18next.t("userForm.fields.lastName"),
      }),
      userProfileMock.lastName,
    );
    await user.type(
      screen.getByRole("textbox", { name: i18next.t("userForm.fields.email") }),
      userProfileMock.email,
    );
    await user.type(
      screen.getByRole("textbox", {
        name: i18next.t("userForm.fields.phoneNumber"),
      }),
      userProfileMock.phoneNumber,
    );
    await user.type(
      screen.getByRole("textbox", {
        name: i18next.t("userForm.fields.about"),
      }),
      userProfileMock.about,
    );

    // Set date of birth
    const birthDateInput = screen.getByLabelText(
      i18next.t("userForm.fields.birthDate"),
    );
    await user.click(birthDateInput);
    await user.type(birthDateInput, userProfileMock.birthDate);

    // Submit the form
    const submitButton = screen.getByRole("button", {
      name: i18next.t("userForm.save"),
    });
    await user.click(submitButton);

    // Wait for navigation to the profile page
    await waitFor(
      () => {
        expect(window.location.pathname).toBe(routes.profile);
      },
      { timeout: 5000 },
    );

    // Verify that all data is displayed on the profile page
    await waitFor(
      () => {
        expect(
          screen.getByText(
            `${userProfileMock.firstName} ${userProfileMock.lastName}`,
          ),
        ).toBeInTheDocument();
        expect(screen.getByText(userProfileMock.email)).toBeInTheDocument();
        expect(
          screen.getByText(userProfileMock.phoneNumber),
        ).toBeInTheDocument();
        expect(screen.getByText(userProfileMock.about)).toBeInTheDocument();
        expect(screen.getByText(userProfileMock.birthDate)).toBeInTheDocument();
      },
      { timeout: 5000 },
    );
  });

  it("should show validation errors for invalid data", async () => {
    const user = userEvent.setup();
    renderApp();

    // Submit without filling any fields
    const submitButton = screen.getByRole("button", {
      name: i18next.t("userForm.save"),
    });
    await user.click(submitButton);

    // Check for validation error messages
    expect(
      await screen.findByText(/firstName is a required field/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/lastName is a required field/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/email is a required field/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/phoneNumber is a required field/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/birthDate is a required field/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/about is a required field/i),
    ).toBeInTheDocument();

    // Test invalid email format
    await user.type(
      screen.getByRole("textbox", { name: i18next.t("userForm.fields.email") }),
      "invalid-email",
    );
    await user.click(submitButton);
    expect(
      await screen.findByText(/email must be a valid email/i),
    ).toBeInTheDocument();

    // Test invalid phone format
    await user.type(
      screen.getByRole("textbox", {
        name: i18next.t("userForm.fields.phoneNumber"),
      }),
      "invalid-phone",
    );
    await user.click(submitButton);
    expect(
      await screen.findByText(/phone number is not valid/i),
    ).toBeInTheDocument();
  });
});
