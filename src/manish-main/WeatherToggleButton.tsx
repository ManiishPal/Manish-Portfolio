import React, { useState } from "react";
import {
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import {
  AcUnit,
  WbSunny,
  CalendarMonth,
  Check,
  ArrowDropDown,
} from "@mui/icons-material";
import { useWeather, type WeatherMode } from "../manish-commons/WeatherContext";

type WeatherToggleButtonProps = {
  variant?: "icon" | "pill";
};

export function WeatherToggleButton({
  variant = "icon",
}: WeatherToggleButtonProps) {
  const { weatherMode, setWeatherMode, toggleWeather, isWinter } = useWeather();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleToggleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    toggleWeather();
  };

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSelectMode = (mode: WeatherMode, e: React.MouseEvent) => {
    e.stopPropagation();
    setWeatherMode(mode);
    setAnchorEl(null);
  };

  const tooltipTitle = isWinter
    ? "Seasonal mode active · Click to switch to Default"
    : "Default mode active · Click to switch to Seasonal";

  return (
    <>
      {variant === "pill" ? (
        <Box
          component="div"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "2rem",
            minHeight: "42px",
            border: isWinter
              ? "1px solid rgba(187, 222, 251, 0.45)"
              : "1px solid rgba(255, 224, 178, 0.45)",
            background: isWinter
              ? "linear-gradient(135deg, #1e88e5 0%, #1565c0 50%, #0d47a1 100%)"
              : "linear-gradient(135deg, #ff9800 0%, #f57c00 50%, #e65100 100%)",
            boxShadow: isWinter
              ? "0 4px 14px rgba(21, 101, 192, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
              : "0 4px 14px rgba(230, 81, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
            color: "#fff",
            fontFamily: "Trebuchet",
            userSelect: "none",
            transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: isWinter
                ? "0 6px 18px rgba(21, 101, 192, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.35)"
                : "0 6px 18px rgba(230, 81, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.35)",
              filter: "brightness(1.08)",
            },
            "&:active": {
              transform: "translateY(1px) scale(0.96)",
              boxShadow: isWinter
                ? "0 2px 8px rgba(21, 101, 192, 0.4)"
                : "0 2px 8px rgba(230, 81, 0, 0.4)",
            },
          }}
        >
          <Tooltip title={tooltipTitle} arrow placement="top">
            <Box
              component="button"
              type="button"
              onClick={handleToggleClick}
              sx={{
                border: "none",
                background: "transparent",
                color: "inherit",
                cursor: "pointer",
                padding: "0.35rem 0.5rem 0.35rem 0.95rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "Trebuchet",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.02em",
                outline: "none",
              }}
            >
              {isWinter ? (
                <AcUnit sx={{ fontSize: "1.15rem" }} />
              ) : (
                <WbSunny sx={{ fontSize: "1.15rem" }} />
              )}
              <span>{isWinter ? "Seasonal" : "Default"}</span>
            </Box>
          </Tooltip>

          <Box
            sx={{
              height: "22px",
              width: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.25)",
            }}
          />

          <Tooltip
            title="Options (Default, Seasonal, Auto)"
            arrow
            placement="top"
          >
            <IconButton
              size="small"
              onClick={handleMenuOpen}
              aria-label="Weather options menu"
              sx={{
                padding: "4px 8px 4px 4px",
                color: "#fff",
                opacity: 0.9,
                "&:hover": { opacity: 1, backgroundColor: "transparent" },
              }}
            >
              <ArrowDropDown sx={{ fontSize: "1.2rem" }} />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.25}
          onClick={(e) => e.stopPropagation()}
          sx={{
            padding: "2px 4px",
            borderRadius: "0.75rem",
            border: "1px solid",
            borderColor: isWinter
              ? "rgba(144, 202, 249, 0.5)"
              : "rgba(255, 183, 77, 0.5)",
            backgroundColor: isWinter
              ? "rgba(144, 202, 249, 0.12)"
              : "rgba(255, 183, 77, 0.12)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: isWinter
                ? "rgba(144, 202, 249, 0.22)"
                : "rgba(255, 183, 77, 0.22)",
            },
          }}
        >
          <Tooltip title={tooltipTitle} arrow placement="top">
            <IconButton
              size="small"
              onClick={handleToggleClick}
              aria-label="Toggle weather mode"
              sx={{
                padding: "3px",
                color: isWinter ? "#90caf9" : "#ffb74d",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.15)" },
              }}
            >
              {isWinter ? (
                <AcUnit fontSize="small" sx={{ fontSize: "1.15rem" }} />
              ) : (
                <WbSunny fontSize="small" sx={{ fontSize: "1.15rem" }} />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="Weather options" arrow placement="top">
            <IconButton
              size="small"
              onClick={handleMenuOpen}
              aria-label="Weather options menu"
              sx={{
                padding: "1px",
                color: isWinter ? "#90caf9" : "#ffb74d",
                opacity: 0.85,
                "&:hover": { opacity: 1 },
              }}
            >
              <ArrowDropDown fontSize="small" sx={{ fontSize: "1.1rem" }} />
            </IconButton>
          </Tooltip>
        </Stack>
      )}

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "0.85rem",
              bgcolor: "var(--mui-palette-background-paper)",
              color: "var(--mui-palette-text-primary)",
              border: "1px solid var(--mui-palette-divider)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
              minWidth: "240px",
            },
          },
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuItem
          selected={weatherMode === "default"}
          onClick={(e) => handleSelectMode("default", e)}
          sx={{ gap: 1 }}
        >
          <ListItemIcon sx={{ color: "#ffb74d", minWidth: 28 }}>
            <WbSunny fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Default Dashboard"
            secondary="Leave seasonal previous things"
            secondaryTypographyProps={{
              sx: {
                color: "var(--mui-palette-text-light)",
                fontSize: "0.75rem",
              },
            }}
          />
          {weatherMode === "default" && <Check fontSize="small" />}
        </MenuItem>

        <MenuItem
          selected={weatherMode === "winter"}
          onClick={(e) => handleSelectMode("winter", e)}
          sx={{ gap: 1 }}
        >
          <ListItemIcon sx={{ color: "#90caf9", minWidth: 28 }}>
            <AcUnit fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Seasonal (Winter)"
            secondary="Change as it is (snow & hat)"
            secondaryTypographyProps={{
              sx: {
                color: "var(--mui-palette-text-light)",
                fontSize: "0.75rem",
              },
            }}
          />
          {weatherMode === "winter" && <Check fontSize="small" />}
        </MenuItem>

        <MenuItem
          selected={weatherMode === "auto"}
          onClick={(e) => handleSelectMode("auto", e)}
          sx={{ gap: 1 }}
        >
          <ListItemIcon
            sx={{ color: "var(--mui-palette-text-primary)", minWidth: 28 }}
          >
            <CalendarMonth fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Auto (Calendar)"
            secondary="Winter in Nov–Feb, default otherwise"
            secondaryTypographyProps={{
              sx: {
                color: "var(--mui-palette-text-light)",
                fontSize: "0.75rem",
              },
            }}
          />
          {weatherMode === "auto" && <Check fontSize="small" />}
        </MenuItem>
      </Menu>
    </>
  );
}
