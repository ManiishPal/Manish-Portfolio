import {
  Box,
  Skeleton,
  styled,
  useColorScheme,
  useMediaQuery,
} from "@mui/material";
import img1 from "./assets/img-parallax/img1.png";
import img2 from "./assets/img-parallax/img2.png";
import img3 from "./assets/img-parallax/img3.png";
import img4 from "./assets/img-parallax/img4.png";
import img5 from "./assets/img-parallax/img5.png";
import winter1 from "./assets/img-parallax/winter1.png";
import winter2 from "./assets/img-parallax/winter2.png";
import winter3 from "./assets/img-parallax/winter3.png";
import winter4 from "./assets/img-parallax/winter4.png";
import winter5 from "./assets/img-parallax/winter5.png";
import snow from "./assets/img-parallax/snow.gif";
import fog from "./assets/img-parallax/fog.png";
import sun from "./assets/img-parallax/sun.svg";
import moon from "./assets/img-parallax/moon.svg";
import nightsky from "./assets/img-parallax/stars.jpg";
import { useGetImages } from "./manish-commons/Hooks";
import { motion } from "framer-motion";
import "./styles/Image.css";
import { ArrowCircleDownOutlined, SwipeUpOutlined } from "@mui/icons-material";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  fog,
  sun,
  moon,
  snow,
  nightsky,
  winter1,
  winter2,
  winter3,
  winter4,
  winter5,
];
export default function Background() {
  const isLoading = useGetImages(images);
  const isPhone = useMediaQuery("(max-width:600px)");
  const { mode } = useColorScheme();
  const isLight = mode === "light";

  const month = new Date().getMonth();
  const isWinter = month === 10 || month === 11 || month === 0 || month === 1;

  return (
    <>
      {isLoading && (
        <StyledSkeleton
          variant="rounded"
          height={isPhone ? "42rem" : "100dvh"}
        />
      )}
      <StyledBox
        className="Header"
        sx={{
          display: isLoading ? "none" : "block",
          height: isPhone ? "42rem" : "100dvh",
        }}
      >
        {isWinter && (
          <motion.div
            animate={{
              filter: isLight
                ? "brightness(1) blur(4px)"
                : "brightness(0.2) blur(4px)",
            }}
            transition={{ duration: 0.4 }}
            className="parallax-img"
            data-speed="20"
            style={{
              ...imgStyle,
              top: 0,
              backgroundImage: `url(${images[8]})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
              backgroundPosition: "center top",
              zIndex: -1,
            }}
          />
        )}
        <motion.img
          animate={{
            filter: isLight ? "brightness(1)" : "brightness(0.2)",
          }}
          transition={{ duration: 0.4 }}
          src={isWinter ? images[14] : images[4]}
          className="parallax-img"
          data-speed="20"
          style={{
            ...imgStyle,
            zIndex: 0,
            top: "10%",
          }}
        />
        {/* Down Arrow */}
        <motion.div
          animate={{ y: [0, 20, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "calc(50% - 2rem)",
            top: isPhone ? "88%" : "65%",
            color: isWinter ? "lightblue" : "var(--mui-palette-primary-main)",
            zIndex: 0,
          }}
        >
          {isPhone ? (
            <SwipeUpOutlined
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight - 50,
                  behavior: "smooth",
                });
              }}
              sx={{
                width: "4rem",
                fontSize: "2rem",
                "&:hover": { cursor: "pointer" },
              }}
            />
          ) : (
            <ArrowCircleDownOutlined
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight - 50,
                  behavior: "smooth",
                });
              }}
              sx={{
                width: "4rem",
                fontSize: "2rem",
                "&:hover": { cursor: "pointer" },
              }}
            />
          )}
        </motion.div>
        <StyledHead className="mainhead" sx={{ top: isPhone ? "60%" : "65%" }}>
          <NameStack style={{ scale: isPhone ? 1.25 : 1 }}>
            <NameText>Manish</NameText>
            <Reflection aria-hidden="true">Manish</Reflection>
          </NameStack>
        </StyledHead>
        <motion.img
          animate={{ filter: isLight ? "brightness(1)" : "brightness(0.2)" }}
          transition={{ duration: 0.4 }}
          src={isWinter ? images[13] : images[3]}
          className="parallax-img"
          data-speed="5"
          style={{
            ...imgStyle,
            zIndex: -2,
            top: isPhone ? "-4%" : "none",
          }}
        />
        <motion.img
          animate={{ filter: isLight ? "brightness(1)" : "brightness(0.2)" }}
          transition={{ duration: 0.4 }}
          src={isWinter ? images[12] : images[2]}
          className="parallax-img"
          data-speed="3"
          style={{
            ...imgStyle,
            zIndex: -3,
          }}
        />
        {/* Mountain */}
        <motion.img
          animate={{ filter: isLight ? "brightness(1)" : "brightness(0.2)" }}
          transition={{ duration: 0.4 }}
          src={isWinter ? images[11] : images[1]}
          className="parallax-img"
          data-speed="2"
          style={{
            ...imgStyle,
            zIndex: -3,
            display: isPhone || isWinter ? "none" : "block",
            top: "35%",
          }}
        />
        {/* Fog */}
        <motion.img
          animate={{
            opacity: isLight ? 0 : 1,
            x: ["100%", "-110%", "100%"],
          }}
          transition={{
            opacity: { duration: 0.4 },
            x: { duration: 60, repeat: Infinity, ease: "easeInOut" },
          }}
          src={images[5]}
          style={{
            ...imgStyle,
            objectFit: "contain",
            y: -300,
            filter: "brightness(0.15)",
            zIndex: -4,
          }}
        />
        {/* Sun and Moon */}
        <motion.img
          animate={{ y: isLight ? 0 : 1000, opacity: isLight ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          src={images[6]}
          style={{
            width: "8rem",
            zIndex: -4,
            position: "absolute",
            top: "4rem",
            left: isPhone ? "calc(50% - 4rem)" : "6rem",
          }}
        />
        <motion.img
          animate={{
            y: isLight ? 1000 : 0,
            opacity: isLight ? 0 : 1,
          }}
          transition={{ duration: 0.4 }}
          src={images[7]}
          style={{
            width: "8rem",
            zIndex: -4,
            position: "absolute",
            top: "4rem",
            right: isPhone ? "calc(50% - 4rem)" : "6rem",
          }}
        />
        {/* Sky */}
        <motion.img
          animate={{ opacity: isLight ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          src={isWinter ? images[10] : images[0]}
          className="parallax-img"
          data-speed="1"
          style={{
            ...imgStyle,
            zIndex: -5,
          }}
        />
        <StyledImg
          src={images[9]}
          className="parallax-img"
          data-speed="1"
          sx={{
            zIndex: -6,
          }}
        />
      </StyledBox>
    </>
  );
}

const imgStyle: React.CSSProperties = {
  position: "absolute",
  left: -20,
  right: 0,
  top: 0,
  bottom: 0,
  width: "110%",
  height: "100%",
  objectFit: "cover",
};

const StyledHead = styled("div")({
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: -1,
});

const NameStack = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  lineHeight: 0.9,
  transformOrigin: "center",
  userSelect: "none",
});

const NameText = styled("div")({
  fontFamily: '"Brush Script MT", "Segoe Script", "Snell Roundhand", cursive',
  fontSize: "clamp(5rem, 12vw, 11rem)",
  fontWeight: 700,
  fontStyle: "italic",
  letterSpacing: "0.02em",
  background: "linear-gradient(180deg, #ff4fb4 0%, #ff87db 45%, #fff6fb 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "0 10px 28px rgba(255, 71, 171, 0.25)",
});

const Reflection = styled("div")({
  marginTop: "-0.12em",
  fontFamily: '"Brush Script MT", "Segoe Script", "Snell Roundhand", cursive',
  fontSize: "clamp(5rem, 12vw, 11rem)",
  fontWeight: 700,
  fontStyle: "italic",
  letterSpacing: "0.02em",
  background:
    "linear-gradient(180deg, rgba(255, 246, 251, 0.95) 0%, rgba(255, 135, 219, 0.65) 58%, rgba(255, 79, 180, 0.18) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transform: "scaleY(-1)",
  opacity: 0.6,
  filter: "blur(0.6px)",
  maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.55), transparent)",
  WebkitMaskImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.55), transparent)",
});

const StyledImg = styled("img")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const StyledBox = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "120rem",
  overflow: "hidden",
  maxHeight: "68rem",
  margin: "0 auto",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent, black 0%, black 90%, transparent)",
  WebkitMaskComposite: "intersect",
  maskImage:
    "linear-gradient(to bottom, transparent, black 0%, black 90%, transparent)",
  maskComposite: "intersect",
});

const StyledSkeleton = styled(Skeleton)({
  borderRadius: "1rem",
  margin: "0 auto",
  width: "100%",
  maxWidth: "120rem",
  overflow: "hidden",
  maxHeight: "68rem",
});
