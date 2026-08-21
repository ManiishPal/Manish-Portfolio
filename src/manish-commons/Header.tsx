import { useEffect, useMemo, useState } from "react";

import "../styles/Image.css";

import {
  AppBar,
  Chip,
  Menu,
  MenuItem,
  Toolbar,
  useColorScheme,
  Box,
  styled,
  Drawer,
  Stack,
  Breadcrumbs,
  Skeleton,
  Tooltip,
  tooltipClasses,
  type TooltipProps,
  IconButton,
} from "@mui/material";

import {
  LightMode,
  DarkMode,
  Computer,
  VolunteerActivism,
  Description,
  Menu as MenuIcon,
  Explore,
  Mail,
  ArrowDropDown,
} from "@mui/icons-material";

import useMediaQuery from "@mui/material/useMediaQuery";

import { openResumeInNewTab } from "./Utils";
import DonateDialog from "./DonateDialog";
import { motion } from "framer-motion";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useGetImages } from "./Hooks";
import { headerImages } from "./headerData";

// eslint-disable-next-line react-refresh/only-export-components
export const headerContainer = document.createElement("div");

function Header() {
  // Theme Menu
  const { setMode } = useColorScheme();
  const [themeMode, setThemeMode] = useState<string>(() => {
    const stored = localStorage.getItem("mui-mode");
    return stored ? stored.charAt(0).toUpperCase() + stored.slice(1) : "Light";
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  function setLightMode() {
    setMode("light");
    setThemeMode("Light");
    handleClose();
  }

  function setDarkMode() {
    setMode("dark");
    setThemeMode("Dark");
    handleClose();
  }

  function setSystemMode() {
    setMode("system");
    setThemeMode("System");
    handleClose();
  }

  function toggleThemeMode() {
    if (themeMode === "Light") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  // Media Query
  const isPhone = useMediaQuery("(max-width:800px)");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [donateOpen, setDonateOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOpenDonate = () => setDonateOpen(true);
    window.addEventListener("open-donate-modal", handleOpenDonate);
    return () =>
      window.removeEventListener("open-donate-modal", handleOpenDonate);
  }, []);

  const location = useLocation();

  // Breadcrumbs
  const breadcrumbLabel = useMemo(() => {
    const path = location.pathname;
    if (path === "/") return "";
    if (path.startsWith("/certifications")) {
      return "Certificates";
    }
    if (path === "/3d") {
      return "3D";
    }
    if (
      ["/education", "/app", "/web", "/questplunge", "/legal"].includes(path)
    ) {
      if (path === "/questplunge") {
        return "Quest Plunge";
      }
      return path.charAt(1).toUpperCase() + path.slice(2);
    } else {
      return "Not Found";
    }
  }, [location.pathname]);

  // Get Images
  const isLoading = useGetImages(headerImages);

  const handleHomeClick = () => {
    navigate("/");
  };

  function scrolldownToSection(arg0: string) {
    if (arg0 === "education") {
      navigate("/education");
      return;
    } else if (!["", "#/"].includes(window.location.hash)) {
      navigate("/");
      setTimeout(() => {
        scrolldownToSection(arg0);
      }, 100);
      return;
    }
    const section = document.getElementById(arg0);
    if (!section) return;
    const yOffset = -90;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    handleClose2();
  }

  return (
    <Box className="Header">
      <StyledAppBar
        position="fixed"
        sx={{
          backgroundColor: !isPhone
            ? "rgba(0, 0, 0, 0.2) !important"
            : "color-mix(in srgb, var(--mui-palette-background-paper) 95%, transparent)",
        }}
      >
        <Toolbar variant="dense" disableGutters>
          <Stack direction="row" gap={1} alignItems="center">
            {isLoading ? (
              <Skeleton
                variant="rounded"
                sx={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "1rem",
                  marginLeft: "0.6rem",
                }}
              />
            ) : (
              <StyledImg onClick={handleHomeClick} src={headerImages[0]} />
            )}

            <StyledTooltip
              title="Navigate Back"
              placement="bottom"
              enterDelay={1500}
            >
              <StyledH2 onClick={handleHomeClick}>ManishPal</StyledH2>
            </StyledTooltip>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.05, 0.8, 0.35, 0.99],
              }}
            >
              <Breadcrumbs sx={{ marginTop: "0.45rem" }}>
                <StyledLink to="/">{breadcrumbLabel}</StyledLink>
              </Breadcrumbs>
            </motion.div>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          {!isPhone ? (
            <Stack
              direction="row"
              spacing={"0.5rem"}
              sx={{ marginRight: "0.6rem" }}
            >
              <div>
                <StyledChip
                  icon={<Explore sx={ChipIconWithTextStyle} />}
                  label="Explore"
                  id="explore-chip"
                  onClick={handleClick2}
                  onDelete={() => {
                    document.getElementById("explore-chip")?.click();
                  }}
                  deleteIcon={<ArrowDropDown sx={ChipIconWithTextStyle} />}
                />
                <Menu
                  slotProps={{
                    paper: {
                      sx: {
                        "--mui-palette-background-paper": "#7f4203",
                        bgcolor: "#5d2f01",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      borderRadius: "0.75rem",
                    },
                    marginTop: "0.6rem",
                  }}
                  MenuListProps={{
                    disablePadding: true,
                  }}
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                >
                  <MenuItem
                    sx={{ fontSize: "0.9rem" }}
                    onClick={() => {
                      scrolldownToSection("projects");
                    }}
                  >
                    Projects
                  </MenuItem>
                  <MenuItem
                    sx={{ fontSize: "0.9rem" }}
                    onClick={() => {
                      scrolldownToSection("experience & certifications");
                    }}
                  >
                    Experience & Certifications
                  </MenuItem>
                  <MenuItem
                    sx={{ fontSize: "0.9rem" }}
                    onClick={() => {
                      scrolldownToSection("education");
                    }}
                  >
                    Education
                  </MenuItem>
                  <MenuItem
                    sx={{ fontSize: "0.9rem" }}
                    onClick={() => {
                      if (!["", "#/"].includes(window.location.hash)) {
                        sessionStorage.setItem("homeScroll", "0");
                        navigate("/");
                        setTimeout(() => {
                          document.getElementById("macos-finder")?.click();
                          handleClose2();
                        }, 100);
                        return;
                      }
                      document.getElementById("macos-finder")?.click();
                      handleClose2();
                    }}
                  >
                    macOS
                  </MenuItem>
                </Menu>
              </div>
              <StyledChip
                icon={<Mail sx={ChipIconWithTextStyle} />}
                label="Contact"
                onClick={() => {
                  navigate("/contact");
                }}
              />
              <StyledChip
                icon={<Description sx={ChipIconWithTextStyle} />}
                label="Resume"
                onClick={openResumeInNewTab}
              />
              <StyledTooltip title="Donate" placement="bottom">
                <IconChip
                  icon={<VolunteerActivism sx={ChipIconStyle} />}
                  onClick={() => setDonateOpen(true)}
                />
              </StyledTooltip>
              <div>
                <StyledTooltip title="Theme" placement="bottom">
                  <IconChip
                    icon={
                      themeMode === "Light" ? (
                        <LightMode sx={ChipIconStyle} />
                      ) : themeMode === "Dark" ? (
                        <DarkMode sx={ChipIconStyle} />
                      ) : (
                        <Computer sx={ChipIconStyle} />
                      )
                    }
                    onClick={handleClick}
                  />
                </StyledTooltip>
                <Menu
                  slotProps={{
                    paper: {
                      sx: {
                        "--mui-palette-background-paper": "#7f4203",
                        bgcolor: "#5d2f01",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      borderRadius: "0.75rem",
                    },
                    marginTop: "0.6rem",
                    marginLeft: "0.25rem",
                  }}
                  MenuListProps={{
                    disablePadding: true,
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem sx={{ fontSize: "0.9rem" }} onClick={setLightMode}>
                    Light
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "0.9rem" }} onClick={setDarkMode}>
                    Dark
                  </MenuItem>
                  <MenuItem sx={{ fontSize: "0.9rem" }} onClick={setSystemMode}>
                    System
                  </MenuItem>
                </Menu>
              </div>
            </Stack>
          ) : (
            <>
              <IconButton size="large" onClick={() => setDrawerOpen(true)}>
                <MenuIcon sx={ChipIconStyle} />
              </IconButton>
              <Drawer
                sx={{ zIndex: 2001 }}
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                slotProps={{
                  paper: {
                    sx: {
                      "--mui-palette-background-paper": "#7f4203",
                      bgcolor: "#5d2f01",
                    },
                  },
                }}
              >
                <StyledBox onClick={() => setDrawerOpen(false)}>
                  <Stack
                    direction="column"
                    alignItems="flex-start"
                    spacing={"0rem"}
                    sx={{
                      marginTop: "2rem",
                    }}
                  >
                    <StyledChipDrawer
                      icon={
                        themeMode === "Dark" ? (
                          <LightMode sx={ChipIconStyle} />
                        ) : (
                          <DarkMode sx={ChipIconStyle} />
                        )
                      }
                      label={themeMode === "Dark" ? "Light" : "Dark"}
                      onClick={toggleThemeMode}
                    />
                    <StyledChipDrawer
                      icon={<VolunteerActivism sx={ChipIconStyle} />}
                      label="Donate"
                      onClick={() => {
                        setDrawerOpen(false);
                        setDonateOpen(true);
                      }}
                    />
                    <StyledChipDrawer
                      icon={<Description sx={ChipIconStyle} />}
                      label="Resume"
                      onClick={openResumeInNewTab}
                    />
                    <StyledChipDrawer
                      icon={<Mail sx={ChipIconStyle} />}
                      label="Contact"
                      onClick={() => {
                        navigate("/contact");
                      }}
                    />
                    <div
                      style={{ marginLeft: "0.5rem" }}
                      ref={(el) => {
                        if (el) el.appendChild(headerContainer);
                      }}
                    />
                  </Stack>
                </StyledBox>
              </Drawer>
            </>
          )}
        </Toolbar>
      </StyledAppBar>
      <DonateDialog open={donateOpen} onClose={() => setDonateOpen(false)} />
    </Box>
  );
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--mui-palette-background-main)",
    borderRadius: "1rem",
    fontSize: "0.85rem",
  },
}));

