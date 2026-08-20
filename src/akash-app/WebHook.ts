import {
  type WebFilterType,
  type WebDataType,
  WebTypeFilters,
  webData,
} from "./webData";

type FilteredWebData = {
  selectedTypes: WebFilterType[];
  filteredData: WebDataType[];
  isAllSelected: boolean;
};

export function reducerFilter(
  state: FilteredWebData,
  action: {
    type: "ADD_TYPE" | "REMOVE_TYPE" | "RESET";
    payload: WebFilterType;
  },
): FilteredWebData {
  window.scrollTo(0, 0);
  switch (action.type) {
    case "ADD_TYPE": {
      const newSelected = [...state.selectedTypes, action.payload];

      const isAllSelected =
        newSelected.length === WebTypeFilters.length &&
        WebTypeFilters.every((t) => newSelected.includes(t));

      if (isAllSelected) {
        return {
          filteredData: webData,
          selectedTypes: WebTypeFilters,
          isAllSelected: true,
        };
      } else {
        const filteredData = webData.filter((item) =>
          newSelected.includes(item.type as WebFilterType),
        );
        return {
          filteredData: filteredData,
          selectedTypes: newSelected,
          isAllSelected: false,
        };
      }
    }
    case "REMOVE_TYPE": {
      const remaining = state.selectedTypes.filter(
        (type) => type !== action.payload,
      );

      const isStarted = remaining.length === WebTypeFilters.length - 1;

      if (isStarted) {
        const filteredData = webData.filter(
          (item) => item.type === action.payload,
        );
        return {
          selectedTypes: [action.payload],
          filteredData: filteredData,
          isAllSelected: false,
        };
      }

      const isEmpty = remaining.length === 0;

      if (isEmpty) {
        return {
          selectedTypes: WebTypeFilters,
          filteredData: webData,
          isAllSelected: true,
        };
      } else {
        const filteredData = webData.filter((item) =>
          remaining.includes(item.type as WebFilterType),
        );
        return {
          filteredData: filteredData,
          selectedTypes: remaining,
          isAllSelected: false,
        };
      }
    }
    case "RESET":
      return {
        selectedTypes: WebTypeFilters,
        filteredData: webData,
        isAllSelected: true,
      };
    default:
      return state;
  }
}
