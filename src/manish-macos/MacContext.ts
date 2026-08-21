import { createContext } from "react";
import type { MacSystemState, MacActions } from "./MacHook";

interface MacContextType {
  macSystemState: MacSystemState;
  dispatch: React.ActionDispatch<[action: MacActions]>;
}

export const MacContext = createContext<MacContextType>({
  macSystemState: {} as MacSystemState,
  dispatch: () => {},
});
