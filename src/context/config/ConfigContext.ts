import { createContext } from "react";

export interface ConfigContextType {
  cookiePromptEnabled: boolean;
}

export const configContextDefaultValues: ConfigContextType = {
  cookiePromptEnabled: false,
};

export const ConfigContext = createContext(configContextDefaultValues);
