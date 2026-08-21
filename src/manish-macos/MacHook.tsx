import type { Reducer } from "react";

type selectedProps = {
  heading: string;
  description: string;
  imgCode?: number;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryAction?: () => void;
  secondaryAction?: () => void;
};

export type MacSystemState = {
  selectedDockItems: (number | undefined)[];
  isFinderOpen: boolean | undefined;
  finderPath: string | undefined;
  isFinderExpanded: boolean | undefined;
  isMacAlertOpen: boolean | undefined;
  dialogProps: selectedProps | undefined;
  isMacMenuHovered?: boolean;
};

export type MacActions = {
  type: string;
  index?: number;
  booleanValue?: boolean;
  path?: string;
  dialogProps?: selectedProps;
};

export const reducerMacSystem: Reducer<MacSystemState, MacActions> = (
  state,
  action,
) => {
  switch (action.type) {
    case "SET_SELECTED":
      return {
        ...state,
        selectedDockItems: [...state.selectedDockItems, action.index],
      };
    case "CLEAR_SELECTED":
      return {
        ...state,
        selectedDockItems: [0],
      };
    case "SET_FIND_PATH":
      return {
        ...state,
        finderPath: action.path,
      };
    case "SET_FINDER_OPEN":
      return {
        ...state,
        isFinderOpen: action.booleanValue,
      };
    case "TOGGLE_FINDER_EXPANDED":
      return {
        ...state,
        isFinderExpanded: !state.isFinderExpanded,
      };
    case "SET_MAC_ALERT_OPEN":
      return {
        ...state,
        isMacAlertOpen: action.booleanValue,
      };
    case "SET_DIALOG_PROPS":
      return {
        ...state,
        dialogProps: action.dialogProps,
      };
    case "SET_MAC_MENU_HOVERED":
      return {
        ...state,
        isMacMenuHovered: action.booleanValue,
      };
    case "SET_TIMER":
      return {
        ...state,
        dialogProps: {
          ...state.dialogProps,
          heading: action.dialogProps?.heading ?? "",
          description: action.dialogProps?.description ?? "",
        },
      };
    default:
      return state;
  }
};
