import { styled, Stack, Divider, Typography, Box } from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  DeleteOutline,
  InfoOutline,
  SearchOutlined,
  WifiTetheringOutlined,
} from "@mui/icons-material";
import { MacContext } from "./MacContext";
import { useContext } from "react";

export function TopBar() {
  const { macSystemState, dispatch } = useContext(MacContext);
  useContext(MacContext);

  function handleClick() {
    dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: true });
    dispatch({
      type: "SET_DIALOG_PROPS",
      dialogProps: {
        heading: "You don't have permission",
        description:
          "At this rate, we would be replicating the entire macOS on my website and Apple will soon have a lawsuit against me lol.",
        imgCode: 1,
        primaryButtonText: "OK",
        primaryAction: () => {
          dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: false });
          dispatch({ type: "CLEAR_SELECTED" });
        },
      },
    });
  }

  return (
    <StyledStack
      onMouseEnter={() => {
        dispatch({ type: "SET_MAC_MENU_HOVERED", booleanValue: true });
      }}
      onMouseLeave={() => {
        dispatch({ type: "SET_MAC_MENU_HOVERED", booleanValue: false });
      }}
    >
      <IconHolder>
        <ChevronLeft sx={ChevronStyle} onClick={handleClick} />
        <Divider orientation="vertical" flexItem />
        <ChevronRight sx={ChevronStyle} onClick={handleClick} />
      </IconHolder>
      <StyledTypography variant="body1">
        {macSystemState.finderPath}
      </StyledTypography>
      <Box sx={{ flexGrow: 1, pointerEvents: "none" }} />
      <IconHolder>
        <DeleteOutline sx={IconStyle} onClick={handleClick} />
        <InfoOutline sx={IconStyle} onClick={handleClick} />
        <WifiTetheringOutlined sx={IconStyle} onClick={handleClick} />
      </IconHolder>
      <IconHolder>
        <SearchOutlined sx={IconStyle} onClick={handleClick} />
      </IconHolder>
    </StyledStack>
  );
}

const ChevronStyle = {
  color: "gray",
  fontSize: "1.75rem",
  borderRadius: "50%",
  padding: "0.1rem",
  "&:hover": {
    backgroundColor: "var(--mui-palette-text-dark)",
    cursor: "pointer",
  },
  pointerEvents: "auto",
};

const IconStyle = {
  color: "gray",
  fontSize: "1.75rem",
  borderRadius: "50%",
  padding: "0.3rem",
  "&:hover": {
    backgroundColor: "var(--mui-palette-text-dark)",
    cursor: "pointer",
  },
  pointerEvents: "auto",
};

const StyledTypography = styled(Typography)({
  color: "var(--mui-palette-text-secondary)",
  fontFamily: "San Francisco Bold",
  pointerEvents: "none",
});

const IconHolder = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  backgroundColor: "var(--mui-palette-background-macosfinder2)",
  borderRadius: "1rem",
  padding: "0.05rem 0.1rem",
  border: "1px solid var(--mui-palette-text-light)",
});

const StyledStack = styled(Stack)({
  zIndex: 2,
  pointerEvents: "none",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  height: "2rem",
  width: "100%",
  padding: "0 0.5rem",
});
