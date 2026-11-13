import {
  Stack,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  Skeleton,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { useContext, useState } from "react";
import { MacDialogContext, type genericAppData } from "./appData";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BlockIcon from "@mui/icons-material/Block";
import RefreshIcon from "@mui/icons-material/Refresh";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { OpenInNew } from "@mui/icons-material";
import { WeatherToggleButton } from "./WeatherToggleButton";

type MainCardProps = {
  data: genericAppData;
  isDuration?: boolean;
  isLoading?: boolean;
};

function MainCard({ data, isDuration, isLoading = false }: MainCardProps) {
  const subtitle = data.subtitle
    ? isDuration
      ? "Duration: " + data.subtitle
      : data.subtitle
    : undefined;
  const [hovered, setHovered] = useState<boolean>(false);
  const isPrivate = data.linkText === "Private";
  const isReset = data.linkText === "Reset";
  const { setOpenMacDialog } = useContext(MacDialogContext);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  function handleClick() {
    if (data.link && !isReset) {
      if (data.link.startsWith("http")) {
        window.open(data.link, "_blank");
      } else {
        navigate(`/${data.link}`);
      }
    } else if (isReset) {
      sessionStorage.clear();
      localStorage.clear();
      window.location.reload();
    } else {
      setOpenMacDialog(true);
    }
  }

  // Media Query
  const isPhone = useMediaQuery("(max-width:1000px)");

  return isPhone ? (
    <ListItemButton
      sx={{
        width: "calc(100% - 2rem)",
        maxWidth: "40rem",
        padding: "1rem",
        alignSelf: "center",
        marginBottom: "1rem",
        gap: "1rem",
        backgroundColor: "var(--mui-palette-background-paper)",
        ":hover": { backgroundColor: "var(--mui-palette-action-hover)" },
        borderRadius: "1rem",
      }}
      onClick={handleClick}
    >
      <ListItemAvatar>
        <Avatar
          src={data.image}
          variant="rounded"
          sx={{ transform: "scale(1.7)", margin: "0 1rem" }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            gap={1}
            alignItems="center"
          >
            {data.title}
            {isReset ? (
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                onClick={(e) => e.stopPropagation()}
              >
                <WeatherToggleButton />
                <Tooltip title="Reset site settings & cache">
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      sessionStorage.clear();
                      localStorage.clear();
                      window.location.reload();
                    }}
                    sx={{
                      color: "var(--mui-palette-text-primary)",
                      "&:hover": {
                        color: "var(--mui-palette-primary-main)",
                      },
                    }}
                  >
                    <RefreshIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Stack>
            ) : isPrivate ? (
              <BlockIcon />
            ) : (
              <OpenInNew />
            )}
          </Stack>
        }
        secondary={
          <Stack
            direction="column"
            gap={1}
            mt={1}
            component="div"
            sx={{ color: "var(--mui-palette-text-primary)" }}
          >
            {subtitle && <span>{subtitle}</span>}
            <span>{data.description}</span>
          </Stack>
        }
        secondaryTypographyProps={{ component: "div" }}
      />
    </ListItemButton>
  ) : (
    <StyledCard
      sx={{
        margin: "0.5rem",
      }}
    >
      <CardActionArea
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <motion.div
          style={{ y: 0 }}
          initial={{ scale: 1, y: 0 }}
          animate={{ scale: hovered ? 1.05 : 1, y: hovered ? -4 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {isLoading && (
            <Skeleton variant="rectangular" animation="wave" height={170} />
          )}
          <CardMedia
            component="img"
            style={{ display: isLoading ? "none" : "block" }}
            height="170"
            image={data.image}
          />
        </motion.div>
        <CardContent>
          <div style={{ position: "relative", marginBottom: "0.5rem" }}>
            <motion.div
              key="left"
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: hovered ? 0 : 1, x: hovered ? 25 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                width: "100%",
                textAlign: "left",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                gap={1}
              >
                <Typography variant="h6">{data.title}</Typography>
                {isReset ? (
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <WeatherToggleButton />
                    <Tooltip title="Reset site settings & cache">
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          sessionStorage.clear();
                          localStorage.clear();
                          window.location.reload();
                        }}
                        sx={{
                          color: "var(--mui-palette-text-primary)",
                          "&:hover": {
                            color: "var(--mui-palette-primary-main)",
                          },
                        }}
                      >
                        <RefreshIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                ) : (
                  <OpenInNew sx={{ mt: 0.5 }} />
                )}
              </Stack>
            </motion.div>

            <motion.div
              key="center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -25 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">{data.title}</Typography>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 5 }}
            animate={{ opacity: hovered ? 0 : 1, y: 5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {subtitle && (
              <Typography
                variant="subtitle1"
                color="text.primary"
                marginBottom={"1rem"}
              >
                {subtitle}
              </Typography>
            )}
            <Typography
              variant="body2"
              color="text.primary"
              marginBottom={"1rem"}
            >
              {data.description}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? -50 : 40 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
              pointerEvents: hovered ? "auto" : "none",
              position: "relative",
              zIndex: 10,
            }}
          >
            {isReset ? (
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "max-content",
                  maxWidth: "100%",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <WeatherToggleButton variant="pill" />
                <Tooltip
                  title="Reset site settings & reload"
                  arrow
                  placement="top"
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      sessionStorage.clear();
                      localStorage.clear();
                      window.location.reload();
                    }}
                    sx={{
                      border: "1px solid rgba(200, 230, 201, 0.45)",
                      outline: "none",
                      borderRadius: "2rem",
                      minHeight: "42px",
                      padding: "0.35rem 1.1rem",
                      background:
                        "linear-gradient(135deg, #43a047 0%, #2e7d32 50%, #1b5e20 100%)",
                      boxShadow:
                        "0 4px 14px rgba(27, 94, 32, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                      color: "#fff",
                      fontFamily: "Trebuchet",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                      cursor: "pointer",
                      userSelect: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow:
                          "0 6px 18px rgba(27, 94, 32, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.35)",
                        filter: "brightness(1.08)",
                      },
                      "&:active": {
                        transform: "translateY(1px) scale(0.96)",
                        boxShadow: "0 2px 8px rgba(27, 94, 32, 0.4)",
                      },
                    }}
                  >
                    <RefreshIcon sx={{ fontSize: "1.15rem" }} />
                    <span>Reset</span>
                  </Box>
                </Tooltip>
              </Stack>
            ) : (
              <StyledStack
                sx={{
                  backgroundColor: isPrivate
                    ? "red"
                    : "var(--mui-palette-secondary-main)",
                }}
                direction="row"
                spacing={"1rem"}
                alignItems="center"
                justifyContent="center"
              >
                <p>{data.linkText}</p>
                {isPrivate ? (
                  <BlockIcon />
                ) : (
                  <motion.div
                    initial={{ x: -10, y: 2.75 }}
                    animate={{ x: 10, y: 2.75 }}
                    transition={{
                      duration: 0.4,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <ArrowForwardIcon />
                  </motion.div>
                )}
              </StyledStack>
            )}
          </motion.div>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

const StyledCard = styled(Card)({
  backgroundColor: "var(--mui-palette-background-paper)",
  borderRadius: "1rem",
  maxWidth: "20rem",
  textAlign: "left",
});

const StyledStack = styled(Stack)({
  borderRadius: "0.75rem",
  fontFamily: "Trebuchet",
  position: "absolute",
  textWrap: "nowrap",
  padding: "0.2rem 1rem",
  left: "50%",
  fontSize: "1.1rem",
  transform: "translateX(-50%)",
  transformOrigin: "center",
});

export default MainCard;