const StyledAppBar = styled(AppBar)`
  top: 0.75rem;
  width: calc(100dvw - 1rem);
  left: 0.5rem;
  border-radius: 1.5rem;
  z-index: 2000;
  -webkit-backdrop-filter: blur(1px) saturate(1.1) url("#glassfilter");
  backdrop-filter: blur(1px) saturate(1.1) url("#glassfilter");
`;

const StyledH2 = styled("h2")`
  margin: 0;
  font-size: 1.55rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
const StyledImg = styled("img")`
  width: 30px;
  height: 30px;
  margin-left: 0.6rem;
`;

const StyledChip = styled(Chip)({
  color: "white",
  fontSize: "1.2rem",
});

const IconChip = styled(Chip)({
  color: "white",
  fontSize: "1.2rem",
  width: "2rem",
  ".MuiChip-label": {
    display: "none",
  },
  ".MuiChip-icon": {
    margin: 0,
  },
});

const StyledChipDrawer = styled(Chip)({
  color: "white",
  fontSize: "1.2rem",
  backgroundColor: "transparent",
  width: "100%",
  height: "4rem",
  paddingLeft: "1rem",
  justifyContent: "flex-start",
  gap: "0.25rem",
  borderRadius: "0",
});

const StyledBox = styled(Box)({
  width: "12rem",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const ChipIconStyle = { color: "white !important", fontSize: "1.25rem" };

const ChipIconWithTextStyle = {
  color: "white !important",
  fontSize: "1.25rem",
};

export default Header;
