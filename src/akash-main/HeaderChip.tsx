import styled from "@emotion/styled";
import { Chip } from "@mui/material";
import type { ReactElement } from "react";

type HeaderChipProps = {
  title: string;
  logo?: ReactElement;
};

function HeaderChip({ logo, title }: HeaderChipProps) {
  return (
    <StyledChip
      id={title.toLowerCase()}
      variant="filled"
      icon={logo}
      label={title}
    />
  );
}

const StyledChip = styled(Chip)({
  color: "white",
  fontSize: "1.75rem",
  margin: "0.5rem",
  height: "2.2rem",
  gap: "0.25rem",
  backgroundColor: "transparent",
});

export default HeaderChip;
