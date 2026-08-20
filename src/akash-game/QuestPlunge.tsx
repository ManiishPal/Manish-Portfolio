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
import { Download, GitHub } from "@mui/icons-material";
import { useGetImages } from "../akash-commons/Hooks";
import {
  HolderStyledImg,
  HolderStyledVid,
} from "../akash-commons/HolderStyledImg";
import { questplungeHeaderData, images, videos } from "./questplungeData";
import { headerContainer } from "../akash-commons/Header";
import { downloadQuestPlunge } from "../akash-commons/Utils";
import HeaderRowPaper from "../akash-commons/HeaderRowPaper";
import { updateCount, useGetCount } from "../akash-commons/firebaseHooks";

function QuestPlunge() {
  // Media Query and Images
  const isPhone = useMediaQuery("(min-width:600px)");
  const isLoading = useGetImages(images);

  function handleScrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const { count, loading, error } = useGetCount("questplunge");

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
            data={questplungeHeaderData}
            style={{ marginTop: "0.25rem" }}
          />
          <HolderStyledImg
            src={images[0]}
            isLoading={isLoading}
            isPhone={isPhone}
          />
          <p id="link1" style={{ position: "relative", bottom: "5rem" }}></p>
          <h2>Introduction</h2>

          <p>
            Quest Plunge is a 2D Platformer Game built in C# using Unity. This
            is a fun little game consisting of six different levels with varying
            difficulty, mood, puzzles, and challenges. Quest Plunge revolves
            around the main character called Ethan The Hero.
          </p>

          <p>
            Join the quest to explore the world in Ethan's eyes and defeat the
            boss in the final level. I hope you enjoy it. Quest Plunge was
            originally created for a Computer Project in one of my engineering
            courses.
          </p>
          <Divider
            sx={{ backgroundColor: "var(--mui-palette-background-macos)" }}
          />

          <p id="link2" style={{ position: "relative", bottom: "5rem" }}></p>

          <h2>Download</h2>
          <p>
            Click the download button below to download the game directly. Quest
            Plunge is available for Windows only. It is not to be resold for any
            commercial purpose(s).
          </p>
          <HolderStyledImg
            src={images[1]}
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
              Quest Plunge has been downloaded {count} times.
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
                width: isPhone ? "min-content" : "100%",
                maxWidth: isPhone ? "unset" : "14rem",
                marginLeft: isPhone ? "0rem" : "0.5rem",
              }}
              size="medium"
              onClick={() => {
                updateCount(count + 1, "questplunge");
                downloadQuestPlunge();
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
                window.open(
                  "https://github.com/akashcraft/QuestPlunge",
                  "_blank",
                )
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

          <h2>Controls</h2>

          <p>
            You can control Ethan's movement using the arrow keys or WASD keys.
            Press Q to attack enemies.
          </p>
          <p>Press P to bring up the In-Game Pause Menu.</p>
          <HolderStyledImg
            src={images[3]}
            isLoading={isLoading}
            isPhone={isPhone}
          />
          <p>
            Watch your health using the six hearts on the top left. The game
            also features In-Game Coins to purchase Power-Ups which can be
            purchased instantly using the F1, F2, F3, F4 keys.
          </p>
          <HolderStyledImg
            src={images[4]}
            isLoading={isLoading}
            isPhone={isPhone}
            isEnd
          />

          <p id="link4" style={{ position: "relative", bottom: "5rem" }}></p>
          <h2>Levels</h2>
          <p>
            There are a total of six levels in Quest Plunge. Each level consists
            of unique challenges and puzzles. They are inspired from other
            popular and nostalgic games like Hill Climb Racing, Getting Over It
            with Bennett Foddy, Mario, Red Ball and Minecraft.
          </p>
          <HolderStyledImg
            src={images[2]}
            isWide
            isEnd
            isLoading={isLoading}
            isPhone={isPhone}
          />
          <p id="link5" style={{ position: "relative", bottom: "5rem" }}></p>

          <h2>Timeline</h2>

          <p>
            This project was completed over a period of 3 months with all
            document deliverables as required by the course outline. It is
            sometimes interesting to look back at your creation and retrospect.
            In my case, it all began with those YouTube Unity Tutorials and the
            mighty white block!
          </p>
          <HolderStyledVid
            src={videos[0]}
            isLoading={isLoading}
            isPhone={isPhone}
          />
        </Box>
      </Stack>
    </HolderBox>
  );
}

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
        <ListItemText primary="Controls" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding onClick={() => handler("link4")}>
      <ListItemButton>
        <ListItemText primary="Levels" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding onClick={() => handler("link5")}>
      <ListItemButton>
        <ListItemText primary="Timeline" />
      </ListItemButton>
    </ListItem>
  </List>
);

export default QuestPlunge;
