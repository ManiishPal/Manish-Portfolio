import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import {
  Apple,
  SettingsEthernet,
  Search,
  SupervisorAccount,
  Laptop,
  SettingsOutlined as Settings,
  StoreOutlined as AppStore,
  ScheduleOutlined,
  DangerousOutlined,
  DarkModeOutlined,
  ArrowCircleLeftOutlined,
  LockOutline,
  AccountCircleOutlined,
  PowerSettingsNewOutlined,
  ChevronRightOutlined,
} from "@mui/icons-material";
import packageJson from "../../package.json";
import { useContext, useRef, useState } from "react";
import { MacContext } from "./MacContext";
import { motion } from "framer-motion";
import { StyledTooltip } from "./MacDock";

function getRandomSortedIntegers() {
  const min = 0;
  const max = 12;
  const count = 4;
  const randomIntegers: number[] = [];

  while (randomIntegers.length < count) {
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!randomIntegers.includes(randomInt)) {
      randomIntegers.push(randomInt);
    }
  }

  randomIntegers.sort((a, b) => a - b);
  return randomIntegers;
}

export function MacMenuBar() {
  let randomIntegers: number[] = [];
  const [time, setTime] = useState("00:00:00");
  const timer = useRef<number>(60);
  const { macSystemState, dispatch } = useContext(MacContext);

  setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    setTime(`${hours}:${minutes}:${seconds}`);
  }, 1000);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMainMenu = Boolean(anchorEl);
  const handleMainMenu = (anchorEl: HTMLElement) => {
    setAnchorEl2(null);
    setAnchorEl(anchorEl);
  };
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorEl2);
  const handleUserMenu = (anchorEl2: HTMLElement) => {
    setAnchorEl(null);
    setAnchorEl2(anchorEl2);
  };

  function handleShutdown(isRestart = false) {
    dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: false });
    dispatch({ type: "CLEAR_SELECTED" });
    dispatch({ type: "TOGGLE_FINDER_EXPANDED" });
    setTimeout(() => {
      dispatch({ type: "SET_FINDER_OPEN", booleanValue: false });
    }, 10);
    if (isRestart) {
      setTimeout(() => {
        document.body.textContent = "";
        document.body.style.backgroundColor = "black";

        const newDiv = document.createElement("div");
        newDiv.style.position = "fixed";
        newDiv.style.top = "0";
        newDiv.style.left = "0";
        newDiv.style.width = "100%";
        newDiv.style.height = "100%";
        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";

        const img = document.createElement("img");
        img.src = "img/apple.svg";
        img.style.width = "4rem";
        img.style.display = "none";
        img.style.opacity = "0";

        newDiv.appendChild(img);
        document.body.appendChild(newDiv);

        setTimeout(() => {
          img.style.display = "block";
          requestAnimationFrame(() => {
            img.style.transition = "opacity 200ms";
            img.style.opacity = "1";
          });

          const loadingholder = document.createElement("div");
          loadingholder.style.position = "fixed";
          loadingholder.style.display = "flex";
          loadingholder.style.bottom = "7rem";
          loadingholder.style.left = "50%";
          loadingholder.style.transform = "translateX(-50%)";
          loadingholder.style.width = "12rem";

          const loading1 = document.createElement("hr");
          loading1.style.position = "absolute";
          loading1.style.bottom = "0";
          loading1.style.left = "0";
          loading1.style.width = "12rem";
          loading1.style.border = "3px solid gray";
          loading1.style.borderRadius = "1rem";

          const loading2 = document.createElement("hr");
          loading2.style.position = "absolute";
          loading2.style.bottom = "0";
          loading2.style.left = "0";
          loading2.style.width = "1rem";
          loading2.style.border = "3px solid white";
          loading2.style.borderRadius = "1rem";

          loadingholder.appendChild(loading1);
          setTimeout(() => {
            document.body.appendChild(loadingholder);
            setTimeout(() => {
              loadingholder.appendChild(loading2);
              let widthValue = 1;
              randomIntegers = getRandomSortedIntegers();
              const interval = setInterval(() => {
                widthValue = widthValue + 0.01;

                if (
                  widthValue > randomIntegers[0] &&
                  widthValue < randomIntegers[1]
                ) {
                  widthValue = randomIntegers[1];
                } else if (
                  widthValue > randomIntegers[2] &&
                  widthValue < randomIntegers[3]
                ) {
                  widthValue = randomIntegers[3];
                }

                loading2.style.width = widthValue + "rem";

                if (widthValue > 12) {
                  clearInterval(interval);
                  window.location.reload();
                }
              }, 10);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
      setTimeout(() => {
        window.location.reload();
      }, 14000);
    } else {
      setTimeout(() => {
        document.getElementById("root")!.remove();
      }, 500);
    }
  }

  function handleClick(item?: string) {
    setAnchorEl2(null);
    setAnchorEl(null);
    if (item === "About") {
      dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: true });
      dispatch({
        type: "SET_DIALOG_PROPS",
        dialogProps: {
          heading: `About ${window.location.hostname}`,
          description:
            "Handcrafted by Manish using React, Material UI, and Firebase.",
          imgCode: 2,
          primaryButtonText: "OK",
          primaryAction: () => {
            dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: false });
            dispatch({ type: "CLEAR_SELECTED" });
          },
        },
      });
    } else if (item === "Check for Updates") {
      dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: true });
      dispatch({
        type: "SET_DIALOG_PROPS",
        dialogProps: {
          heading: "Already on the latest version",
          description: `Stable Build ${packageJson.version}`,
          imgCode: 2,
          primaryButtonText: "OK",
          primaryAction: () => {
            dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: false });
            dispatch({ type: "CLEAR_SELECTED" });
          },
          secondaryButtonText: "View Source Code",
          secondaryAction: () => {
            window.open(
              "https://github.com/ManiishPal/Manish-Portfolio",
              "_blank",
            );
          },
        },
      });
    } else if (item === "Restart") {
      timer.current = 60;
      const intervalId = setInterval(() => {
        timer.current = timer.current > 0 ? timer.current - 1 : 0;
        dispatch({
          type: "SET_TIMER",
          dialogProps: {
            heading: "Are you sure you want to restart your computer now?",
            description: `If you do nothing, the computer will restart automatically in ${timer.current} seconds.`,
          },
        });
        if (timer.current === 0) {
          handleShutdown(true);
          clearInterval(intervalId);
        }
      }, 1000);
      dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: true });
      dispatch({
        type: "SET_DIALOG_PROPS",
        dialogProps: {
          heading: "Are you sure you want to restart your computer now?",
          description:
            "If you do nothing, the computer will restart automatically in 60 seconds.",
          imgCode: 3,
          primaryButtonText: "Restart",
          primaryAction: () => {
            handleShutdown(true);
            clearInterval(intervalId);
          },
          secondaryButtonText: "Cancel",
          secondaryAction: () => {
            dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: false });
            dispatch({ type: "CLEAR_SELECTED" });
            clearInterval(intervalId);
          },
        },
      });
    } else if (item === "Shutdown") {
      timer.current = 60;
      const intervalId = setInterval(() => {
        timer.current = timer.current > 0 ? timer.current - 1 : 0;
        dispatch({
          type: "SET_TIMER",
          dialogProps: {
            heading: "Are you sure you want to shut down your computer now?",
            description: `If you do nothing, the computer will shut down automatically in ${timer.current} seconds.`,
          },
        });
        if (timer.current === 0) {
          handleShutdown();
          clearInterval(intervalId);
        }
      }, 1000);
      dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: true });
      dispatch({
        type: "SET_DIALOG_PROPS",
        dialogProps: {
          heading: "Are you sure you want to shut down your computer now?",
          description:
            "If you do nothing, the computer will shut down automatically in 60 seconds.",
          imgCode: 4,
          primaryButtonText: "Shut Down",
          primaryAction: () => {
            handleShutdown();
            clearInterval(intervalId);
          },
          secondaryButtonText: "Cancel",
          secondaryAction: () => {
            dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: false });
            dispatch({ type: "CLEAR_SELECTED" });
            clearInterval(intervalId);
          },
        },
      });
    } else if (item === "Quit") {
      dispatch({ type: "TOGGLE_FINDER_EXPANDED" });
      setTimeout(() => {
        dispatch({ type: "SET_FINDER_OPEN", booleanValue: false });
      }, 10);
      setTimeout(() => {
        document.getElementById("root")!.style.display = "none";
      }, 500);
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
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
  }

  function checkHover(index: number, newAnchor: HTMLElement) {
    if (index === 0 && anchorEl2) {
      setAnchorEl2(null);
      setAnchorEl(newAnchor);
    } else if (index === 1 && anchorEl) {
      setAnchorEl(null);
      setAnchorEl2(newAnchor);
    }
  }

  return (
    <motion.div
      animate={{
        opacity: macSystemState.isMacMenuHovered ? 1 : 0,
      }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
    >
      <StyledStack
        onMouseEnter={() => {
          dispatch({ type: "SET_MAC_MENU_HOVERED", booleanValue: true });
        }}
        onMouseLeave={() => {
          dispatch({ type: "SET_MAC_MENU_HOVERED", booleanValue: false });
        }}
      >
        <Apple
          sx={{
            ...iconStyle,
            paddingBottom: "0.1rem",
          }}
          onClick={(e) =>
            handleMainMenu(e.currentTarget as unknown as HTMLElement)
          }
          onMouseEnter={(e) =>
            checkHover(0, e.currentTarget as unknown as HTMLElement)
          }
        />
        <StyledMenu
          anchorEl={anchorEl}
          open={openMainMenu}
          onClose={() => setAnchorEl(null)}
          transitionDuration={0}
          MenuListProps={{
            disablePadding: true,
          }}
          style={{ transform: "translate3d(-0.4rem, 0, 0)" }}
        >
          <StyledMenuList dense sx={{ width: "15rem" }}>
            <StyledMenuItem onClick={() => handleClick("N/A")}>
              <StyledListItemIcon>
                <Laptop sx={{ fontSize: "1rem !important" }} />
              </StyledListItemIcon>
              About This Mac
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem onClick={() => handleClick("N/A")}>
              <StyledListItemIcon>
                <Settings sx={{ fontSize: "1rem !important" }} />
              </StyledListItemIcon>
              <StyledListItemText primary="System Settings..." />
              ⌥I
            </StyledMenuItem>
            <StyledMenuItem onClick={() => handleClick("N/A")}>
              <StyledListItemIcon>
                <AppStore sx={{ fontSize: "1rem !important" }} />
              </StyledListItemIcon>
              App Store
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem onClick={() => handleClick("N/A")}>
              <StyledListItemIcon>
                <ScheduleOutlined sx={{ fontSize: "1rem !important" }} />
              </StyledListItemIcon>
              <StyledListItemText primary="Recent Items" />
              <ChevronRightOutlined sx={{ fontSize: "1rem !important" }} />
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem onClick={() => handleClick("N/A")}>
              <StyledListItemIcon>
                <DangerousOutlined sx={{ fontSize: "1rem !important" }} />
              </StyledListItemIcon>
              <StyledListItemText primary="Force Quit..." />
              ⌥⌘⎋
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem onClick={() => handleClick("N/A")}>
              <StyledListItemIcon>
                <DarkModeOutlined sx={{ fontSize: "1rem !important" }} />
              </StyledListItemIcon>
              Sleep
            </StyledMenuItem>
            <StyledTooltip
              title="Try Power Options"
              placement="right"
              open={macSystemState.isMacMenuHovered}
            >
              <StyledMenuItem onClick={() => handleClick("Restart")}>
                <StyledListItemIcon>
                  <ArrowCircleLeftOutlined
                    sx={{ fontSize: "1rem !important" }}
                  />
                </StyledListItemIcon>
                Restart...
              </StyledMenuItem>
            </StyledTooltip>
            <StyledMenuItem onClick={() => handleClick("Shutdown")}>
              <StyledListItemIcon>
                <PowerSettingsNewOutlined
                  sx={{ fontSize: "1rem !important" }}
                />
              </StyledListItemIcon>
              Shut Down...
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem onClick={() => handleClick("N/A")}>
              <StyledListItemIcon>
                <LockOutline sx={{ fontSize: "1rem !important" }} />
              </StyledListItemIcon>
              <StyledListItemText primary="Lock Screen" />
              ⌃⌘Q
            </StyledMenuItem>
            <StyledMenuItem onClick={() => handleClick("N/A")}>
              <StyledListItemIcon>
                <AccountCircleOutlined sx={{ fontSize: "1rem !important" }} />
              </StyledListItemIcon>
              <StyledListItemText primary="Log Out Guest..." />
              ⇧⌘Q
            </StyledMenuItem>
          </StyledMenuList>
        </StyledMenu>
        <StyledTypography
          sx={{ fontFamily: "San Francisco Bold" }}
          onClick={(e) =>
            handleUserMenu(e.currentTarget as unknown as HTMLElement)
          }
          onMouseEnter={(e) =>
            checkHover(1, e.currentTarget as unknown as HTMLElement)
          }
        >
          {window.location.hostname}
        </StyledTypography>
        <StyledMenu
          anchorEl={anchorEl2}
          open={openUserMenu}
          onClose={() => setAnchorEl2(null)}
          transitionDuration={0}
          MenuListProps={{
            disablePadding: true,
          }}
        >
          <StyledMenuList dense sx={{ width: "fit-content" }}>
            <StyledMenuItem onClick={() => handleClick("About")}>
              {`About ${window.location.hostname}`}
            </StyledMenuItem>
            <StyledMenuItem onClick={() => handleClick("Check for Updates")}>
              Check for Updates
            </StyledMenuItem>
            <Divider />
            <StyledMenuItem onClick={() => handleClick("Quit")}>
              <StyledListItemText
                sx={{ marginRight: "0.5rem" }}
                primary={`Quit ${window.location.hostname}`}
              />
              ⌘Q
            </StyledMenuItem>
          </StyledMenuList>
        </StyledMenu>
        <StyledTypography onClick={() => handleClick("N/A")}>
          File
        </StyledTypography>
        <StyledTypography onClick={() => handleClick("N/A")}>
          Edit
        </StyledTypography>
        <StyledTypography onClick={() => handleClick("N/A")}>
          Window
        </StyledTypography>
        <StyledTypography onClick={() => handleClick("N/A")}>
          Help
        </StyledTypography>
        <Box sx={{ flexGrow: 1 }} />
        <StyledTooltip title="Privilege Management: OK">
          <SupervisorAccount
            sx={iconStyle}
            onClick={() => handleClick("N/A")}
          />
        </StyledTooltip>
        <StyledTooltip title={`Connected to: ${window.location.hostname}`}>
          <SettingsEthernet sx={iconStyle} onClick={() => handleClick("N/A")} />
        </StyledTooltip>
        <Search sx={iconStyle} onClick={() => handleClick("N/A")} />
        <StyledTypography
          sx={{ width: "4.2rem", textAlign: "right" }}
          onClick={() => {
            handleClick("N/A");
          }}
        >
          {time}
        </StyledTypography>
      </StyledStack>
    </motion.div>
  );
}

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: "1.75rem !important",
  color: "var(--mui-palette-text-secondary)",
});

