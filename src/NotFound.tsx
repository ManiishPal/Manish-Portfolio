import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import HolderBox from "./akash-commons/HolderBox";
import error from "./assets/img-commons/error.png";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export function NotFound() {
  // Media Query
  const isPhone = useMediaQuery("(min-width:800px)");
  return (
    <HolderBox>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "4rem" }}
        gap={isPhone ? 2 : 1}
      >
        <motion.img
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          src={error}
          alt="Error"
          style={{
            width: isPhone ? "15rem" : "50%",
            maxWidth: "15rem",
            marginBottom: "2rem",
          }}
        />
        <Typography
          variant="h4"
          sx={{ color: "white !important" }}
          gutterBottom
        >
          Page Not Found
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{
            color: "white !important",
          }}
        >
          The page you are looking for does not exist
        </Typography>
        <br />
        <StyledButton variant="contained" href="/">
          BACK TO HOME
        </StyledButton>
      </Stack>
    </HolderBox>
  );
}

const StyledButton = styled(Button)({
  marginTop: "1rem",
  borderRadius: "1rem",
  padding: "0.5rem 1rem",
  color: "white",
  backgroundColor: "#df742d",
});
