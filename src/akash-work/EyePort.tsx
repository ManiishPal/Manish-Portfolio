import "./../styles/App.css";
import HolderBox from "../akash-commons/HolderBox";
import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Portal,
  Skeleton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { SidePaper } from "../akash-commons/SidePaper";
import { Download, Description, OpenInNew, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useGetImages } from "../akash-commons/Hooks";
import {
  HolderStyledImg,
  HolderStyledVid,
} from "../akash-commons/HolderStyledImg";
import { eyeportHeaderData, images, videos } from "./eyeportData";
import { headerContainer } from "../akash-commons/Header";
import {
  downloadEyePort,
  openDetailedExplanation,
} from "../akash-commons/Utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import HeaderRowPaper from "../akash-commons/HeaderRowPaper";
import { updateCount, useGetCount } from "../akash-commons/firebaseHooks";

function EyePort() {
  // Media Query and Images
  const isPhone = useMediaQuery("(min-width:600px)");
  const isLoading = useGetImages(images);

  function handleScrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const { count, loading, error } = useGetCount("eyeport");

  return (
    <HolderBox isWide>
      <Portal container={headerContainer}>
        <TableOfContentsLink handler={handleScrollTo} />
      </Portal>
      <Stack direction={{ xs: "column", sm: "row" }} gap={3.5}>
        {isPhone && (
          <SidePaper
            title="Table of Contents"
            elevation={3}
            style={{
              minWidth: "15rem",
              height: "min-content",
              position: "sticky",
              top: "5.5rem",
              marginTop: "0rem",
            }}
          >
            <TableOfContentsLink handler={handleScrollTo} />
          </SidePaper>
        )}
        <Box flexGrow={1}>
          <HeaderRowPaper
            data={eyeportHeaderData}
            style={{ marginTop: "0.25rem" }}
          />
          <HolderStyledImg
            src={images[0]}
            isWide
            isLoading={isLoading}
            isPhone={isPhone}
          />
          <p id="link1" style={{ position: "relative", bottom: "5rem" }}></p>
          <h2>Introduction</h2>

          <p>
            Eye-Tracking measures gaze point or eye motion relative to the head.
            Modern Eye-Trackers, wearable or not, include multiple sensors.
            Tracking data finds applications in human behavior analysis and
            predictions.
          </p>

          <p>
            I developed EyePort, an automated system for processing eye-tracking
            data from TOBII Pro Glasses 3. It incorporates algorithms for
            recording, analyzing, and exporting data. EyePort evolved to serve
            as a safety assessment tool and instructor aid in the maritime
            industry, extending its applications beyond FRAM Modelling.
          </p>
          <Divider
            sx={{ backgroundColor: "var(--mui-palette-background-macos)" }}
          />

          <p id="link2" style={{ position: "relative", bottom: "5rem" }}></p>

          <h2>Download</h2>
          <p>
            Click the download button below to download directly. An additional
            resource is needed for Object Detection Module to work. You can find
            it on GitHub. EyePort is not to be resold for any commercial
            purpose(s).
          </p>
          <HolderStyledImg
            src={images[6]}
            isLoading={isLoading}
            isPhone={isPhone}
          />
          {loading ? (
            <Skeleton
              variant="text"
              animation="wave"
              width="20rem"
              height="2.5rem"
              sx={{ borderRadius: "0.75rem", marginBottom: "1.5rem" }}
            />
          ) : error ? (
            <p style={{ marginBottom: "1.5rem" }}>
              Unable to fetch download count
            </p>
          ) : (
            <p
              style={{
                marginBottom: "1.5rem",
                textAlign: !isPhone ? "center" : "left",
              }}
            >
              EyePort has been downloaded {count} times.
            </p>
          )}
          <Stack
            direction="row"
            justifyContent={!isPhone ? "center" : "flex-start"}
            flexWrap="wrap"
            mt={2}
            mb={2}
          >
            <Chip
              sx={{
                fontSize: "1rem",
                padding: "1.25rem 1rem",
                borderRadius: "1.5rem",
                margin: "0.5rem",
                marginTop: "0",
                marginLeft: isPhone ? "0rem" : "0.5rem",
                width: isPhone ? "min-content" : "100%",
                maxWidth: isPhone ? "unset" : "14rem",
              }}
              size="medium"
              onClick={() => {
                updateCount(count + 1, "eyeport");
                downloadEyePort();
              }}
              color="secondary"
              label="Download"
              icon={<Download sx={{ color: "white !important" }} />}
            />
            <Chip
              sx={{
                fontSize: "1rem",
                padding: "1.25rem 1rem",
                borderRadius: "1.5rem",
                margin: "0.5rem",
                marginTop: "0",
                marginLeft: isPhone ? "0rem" : "0.5rem",
                width: isPhone ? "min-content" : "100%",
                maxWidth: isPhone ? "unset" : "14rem",
              }}
              size="medium"
              onClick={() =>
                window.open("https://github.com/akashcraft/EyePort", "_blank")
              }
              label="View Source Code"
              icon={
                <GitHub
                  sx={{
                    color: "white!important",
                    position: "relative",
                    bottom: "0.075rem",
                    right: "0.1rem",
                  }}
                />
              }
            />
          </Stack>
          <Divider
            sx={{ backgroundColor: "var(--mui-palette-background-macos)" }}
          />

          <p id="link3" style={{ position: "relative", bottom: "5rem" }}></p>

          <h2>Recording Data</h2>

          <p>
            EyePort is designed for the TOBII Pro Glasses 3. You can connect and
            record from the glasses from EyePort directly.
          </p>

          <HolderStyledImg
            src={images[1]}
            isLoading={isLoading}
            isPhone={isPhone}
          />

          <p>
            The official API for connecting the glasses can be found{" "}
            <StyledLink
              target="_blank"
              to="https://connect.tobii.com/s/g3-downloads?language=en_US"
            >
              here
            </StyledLink>
            . The data collected are in the form of Gaze 2D Coordinates, Gaze 3D
            Vectors, and IMU measurements which are accessed locally from the
            glass SD Card.
          </p>
          <HolderStyledVid
            src={videos[0]}
            isLoading={isLoading}
            isPhone={isPhone}
          />
          <p>
            EyePort creates an Excel file to hold these data. Some cases, this
            extraction is all you need. But EyePort can do a lot more; these are
            discussed in the next section.
          </p>
          <Divider
            sx={{ backgroundColor: "var(--mui-palette-background-macos)" }}
          />

          <p id="link4" style={{ position: "relative", bottom: "5rem" }}></p>
          <h2>Analyzing Data</h2>
          <p>
            Using a simple timing and tolerance algorithm based on Gaze 2D
            Coordinates, EyePort can quickly determine Areas of Interest (AOIs).
            The detections are then cropped into smaller squares of images (size
            can be adjusted by user) and then matched against each other to
            uniquely identify common or similar looking objects (done using
            image_similarity_measures). Matrix calculation and Single
            integration calculations were dropped since EyePort V3.0.0.
          </p>
          <p>
            The detections can be identified using an pre-trained ImageAI model.
            For this identification, the YOLO (You look only once) algorithm was
            used. Details about this algorithm can be found{" "}
            <StyledLink
              target="_blank"
              to="https://opencv-tutorial.readthedocs.io/en/latest/yolo/yolo.html"
            >
              here
            </StyledLink>
            . EyePort can detect General Objects, Ships and Icebergs, or VISTA
            Diesel Engine.
          </p>
          <HolderStyledImg
            src={images[7]}
            isLoading={isLoading}
            isPhone={isPhone}
          />
          <p>
            EyePort also calculates Head Orientation Times, Radar Violations,
            No-Go Zone Violations, Dead Man Switch Trigger. These come from the
            glass data of AOI analysis. The data can be viewed in graphs and
            tables. It can also be exported in various formats discussed in the
            next section. Detailed explanation can be found below.
          </p>
          <Stack
            direction="row"
            justifyContent={!isPhone ? "center" : "flex-start"}
            flexWrap="wrap"
            mt={2}
            mb={2}
          >
            <Chip
              sx={{
                fontSize: "1rem",
                padding: "1.25rem 1rem",
                borderRadius: "1.5rem",
                margin: "0.5rem",
                marginTop: "1rem",
                marginLeft: isPhone ? "0rem" : "0.5rem",
                width: isPhone ? "min-content" : "100%",
                maxWidth: isPhone ? "unset" : "15rem",
              }}
              size="medium"
              onClick={() => openDetailedExplanation()}
              color="secondary"
              label="Detailed Explanation"
              icon={<Description sx={{ color: "white !important" }} />}
            />
          </Stack>
          <HolderStyledImg
            src={images[8]}
            isLoading={isLoading}
            isPhone={isPhone}
          />
          <Divider
            sx={{ backgroundColor: "var(--mui-palette-background-macos)" }}
          />
          <p id="link5" style={{ position: "relative", bottom: "5rem" }}></p>

          <h2>Exporting Data</h2>

          <p>
            EyePort V2.0.0 was mainly catered to serve DynaFRAM which is a FRAM
            Model Visualizer. To learn more about FRAM and FRAM Modelling, click
            the external link below. EyePort creates partial input files
            containing eye-tracking data for DynaFRAM. You can download DynaFRAM
            using the external link below.
          </p>
          <HolderStyledVid
            src={videos[1]}
            isLoading={isLoading}
            isPhone={isPhone}
          />
          <Stack
            direction="row"
            justifyContent={!isPhone ? "center" : "flex-start"}
            flexWrap="wrap"
            mt={2}
            mb={2}
          >
            <Chip
              sx={{
                fontSize: "1rem",
                padding: "1.25rem 1rem",
                borderRadius: "1.5rem",
                margin: "0.5rem",
                marginTop: "0",
                marginLeft: isPhone ? "0rem" : "0.5rem",
                width: isPhone ? "min-content" : "100%",
                maxWidth: isPhone ? "unset" : "14rem",
              }}
              size="medium"
              color="secondary"
              onClick={() =>
                window.open(
                  "https://www.engr.mun.ca/~d.smith/dynafram.html",
                  "_blank",
                )
              }
              label="Download"
              icon={<Download sx={{ color: "white !important" }} />}
            />
            <Chip
              sx={{
                fontSize: "1rem",
                padding: "1.25rem 1rem",
                borderRadius: "1.5rem",
                margin: "0.5rem",
                marginTop: "0",
                marginLeft: isPhone ? "0rem" : "0.5rem",
              }}
              size="medium"
              onClick={() =>
                window.open(
                  "https://functionalresonance.com/brief-introduction-to-fram/",
                  "_blank",
                )
              }
              label="FRAM Modelling Guide"
              icon={<OpenInNew sx={{ color: "white !important" }} />}
            />
          </Stack>
          <p>
            EyePort V3.0.0 focuses on expanding the applications of
            eye-tracking. It can be used as an safety assessment tool and an
            instructor aid for the maritime industry. EyePort exports in XLSX,
            CSV, XMFV formats.
          </p>

          <HolderStyledImg
            src={images[2]}
            isEnd
            isLoading={isLoading}
            isPhone={isPhone}
          />
          <Divider
            sx={{ backgroundColor: "var(--mui-palette-background-macos)" }}
          />

          <p id="link6" style={{ position: "relative", bottom: "5rem" }}></p>
          <h2>Limitations</h2>

          <p>Some limitations include:</p>
          <ul>
            <li>Needs Lighting and 500+ samples for Good Image Detection</li>
            <li>Only works with TOBII Pro Glasses 3</li>
          </ul>
          <br />

          <Divider
            sx={{ backgroundColor: "var(--mui-palette-background-macos)" }}
          />

          <p id="link7" style={{ position: "relative", bottom: "5rem" }}></p>
          <h2>Some Thoughts</h2>

          <p>
            Thank You for this wonderful opportunity. I was privileged to work
            with Memorial University and the Fisheries and Marine Institute for
            8 months. It was super cool to visit the full bridge motion
            simulators at Marine Institute. I got exposure to the professional
            working environment, learnt a lot of new programming skills, and of
            course had fun with eye-tracking!
          </p>
          <StyledSwiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            autoplay
            style={{
              display: isLoading ? "none" : "block",
              width: isPhone ? "30rem" : "100%",
            }}
          >
            {images
              .slice(9)
              .concat(images[3], images[4])
              .map((src, index) => (
                <SwiperSlide key={index} style={{ height: "auto" }}>
                  <StyledImg
                    src={src}
                    style={{ display: isLoading ? "none" : "block" }}
                  />
                </SwiperSlide>
              ))}
          </StyledSwiper>
        </Box>
      </Stack>
    </HolderBox>
  );
}

