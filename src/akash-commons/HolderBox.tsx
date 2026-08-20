import "./../styles/App.css";
import Header from "../akash-commons/Header";
import { Box, useMediaQuery } from "@mui/material";
import Footer from "../akash-commons/Footer";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

type HolderBoxProps = {
  children?: React.ReactNode;
  isWide?: boolean;
  disablePadding?: boolean;
  disableAnimation?: boolean;
  disableFooter?: boolean;
};

function HolderBox({
  children,
  isWide = false,
  disablePadding = false,
  disableAnimation = false,
  disableFooter = false,
}: HolderBoxProps) {
  // Media Query
  const isPhone = useMediaQuery("(min-width:800px)");
  const isMid = useMediaQuery("(min-width:1000px)");
  const isLarge = useMediaQuery("(min-width:1200px)");
  sessionStorage.setItem("hintShown", "true");

  let padding: string;
  if (isWide) {
    padding = isLarge
      ? "2rem 10%"
      : isMid
        ? "2rem 5%"
        : isPhone
          ? "2rem 4%"
          : "1.5rem 1rem";
  } else {
    padding = isLarge
      ? "2rem 20%"
      : isMid
        ? "2rem 15%"
        : isPhone
          ? "2rem 8%"
          : "1.5rem 1rem";
  }

  return (
    <>
      <Header />
      <StyledBox sx={{ padding: disablePadding ? "2rem 0.5rem" : padding }}>
        {!disableAnimation ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.05, 0.8, 0.35, 0.99],
            }}
          >
            {children}
          </motion.div>
        ) : (
          <>{children}</>
        )}
      </StyledBox>
      {!disableFooter && <Footer />}
    </>
  );
}

const StyledBox = styled(Box)({
  width: "100dvw",
  minHeight: "calc(100dvh - 6rem)",
  marginTop: "3rem",
  textAlign: "left",
});

export default HolderBox;
