import HolderBox from "../manish-commons/HolderBox";
import "@google/model-viewer";
import graduationHat from "../assets/graduation_hat.glb";
import {
  AccountBalanceOutlined,
  AutoAwesome,
  CalendarMonthOutlined,
  CheckCircle,
  CodeOutlined,
  DatasetOutlined,
  EmojiEventsOutlined,
  HubOutlined,
  LocationOnOutlined,
  MenuBookOutlined,
  PsychologyOutlined,
  SchoolOutlined,
  TerminalOutlined,
  TimelineOutlined,
  WebOutlined,
} from "@mui/icons-material";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { educationProfile } from "./educationData";

const focusIcons = [
  <CodeOutlined />,
  <WebOutlined />,
  <PsychologyOutlined />,
  <DatasetOutlined />,
  <TerminalOutlined />,
];
const focusColors = ["#f05a7e", "#358fff", "#a569e6", "#85c946", "#f4a62a"];

function Education() {
  return (
    <HolderBox isWide>
      <Stack gap={2} sx={{ pb: 3 }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          gap={{ xs: 2, lg: 3 }}
          alignItems="stretch"
        >
          <Stack flex={0.95} justifyContent="center" gap={2}>
            <Box>
              <Stack direction="row" alignItems="center" gap={1}>
                <SchoolOutlined sx={{ fontSize: "3.5rem", color: "#ff6e91" }} />
                <Typography
                  variant="h2"
                  fontWeight={700}
                  sx={{ fontSize: { xs: "2.8rem", md: "4rem" } }}
                >
                  Education
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: "#FFF7ED",
                  fontSize: "1.1rem",
                  maxWidth: "30rem",
                }}
              >
                My academic background and the journey that shaped my{" "}
                <Box component="span" fontWeight={700}>
                  developer mindset.
                </Box>
              </Typography>
            </Box>
            <Paper sx={profileStyle}>
              <Chip label="UG · Pursuing" size="small" sx={statusChip} />
              <Stack direction={{ xs: "column", sm: "row" }} gap={2.5} mt={1.5}>
                <Stack gap={0.75} flex={1}>
                  <Typography variant="h5" fontWeight={700}>
                    {educationProfile.degree}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="secondary.main"
                    fontWeight={700}
                  >
                    {educationProfile.branch}
                  </Typography>
                  <Info
                    icon={<AccountBalanceOutlined />}
                    text="Medicaps University, Indore"
                  />
                  <Info
                    icon={<CalendarMonthOutlined />}
                    text={educationProfile.duration}
                  />
                  <Info
                    icon={<LocationOnOutlined />}
                    text="Madhya Pradesh, India"
                  />
                  <Info
                    icon={<CheckCircle />}
                    text={educationProfile.status}
                    color="#89bd4a"
                  />
                </Stack>
                <Stack
                  gap={1}
                  flex={0.9}
                  sx={{
                    pl: { sm: 2.5 },
                    borderLeft: {
                      sm: "1px solid var(--mui-palette-background-light2)",
                    },
                  }}
                >
                  <Title icon={<AutoAwesome />} title="About My Journey" />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFF7ED",
                      lineHeight: 1.6,
                    }}
                  >
                    {educationProfile.summary}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                gap={0}
                mt={2}
                sx={statsStyle}
              >
                <Metric
                  icon={<CalendarMonthOutlined />}
                  label="Years"
                  value={educationProfile.duration}
                />
                <Metric
                  icon={<TimelineOutlined />}
                  label="Focus Areas"
                  value="Full-Stack, AI/ML, Problem Solving"
                />
                <Metric
                  icon={<HubOutlined />}
                  label="Mindset"
                  value="Learn · Build · Improve · Repeat"
                />
              </Stack>
            </Paper>
          </Stack>
          <Stack flex={1.25} justifyContent="center" sx={{ minWidth: 0 }}>
            <Box sx={modelStageStyle}>
              <model-viewer
                src={graduationHat}
                alt="Interactive 3D graduation cap"
                camera-controls
                auto-rotate
                rotation-per-second="18deg"
                shadow-intensity="1"
                exposure="1.15"
                camera-orbit="0deg 72deg 105%"
                interaction-prompt="none"
                style={modelStyle}
              />
              <Chip
                label="Drag to rotate · Scroll to zoom"
                size="small"
                sx={modelHintStyle}
              />
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              px={{ xs: 1, sm: 5 }}
              mt={-0.3}
            >
              <TimelineLabel heading="2023" caption="Start" />
              <TimelineLabel heading="Building" caption="Knowledge" />
              <TimelineLabel heading="2027" caption="Graduate" />
            </Stack>
          </Stack>
        </Stack>
        <Title icon={<HubOutlined />} title="Academic Focus" />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          flexWrap="wrap"
          gap={1.2}
        >
          {educationProfile.focusAreas.map(([title, description], index) => (
            <Paper
              key={title}
              sx={{ ...focusStyle, borderBottomColor: focusColors[index] }}
            >
              <Box sx={{ color: focusColors[index] }}>{focusIcons[index]}</Box>
              <Typography fontWeight={700} textAlign="center">
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFF7ED",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                {description}
              </Typography>
            </Paper>
          ))}
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} gap={1.2}>
          <Paper sx={{ ...panelStyle, flex: 1.15 }}>
            <Title icon={<MenuBookOutlined />} title="Coursework Snapshot" />
            <Stack direction="row" gap={0.8} flexWrap="wrap" mt={1.4}>
              {educationProfile.coursework.map((course) => (
                <Chip
                  key={course}
                  label={course}
                  size="small"
                  sx={courseChipStyle}
                />
              ))}
            </Stack>
          </Paper>
          <Paper sx={{ ...panelStyle, flex: 1 }}>
            <Title icon={<EmojiEventsOutlined />} title="Academic Highlights" />
            <Stack gap={0.8} mt={1.25}>
              {educationProfile.highlights.map((item) => (
                <Stack key={item} direction="row" gap={0.8}>
                  <CheckCircle
                    sx={{ fontSize: "1.15rem", color: "#ff6e91", mt: "0.1rem" }}
                  />
                  <Typography variant="body2" sx={{ color: "#FFF7ED" }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Stack>
        <Paper sx={quoteStyle}>
          <Typography color="secondary.main" variant="h4">
            “
          </Typography>
          <Typography
            textAlign="center"
            fontSize={{ xs: "1rem", md: "1.2rem" }}
          >
            I believe in{" "}
            <Box component="span" color="secondary.main" fontWeight={700}>
              continuous learning
            </Box>{" "}
            and building solutions that create{" "}
            <Box component="span" color="secondary.main" fontWeight={700}>
              real impact
            </Box>
            .
          </Typography>
          <Typography color="secondary.main" variant="h5">
            &lt;/&gt;
          </Typography>
        </Paper>
      </Stack>
    </HolderBox>
  );
}

function Info({
  icon,
  text,
  color = "#ffb238",
}: {
  icon: ReactNode;
  text: string;
  color?: string;
}) {
  return (
    <Stack direction="row" gap={1} alignItems="center">
      <Box sx={{ display: "grid", color, placeItems: "center" }}>{icon}</Box>
      <Typography sx={{ color: "#FFF7ED" }}>{text}</Typography>
    </Stack>
  );
}
function Title({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <Stack direction="row" gap={1} alignItems="center" color="secondary.main">
      <Box sx={{ display: "grid", placeItems: "center" }}>{icon}</Box>
      <Typography variant="h6" color="text.primary" fontWeight={700}>
        {title}
      </Typography>
    </Stack>
  );
}
function Metric({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Stack
      flex={1}
      gap={0.4}
      p={1.2}
      sx={{
        borderRight: { sm: "1px solid var(--mui-palette-background-light2)" },
        "&:last-child": { border: 0 },
      }}
    >
      <Stack
        direction="row"
        gap={0.7}
        color="secondary.main"
        alignItems="center"
      >
        {icon}
        <Typography variant="body2">{label}</Typography>
      </Stack>
      <Typography variant="body2" sx={{ color: "#FFF7ED" }}>
        {value}
      </Typography>
    </Stack>
  );
}
function TimelineLabel({
  heading,
  caption,
}: {
  heading: string;
  caption: string;
}) {
  return (
    <Stack alignItems="center">
      <Box
        sx={{
          width: "0.9rem",
          height: "0.9rem",
          borderRadius: "50%",
          bgcolor: "#ff805f",
          boxShadow: "0 0 12px #ff805f",
        }}
      />
      <Typography fontWeight={700}>{heading}</Typography>
      <Typography variant="body2" sx={{ color: "#FFF7ED" }}>
        {caption}
      </Typography>
    </Stack>
  );
}

const profileStyle = {
  p: { xs: 2, md: 2.25 },
  borderRadius: "1.3rem",
  background:
    "linear-gradient(130deg, color-mix(in srgb, var(--mui-palette-background-paper) 94%, black), var(--mui-palette-background-paper))",
  border: "1px solid var(--mui-palette-background-light2)",
};
const statusChip = {
  width: "fit-content",
  color: "white",
  fontWeight: 700,
  bgcolor: "rgba(208, 75, 86, 0.76)",
};
const statsStyle = {
  border: "1px solid var(--mui-palette-background-light2)",
  borderRadius: "1rem",
  overflow: "hidden",
};
const modelStageStyle = {
  position: "relative",
  minHeight: { xs: "22rem", md: "29rem" },
  borderRadius: "1.5rem",
  overflow: "hidden",
  background:
    "radial-gradient(circle at 50% 45%, rgba(219, 93, 67, .27), transparent 48%), linear-gradient(145deg, rgba(25, 12, 8, .45), rgba(104, 42, 18, .22))",
  border: "1px solid var(--mui-palette-background-light2)",
};
const modelStyle = {
  width: "100%",
  height: "100%",
  minHeight: "inherit",
  backgroundColor: "transparent",
};
const modelHintStyle = {
  position: "absolute",
  bottom: "1rem",
  left: "50%",
  transform: "translateX(-50%)",
  color: "#FFF7ED",
  bgcolor: "rgba(35, 17, 10, .78)",
  border: "1px solid var(--mui-palette-background-light2)",
  whiteSpace: "nowrap",
};
const focusStyle = {
  flex: "1 1 11rem",
  minHeight: "10rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 0.8,
  p: 1.5,
  borderRadius: "1rem",
  borderBottom: "4px solid",
  backgroundColor: "var(--mui-palette-background-paper)",
};
const panelStyle = {
  p: 1.8,
  borderRadius: "1rem",
  backgroundColor: "var(--mui-palette-background-paper)",
};
const courseChipStyle = {
  color: "#FFF7ED",
  border: "1px solid var(--mui-palette-background-light2)",
  height: "auto",
  py: 0.25,
  "& .MuiChip-label": { whiteSpace: "normal" },
};
const quoteStyle = {
  p: 1.3,
  borderRadius: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
  backgroundColor: "var(--mui-palette-background-paper)",
};

export default Education;
