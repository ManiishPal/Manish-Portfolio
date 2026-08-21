import "./../styles/App.css";
import { Chip, Paper, Stack, Typography } from "@mui/material";
import "swiper/swiper-bundle.css";

import styled from "@emotion/styled";

export type HeaderRowData = {
  title: string;
  chipLabels: string[];
  chipIcons: React.ReactElement[];
  statLabel?: string[];
  statValue?: string[];
  statSubLabel?: string[];
};

type HeaderRowProps = {
  data: HeaderRowData;
  elevation?: number;
  style?: React.CSSProperties;
};

function HeaderRowData({ data, elevation = 0, style }: HeaderRowProps) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1.5} style={style}>
      <Paper
        elevation={elevation}
        sx={{
          padding: "1rem",
          borderRadius: "1rem",
          flexGrow: 4,
          margin: "0.25rem 0",
          width: "25rem",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {data.title}
        </Typography>
        <Stack direction="row" alignItems="center" flexWrap="wrap">
          {data.chipLabels.map((label, index) => (
            <StyledChip
              key={index}
              label={label}
              icon={data.chipIcons[index]}
            />
          ))}
        </Stack>
      </Paper>
      <Stack direction={"row"} flexGrow={1} gap={1.5}>
        {data.statLabel &&
          data.statValue &&
          data.statSubLabel &&
          data.statLabel.map((label, index) => (
            <StyledPaper elevation={elevation} key={index}>
              <Typography variant="body2">{label}</Typography>
              <Typography variant="h5">
                {data.statValue?.[index] ?? ""}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "0.25rem" }}>
                {data.statSubLabel?.[index] ?? ""}
              </Typography>
            </StyledPaper>
          ))}
      </Stack>
    </Stack>
  );
}

const StyledChip = styled(Chip)({
  margin: "0.25rem 0.5rem",
  marginLeft: "0rem",
});

const StyledPaper = styled(Paper)({
  padding: "1rem",
  borderRadius: "1rem",
  flexBasis: "fit-content",
  flexGrow: 1,
  textWrap: "nowrap",
  margin: "0.25rem 0",
});

export default HeaderRowData;
