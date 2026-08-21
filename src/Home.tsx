import "./styles/App.css";
import Header from "./akash-commons/Header";
import { Box, Skeleton, Stack, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import logo from "./assets/logo2.png";
import christmasHat from "./assets/img-main/christmas.png";
import {
  codingData,
  educationData,
  images,
  otherData,
  workData,
  workDataPhone,
} from "./akash-main/appData";
import { openGitHub, openLinkedIn, openLeetCode } from "./akash-commons/Utils";
import { grey, blue, amber } from "@mui/material/colors";
import TopChip from "./akash-main/TopChip";
import MainSection from "./akash-main/MainSection";
import {
  DataObject,
  WorkOutline as Work,
  SchoolOutlined as School,
  DescriptionOutlined as NoteAdd,
  PersonOutlined,
} from "@mui/icons-material";
import Footer from "./akash-commons/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useGetImages } from "./akash-commons/Hooks";
import MacDialog from "./akash-commons/MacDialog";
import { MacDialogContext } from "./akash-main/appData";
import MacDock from "./akash-macos/MacDock";
import Background from "./Background";
import useGeneralInfo from "./akash-commons/firebaseHooks";
import { MacNotification } from "./akash-macos/MacNotification";
import HeaderChip from "./akash-main/HeaderChip";

function Home() {
  const [openMacDialog, setOpenMacDialog] = useState<boolean>(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("homeScroll");
    if (saved) {
      window.scrollTo(0, Number(saved));
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
    const handleScroll = () => {
      sessionStorage.setItem("homeScroll", String(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLoading = useGetImages([...images, christmasHat, logo]);
  const isPhone = useMediaQuery("(max-width:1000px)");

  const { publicAnnouncement, aboutMe: aboutMeText } = useGeneralInfo();
  const month = new Date().getMonth();
  const isWinter = month === 10 || month === 11 || month === 0 || month === 1;

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Header />
      <MacNotification text={publicAnnouncement} />
      <motion.div
        style={{ transformOrigin: "top center" }}
        initial={{
          opacity: 0,
          scale: sessionStorage.getItem("homeScroll") ? 1 : 0.95,
          x: sessionStorage.getItem("homeScroll") ? 50 : 0,
          y: 0,
        }}
        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.05, 0.8, 0.35, 0.99] }}
      >
        <Box sx={{ marginBottom: "4rem" }}>
          <Background />
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ margin: "2rem 0", marginTop: "4rem" }}
          >
            {isLoading && (
              <Skeleton variant="circular" width={88} height={88} />
            )}
            <Box sx={{ position: "relative" }}>
              <StyledImg
                src={logo}
                style={{
                  display: isLoading ? "none" : "block",
                  borderRadius: "50%",
                }}
              />
              {isWinter && !isLoading && (
                <img
                  src={christmasHat}
                  style={{
                    position: "absolute",
                    width: "3rem",
                    top: "-0.1rem",
                    right: "2rem",
                  }}
                />
              )}
            </Box>
          </Stack>
          <Stack
            direction="column"
            spacing={1}
            alignItems="center"
            sx={{
              maxWidth: "55rem",
              width: "calc(100% - 2rem)",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <HeaderChip
              title="About Me"
              logo={<PersonOutlined sx={ChipIconStyle} />}
            />
            <Box height="0.5rem" />
            {!aboutMeText ? (
              <>
                <Skeleton variant="text" width="100%" animation="wave" />
                <Skeleton variant="text" width="100%" animation="wave" />
                <Skeleton variant="text" width="100%" animation="wave" />
                <Skeleton variant="text" width="100%" animation="wave" />
              </>
            ) : (
              <p
                className="about"
                style={{
                  fontSize: isPhone ? "0.9rem" : "1rem",
                  marginTop: "0.75rem",
                }}
              >
                {aboutMeText}
              </p>
            )}
          </Stack>
          <br />
          <Stack
            direction={isPhone ? "column" : "row"}
            spacing={0}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            sx={{ width: "100%", margin: "0" }}
          >
            <TopChip
              isPhone={isPhone}
              title="LinkedIn"
              color={blue}
              link={openLinkedIn}
            />
            <TopChip
              isPhone={isPhone}
              title="GitHub"
              color={grey}
              link={openGitHub}
            />
            <TopChip
              isPhone={isPhone}
              title="LeetCode"
              color={amber}
              link={openLeetCode}
            />
          </Stack>
          <MacDock />
          <MacDialogContext.Provider
            value={{ openMacDialog, setOpenMacDialog }}
          >
            <MacDialog
              heading="Not Implemented"
              description="This feature is still under development. Stay tuned for updates!"
              visible={openMacDialog}
              onClose={() => setOpenMacDialog(false)}
            />
            <Stack
              direction="column"
              spacing={3}
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "2rem" }}
            >
              <MainSection
                heading="Projects"
                icon={<DataObject sx={ChipIconStyle} />}
                genericData={codingData}
                isLoading={isLoading}
              />
              <MainSection
                heading="Experience & Certifications"
                icon={<Work sx={ChipIconStyle} />}
                genericData={isPhone ? workDataPhone : workData}
                isLoading={isLoading}
              />
              <MainSection
                heading="Education"
                icon={<School sx={ChipIconStyle} />}
                genericData={educationData}
                isLoading={isLoading}
              />
              <MainSection
                heading="Others"
                icon={<NoteAdd sx={ChipIconStyle} />}
                genericData={otherData}
                isLoading={isLoading}
              />
            </Stack>
          </MacDialogContext.Provider>
        </Box>
      </motion.div>
      <Footer />
    </>
  );
}

const StyledImg = styled.img`
  width: 5.5rem;
`;

const ChipIconStyle = { color: "white !important", fontSize: "2rem" };

export default Home;
