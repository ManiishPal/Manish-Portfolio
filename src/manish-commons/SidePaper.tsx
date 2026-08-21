import { Paper, Typography, Stack, styled, Chip } from "@mui/material";
import type { CSSProperties } from "@mui/material/styles";
import type { ReactElement } from "react";

type SidePaperProps = {
  title: string;
  icon?: ReactElement;
  description?: string[];
  chips?: string[];
  children?: ReactElement | ReactElement[];
  style?: CSSProperties;
  elevation?: number;
};

export function SidePaper({
  title,
  icon,
  description,
  chips,
  children,
  style,
  elevation = 0,
}: SidePaperProps) {
  return (
    <Paper
      elevation={elevation}
      sx={[
        {
          padding: "1rem",
          position: "relative",
          borderRadius: "1rem",
          margin: "0.25rem 0",
          overflow: "hidden",
        },
      ]}
      style={style}
    >
      <Stack direction="column" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          {icon && <>{icon}</>}
          <Typography variant="h6">{title}</Typography>
        </Stack>
        {description &&
          description.map((desc, index) => (
            <Typography key={index} variant="body2">
              {desc}
            </Typography>
          ))}
        {chips && (
          <Stack direction="row" flexWrap="wrap" alignItems="center">
            {chips.map((chip, index) => (
              <StyledChip key={index} label={chip} />
            ))}
          </Stack>
        )}
      </Stack>
      {children && <>{children}</>}
    </Paper>
  );
}

const StyledChip = styled(Chip)({
  margin: "0.25rem 0.5rem",
  marginLeft: "0rem",
});