const StyledLink = styled(Link)({
  color: "orange",
});

const TableOfContentsLink = ({
  handler,
}: {
  handler: (link: string) => void;
}) => (
  <List sx={{ marginTop: "0.5rem", paddingBottom: "0" }}>
    <ListItem disablePadding onClick={() => handler("link1")}>
      <ListItemButton>
        <ListItemText primary="Introduction" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding onClick={() => handler("link2")}>
      <ListItemButton>
        <ListItemText primary="Download" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding onClick={() => handler("link3")}>
      <ListItemButton>
        <ListItemText primary="Recording Data" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding onClick={() => handler("link4")}>
      <ListItemButton>
        <ListItemText primary="Analyzing Data" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding onClick={() => handler("link5")}>
      <ListItemButton>
        <ListItemText primary="Exporting Data" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding onClick={() => handler("link6")}>
      <ListItemButton>
        <ListItemText primary="Limitations" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding onClick={() => handler("link7")}>
      <ListItemButton>
        <ListItemText primary="Some Thoughts" />
      </ListItemButton>
    </ListItem>
  </List>
);

const StyledSwiper = styled(Swiper)`
  height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  margin: 0.25rem 0;
  margin-top: 2rem;

  .swiper-pagination-bullet {
    background-color: rgba(255, 165, 0, 0.4);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: orange;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: orange;
    transition: color 0.2s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #ffb347;
  }
`;

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export default EyePort;