const StyledMenu = styled(Menu)({
  "& .MuiPaper-root": {
    backgroundColor: "var(--mui-palette-background-macosfinder)",
    color: "var(--mui-palette-text-secondary)",
    borderRadius: "0.75rem",
    border: "1px solid var(--mui-palette-text-light)",
    boxShadow: "0 0 0 rgba(0,0,0,0.2)",
    marginTop: "0.275rem",
    padding: "0.2rem",
  },
});

const StyledMenuList = styled(MenuList)({
  padding: "0rem",
  "&:focus, &:focus-visible": {
    outline: "none",
    backgroundColor: "transparent",
  },
  alignItems: "center",
});

const StyledListItemText = styled(ListItemText)({
  "& .MuiListItemText-primary": {
    fontFamily: "San Francisco !important",
    fontSize: "0.8rem",
  },
});

const StyledMenuItem = styled(MenuItem)({
  fontSize: "0.8rem",
  padding: "0.1rem 0.4rem",
  minHeight: "unset",
  fontFamily: "San Francisco",
  height: "auto",
  borderRadius: "0.5rem",
  "&.MuiMenuItem-root": {
    minHeight: "unset",
  },
  "&:hover": {
    backgroundColor: "var(--mui-palette-secondary-light)",
    cursor: "pointer",
  },
});

const StyledTypography = styled(Typography)({
  fontSize: "0.9rem",
  fontFamily: "San Francisco",
  padding: "0.1rem 0.5rem",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "var(--mui-palette-text-dark)",
    cursor: "pointer",
  },
});

const iconStyle = {
  fontSize: "1.4rem",
  color: "var(--mui-palette-text-secondary)",
  position: "relative" as const,
  bottom: "0.05rem",
  borderRadius: "1rem",
  padding: "0 0.4rem",
  width: "2rem",
  "&:hover": {
    backgroundColor: "var(--mui-palette-text-dark)",
    cursor: "pointer",
  },
};

const StyledStack = styled(Stack)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  gap: "0.5rem",
  padding: "0 0.7rem",
  alignItems: "center",
  height: "1.9rem",
  flexDirection: "row",
  backgroundColor: "var(--mui-palette-background-normal)",
  color: "var(--mui-palette-text-secondary)",
  zIndex: 2500,
  overflow: "hidden",
});
