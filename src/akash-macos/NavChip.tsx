import styled from "@emotion/styled";
import {
  Close as CloseIcon,
  Remove as MinimizeIcon,
  OpenInFull as MaximizeIcon,
  CloseFullscreenOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { MacContext } from "./MacContext";
import { motion } from "framer-motion";

export function NavChip({ type, visible }: { type: string; visible: boolean }) {
  const color =
    type === "close"
      ? "#ff0400"
      : type === "minimize"
        ? "#ffc400"
        : type === "maximize"
          ? "#00ff04"
          : "#cccccc";

  const { macSystemState, dispatch } = useContext(MacContext);

  return (
    <motion.div
      animate={{
        opacity:
          macSystemState.isMacMenuHovered || !macSystemState.isFinderExpanded
            ? 1
            : 0,
      }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
    >
      <StyledNavChip color={color}>
        {type === "close" && visible && (
          <CloseIcon
            sx={IconStyle}
            onClick={() => {
              if (macSystemState.isFinderExpanded) {
                dispatch({ type: "TOGGLE_FINDER_EXPANDED" });
                setTimeout(() => {
                  dispatch({ type: "SET_FINDER_OPEN", booleanValue: false });
                }, 10);
              } else {
                dispatch({ type: "SET_FINDER_OPEN", booleanValue: false });
              }
            }}
          />
        )}
        {type === "minimize" && visible && <MinimizeIcon sx={IconStyle} />}
        {type === "maximize" && visible && macSystemState.isFinderExpanded && (
          <CloseFullscreenOutlined
            sx={IconStyle}
            onClick={() => {
              dispatch({ type: "TOGGLE_FINDER_EXPANDED" });
            }}
          />
        )}
        {type === "maximize" && visible && !macSystemState.isFinderExpanded && (
          <MaximizeIcon
            sx={IconStyle}
            onClick={() => {
              dispatch({ type: "TOGGLE_FINDER_EXPANDED" });
            }}
          />
        )}
      </StyledNavChip>
    </motion.div>
  );
}

const StyledNavChip = styled("div")<{ color: string }>(({ color }) => ({
  width: "0.825rem",
  height: "0.825rem",
  borderRadius: "50%",
  backgroundColor: color,
  marginTop: "0.375rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const IconStyle = {
  color: "black !important",
  fontSize: "0.75rem",
};
