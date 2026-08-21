import { Stack, useMediaQuery } from "@mui/material";
import type { genericAppData } from "./appData";
import MainCard from "./MainCard";
import HeaderChip from "./HeaderChip";
import type { ReactElement } from "react";

type MainSectionProps = {
  heading: string;
  icon: ReactElement;
  genericData: genericAppData[];
  isDuration?: boolean;
  isLoading?: boolean;
};

function MainSection({
  heading,
  genericData,
  icon,
  isDuration,
  isLoading = false,
}: MainSectionProps) {
  const isPhone = useMediaQuery("(max-width:1000px)");

  return (
    <>
      <HeaderChip title={heading} logo={icon} />
      <Stack
        direction={isPhone ? "column" : "row"}
        spacing={0}
        justifyContent="center"
        flexWrap="wrap"
        sx={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        {genericData.map((data: genericAppData, index: number) => (
          <MainCard
            data={data}
            key={index}
            isDuration={isDuration}
            isLoading={isLoading}
          />
        ))}
      </Stack>
    </>
  );
}

export default MainSection;
