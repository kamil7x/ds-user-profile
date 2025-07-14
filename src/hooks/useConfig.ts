import { useContext } from "react";

import {
  ConfigContext,
  ConfigContextType,
} from "../context/config/ConfigContext.ts";

export function useConfig(): ConfigContextType {
  return useContext(ConfigContext);
}
