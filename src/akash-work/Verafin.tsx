import "./../styles/App.css";
import HolderBox from "../akash-commons/HolderBox";
import {
  Container,
  Paper,
  Skeleton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import "swiper/swiper-bundle.css";

import styled from "@emotion/styled";
import { images, verafinData } from "./verafinData";
import HeaderRowPaper from "../akash-commons/HeaderRowPaper";
import { SidePaper } from "../akash-commons/SidePaper";
import { useGetImages } from "../akash-commons/Hooks";
import { useParams } from "react-router-dom";

function Verafin() {
  // Media Query and Images
  const isLoading = useGetImages(images);
  const selectedId = parseInt(useParams().id ?? "1");
  const isPhone = useMediaQuery("(min-width:800px)");

  return (
    <HolderBox>
      <Stack direction={"column"} gap={1.5}>
        {verafinData
          .filter((item) => item.id === selectedId)
          .map((item) => (
            <Container sx={{ padding: "0" }} key={item.id}>
              <HeaderRowPaper data={item.headerData} />
              <Stack direction={{ xs: "column", sm: "row" }} gap={1.5} mt={1.5}>
                {item.id % 2 === 0 ? (
                  <>
                    {isLoading && (
                      <StyledSkeleton variant="rounded" animation="wave" />
                    )}
                    <StyledPaper
                      style={{ display: isLoading ? "none" : "block" }}
                    >
                      <img
                        src={images[item.id - 1]}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: isLoading ? "none" : "block",
                        }}
                      />
                    </StyledPaper>
                    <SidePaper
                      title="Description"
                      description={item.description}
                      style={{ width: isPhone ? "calc(100%-1re)" : "100%" }}
                    />
                  </>
                ) : (
                  <>
                    <SidePaper
                      title="Description"
                      description={item.description}
                      style={{ width: isPhone ? "80%" : "100%" }}
                    />
                    {isLoading && (
                      <StyledSkeleton variant="rounded" animation="wave" />
                    )}
                    <StyledPaper
                      style={{ display: isLoading ? "none" : "block" }}
                    >
                      <img
                        src={images[item.id - 1]}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: isLoading ? "none" : "block",
                        }}
                      />
                    </StyledPaper>
                  </>
                )}
              </Stack>
            </Container>
          ))}
      </Stack>
    </HolderBox>
  );
}

const StyledSkeleton = styled(Skeleton)({
  borderRadius: "1rem",
  margin: "0.25rem 0",
  width: "100%",
  height: "auto",
});

const StyledPaper = styled(Paper)({
  borderRadius: "1rem",
  overflow: "hidden",
  width: "100%",
  margin: "0.25rem 0",
  height: "20rem",
});

export default Verafin;
