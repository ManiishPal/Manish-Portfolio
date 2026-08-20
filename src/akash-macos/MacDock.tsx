import { useReducer, useState, type CSSProperties } from "react";
import {
  Divider,
  Skeleton,
  Stack,
  styled,
  Tooltip,
  tooltipClasses,
  Typography,
  useMediaQuery,
  useColorScheme,
  type TooltipProps,
} from "@mui/material";
import { dockData, dockImages } from "./macDockData";
import { motion } from "framer-motion";
import MacDialog from "../akash-commons/MacDialog";
import "../styles/Image.css";
import { useGetImages } from "../akash-commons/Hooks";
import { MacFinder } from "./MacFinder";
import { MacContext } from "./MacContext";
import { reducerMacSystem } from "./MacHook";

function MacDock() {
  const isPhone = useMediaQuery("(min-width:1000px)");
  const { mode } = useColorScheme();
  const isLight = mode === "light";
  const isLoading = useGetImages(dockImages);
  const [macSystemState, dispatch] = useReducer(reducerMacSystem, {
    selectedDockItems: [0],
    isFinderOpen: false,
    finderPath: "Handcrafted by Manish",
    isFinderExpanded: false,
    isMacAlertOpen: false,
    dialogProps: {
      heading: "",
      description: "",
    },
    isMacMenuHovered: false,
  });

  const handleClick = (index: number) => {
    dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: true });
    dispatch({ type: "SET_SELECTED", index: index });
    dispatch({
      type: "SET_DIALOG_PROPS",
      dialogProps: {
        heading: `macOS cannot open this app`,
        description: `You are trying to open the ${dockData[index].title} dock item. Would you like to search the web instead?`,
        imgCode: 0,
        primaryButtonText: "OK",
        secondaryButtonText: "Search Safari",
        primaryAction: () => {
          dispatch({ type: "CLEAR_SELECTED" });
          dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: false });
        },
        secondaryAction: () => {
          window.open(
            `https://www.google.com/search?q=${dockData[index].title}`,
            "_blank",
          );
        },
      },
    });
  };

  const [tooltipOpen, setToolTipOpen] = useState(false);

  setTimeout(() => {
    if (!sessionStorage.getItem("seenFinderTooltip")) {
      setToolTipOpen(!macSystemState.isFinderOpen);
    }
  }, 2000);

  return (
    <>
      {isPhone && (
        <>
          {isLoading && (
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{
                margin: "4rem auto",
                borderRadius: "1rem",
                maxWidth: "60rem",
              }}
              width="80%"
              height="2.5rem"
            />
          )}
          <MacDialog
            heading={macSystemState.dialogProps?.heading ?? ""}
            description={macSystemState.dialogProps?.description ?? ""}
            primaryButtonText={
              macSystemState.dialogProps?.primaryButtonText ?? "OK"
            }
            secondaryButtonText={
              macSystemState.dialogProps?.secondaryButtonText ?? undefined
            }
            imgCode={macSystemState.dialogProps?.imgCode ?? 0}
            visible={macSystemState.isMacAlertOpen ?? false}
            onClose={macSystemState.dialogProps?.primaryAction ?? (() => {})}
            onCloseSecondary={
              macSystemState.dialogProps?.secondaryAction ?? (() => {})
            }
          />
          <MacContext.Provider value={{ macSystemState, dispatch }}>
            {macSystemState.isFinderOpen && <MacFinder />}
          </MacContext.Provider>
          <StyledStack sx={{ display: isLoading ? "none" : "flex" }}>
            {dockData.map((item, index) => {
              const isSelected =
                macSystemState.selectedDockItems.includes(index);
              if (item.title === "Trash") {
                return (
                  <Stack direction="row" key={index}>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ marginRight: "0.45rem", marginLeft: "0.2rem" }}
                    />
                    <StyledHolder>
                      <StyledTooltip title={item.title} arrow placement="top">
                        <img
                          style={{
                            ...imgOriginalStyle,
                            filter: isLight ? "none" : "brightness(0.5)",
                          }}
                          src={item.image}
                          onClick={() => {
                            dispatch({
                              type: "SET_FINDER_OPEN",
                              booleanValue: true,
                            });
                            dispatch({ type: "SET_FIND_PATH", path: "Trash" });
                          }}
                        />
                      </StyledTooltip>
                    </StyledHolder>
                  </Stack>
                );
              } else if (item.title === "Finder") {
                return (
                  <Stack direction="row" key={index}>
                    <StyledHolder>
                      <StyledTooltip
                        open={tooltipOpen && !isLoading}
                        title="Try out Finder"
                        arrow
                        placement="top"
                      >
                        <motion.img
                          id="macos-finder"
                          animate={{
                            scale: macSystemState.isFinderOpen
                              ? 1
                              : [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                          style={imgStyle}
                          src={
                            isLight
                              ? item.image
                              : dockImages[dockImages.length - 1]
                          }
                          onClick={() => {
                            sessionStorage.setItem("seenFinderTooltip", "true");
                            setToolTipOpen(false);
                            dispatch({
                              type: "SET_FINDER_OPEN",
                              booleanValue: true,
                            });
                            dispatch({
                              type: "SET_FIND_PATH",
                              path: "Handcrafted by Manish",
                            });
                          }}
                        />
                      </StyledTooltip>
                      <Typography color="text.secondary">.</Typography>
                    </StyledHolder>
                  </Stack>
                );
              } else {
                return (
                  <StyledHolder key={index} onClick={() => handleClick(index)}>
                    <StyledTooltip title={item.title} arrow placement="top">
                      <motion.img
                        key={isSelected ? "active" : "inactive"}
                        animate={{
                          y: isSelected && index !== 0 ? [0, -20, 0] : 0,
                        }}
                        transition={{
                          duration: 1,
                          ease: ["easeIn", "linear"],
                          repeat: Infinity,
                        }}
                        style={isSelected ? imgStyle : imgOriginalStyle}
                        width="100%"
                        src={item.image}
                      />
                    </StyledTooltip>
                    {isSelected && (
                      <Typography color="text.secondary">.</Typography>
                    )}
                  </StyledHolder>
                );
              }
            })}
          </StyledStack>
        </>
      )}
    </>
  );
}

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    borderRadius: "1rem",
    backgroundColor: "var(--mui-palette-background-macos)",
    color: "var(--mui-palette-text-secondary)",
    fontSize: "0.85rem",
    fontFamily:
      "San Francisco, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "var(--mui-palette-background-macos)",
  },
}));

const StyledStack = styled(Stack)({
  backgroundColor: "var(--mui-palette-background-macos)",
  gap: "0.5rem",
  justifyContent: "center",
  alignItems: "center",
  width: "fit-content",
  display: "flex",
  flexDirection: "row",
  margin: "4rem auto",
  flexWrap: "wrap",
  padding: "0.6rem 0.5rem",
  borderRadius: "1rem",
});

const StyledHolder = styled(Stack)({
  flexDirection: "column",
  gap: 0,
  width: "2rem",
  height: "2rem",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "transform 0.2s ease-in-out",
  },
});

const imgStyle: CSSProperties = {
  position: "relative",
  top: "0.7rem",
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const imgOriginalStyle: CSSProperties = {
  position: "relative",
  top: "-0.05rem",
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

export default MacDock;
