import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import type { WebDataType } from "./webData";
import { useState } from "react";
import {
  GitHub,
  OpenInNew,
  PlayArrow,
  WarningAmberOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

type WebCardProps = {
  data: WebDataType;
  isLoading: boolean;
  isPhone: boolean;
};

function WebCard({ data, isLoading, isPhone }: WebCardProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return !isPhone ? (
    <List sx={{ gap: "0.5rem", width: "100%", alignSelf: "center" }}>
      <ListItemButton
        sx={{
          width: "100%",
          maxWidth: "40rem",
          padding: "1rem",
          alignSelf: "center",
          gap: "1rem",
          backgroundColor: "var(--mui-palette-background-paper)",
          ":hover": { backgroundColor: "var(--mui-palette-action-hover)" },
          borderRadius: "1rem",
        }}
        onClick={() => {
          const link = data.smallChipLinks[0];
          if (
            link.startsWith("https://") ||
            link.toLowerCase().includes(".pdf") ||
            link.startsWith("blob:")
          ) {
            window.open(link, "_blank");
          } else if (link.includes(".html")) {
            window.location.href = link;
          } else {
            navigate(link);
          }
        }}
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
              <span style={{ fontWeight: "bold" }}>{data.appName}</span>
              <OpenInNew sx={{ fontSize: "1.2rem", opacity: 0.7 }} />
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
              <span>{data.description}</span>

              {/* Chips Section */}
              <Stack direction="row" gap={1.5} mt={0.5} flexWrap="wrap">
                {data.smallChipLabel.map((label, index) => {
                  const isStartChip =
                    label.includes("Start") ||
                    label.includes("View Project") ||
                    label.includes("Certificate") ||
                    label.includes("Live");
                  const isWarningChip = data.isWideOnly ?? false;

                  return (
                    <Chip
                      key={index}
                      size="small"
                      sx={{
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        padding: "1rem 0.75rem",
                        borderRadius: "1rem",
                        backgroundColor: isStartChip
                          ? isWarningChip
                            ? "#d29914ff"
                            : "var(--mui-palette-secondary-main)"
                          : "rgba(255,255,255,0.1)",
                        color: "white",
                        "&:hover": {
                          backgroundColor: isStartChip
                            ? isWarningChip
                              ? "#8c660cff"
                              : "var(--mui-palette-secondary-dark)"
                            : "rgba(255,255,255,0.2)",
                        },
                      }}
                      label={
                        isWarningChip && isStartChip
                          ? "Screen Width Low"
                          : label
                      }
                      onClick={(event) => {
                        event.stopPropagation();
                        const link = data.smallChipLinks[index];
                        if (
                          link.startsWith("https://") ||
                          link.toLowerCase().includes(".pdf") ||
                          link.startsWith("blob:")
                        ) {
                          window.open(link, "_blank");
                        } else if (link.includes(".html")) {
                          window.location.href = link;
                        } else {
                          navigate(link);
                        }
                      }}
                      icon={
                        isStartChip ? (
                          isWarningChip ? (
                            <WarningAmberOutlined
                              style={{ color: "white", fontSize: "1rem" }}
                            />
                          ) : (
                            <PlayArrow
                              style={{ color: "white", fontSize: "1rem" }}
                            />
                          )
                        ) : (
                          <GitHub
                            style={{ color: "white", fontSize: "1rem" }}
                          />
                        )
                      }
                    />
                  );
                })}
              </Stack>
            </Stack>
          }
          secondaryTypographyProps={{ component: "div" }}
        />
      </ListItemButton>
    </List>
  ) : (
    <StyledCard sx={{ width: "18rem" }}>
      <CardActionArea
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          const link = data.smallChipLinks[0];
          if (
            link.startsWith("https://") ||
            link.toLowerCase().includes(".pdf") ||
            link.startsWith("blob:")
          ) {
            window.open(link, "_blank");
          } else if (link.includes(".html")) {
            window.location.href = link;
          } else {
            navigate(link);
          }
        }}
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
        <CardContent
          sx={{
            minHeight: "12rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem",
          }}
        >
          <Typography variant="h6" sx={{ alignSelf: "flex-start" }}>
            {data.appName}
          </Typography>

          <Typography
            color="text.primary"
            variant="body2"
            sx={{ alignSelf: "flex-start" }}
          >
            {data.description}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" gap={1} flexWrap="wrap">
            {data.smallChipLabel.map((label, index) => {
              const isStartChip =
                label.includes("Start") ||
                label.includes("View Project") ||
                label.includes("Certificate") ||
                label.includes("Live");
              return (
                <Chip
                  sx={{
                    cursor: "pointer",
                    minWidth: "fit-content",
                    padding: "none",
                    fontSize: "0.8rem",
                    borderRadius: "1rem",
                    backgroundColor: isStartChip
                      ? "var(--mui-palette-secondary-main)"
                      : "none",
                    "&:hover": {
                      backgroundColor: isStartChip
                        ? "var(--mui-palette-secondary-dark)"
                        : "none",
                    },
                  }}
                  key={index}
                  label={label}
                  onClick={(event) => {
                    event.stopPropagation();
                    const link = data.smallChipLinks[index];
                    if (
                      link.startsWith("https://") ||
                      link.toLowerCase().includes(".pdf") ||
                      link.startsWith("blob:")
                    ) {
                      window.open(link, "_blank");
                    } else if (link.includes(".html")) {
                      window.location.href = link;
                    } else {
                      navigate(link);
                    }
                  }}
                  icon={
                    !isStartChip ? (
                      <GitHub sx={{ color: "white!important" }} />
                    ) : (
                      <PlayArrow sx={{ color: "white!important" }} />
                    )
                  }
                />
              );
            })}
          </Stack>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

const StyledCard = styled(Card)({
  backgroundColor: "var(--mui-palette-background-paper)",
  borderRadius: "1rem",
  textAlign: "left",
});

export default WebCard;
