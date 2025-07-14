import { ConfigContextType } from "./context/config/ConfigContext.ts";

export const config: ConfigContextType = {
  cookiePromptEnabled: import.meta.env.VITE_COOKIE_PROMPT_ENABLED === "true",
};
