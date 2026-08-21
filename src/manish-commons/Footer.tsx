import styled from "@emotion/styled";
import { Box, Chip, Stack, useMediaQuery } from "@mui/material";
import { CopyrightOutlined, PolicyOutlined } from "@mui/icons-material";
import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  function dateYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  const navigate = useNavigate();
  const isPhone = useMediaQuery("(max-width:800px)");

  return (
    <>
      <Box height={isPhone ? 40 : 150} />
      <Box
        style={{
          position: "relative",
          width: "100%",
          height: isPhone ? 50 : 0,
          backgroundColor: "#c62368",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{
            left: "50%",
            transform: "translateX(-50%)",
            position: "absolute",
            bottom: isPhone ? "1rem" : "-2.5rem",
          }}
        >
          <StyledChip
            variant="filled"
            icon={<CopyrightOutlined sx={{ color: "white !important" }} />}
            label={`Copyright ${dateYear()} ManishPal`}
          />
          <StyledChip
            variant="filled"
            icon={<PolicyOutlined sx={{ color: "white !important" }} />}
            onClick={() => {
              navigate("/legal");
            }}
            label={
              <a
                href="#/legal"
                style={{ color: "white", textDecoration: "none" }}
              >
                Legal
              </a>
            }
          />
        </Stack>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            zIndex: -1,
            bottom: isPhone ? "3rem" : "-4rem",
          }}
        >
          <FooterWave />
        </Box>
      </Box>
    </>
  );
}

function FooterWave() {
  return (
    <svg
      id="visual"
      viewBox="0 0 960 540"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", position: "absolute", bottom: 0 }}
    >
      <path
        className="wave wave1"
        d="M0 390L10.7 390.2C21.3 390.3 42.7 390.7 64 392C85.3 393.3 106.7 395.7 128 395C149.3 394.3 170.7 390.7 192 389.3C213.3 388 234.7 389 256 388.5C277.3 388 298.7 386 320 386.2C341.3 386.3 362.7 388.7 384 392.3C405.3 396 426.7 401 448 401.7C469.3 402.3 490.7 398.7 512 395.2C533.3 391.7 554.7 388.3 576 387C597.3 385.7 618.7 386.3 640 389.5C661.3 392.7 682.7 398.3 704 400.7C725.3 403 746.7 402 768 401.8C789.3 401.7 810.7 402.3 832 402.3C853.3 402.3 874.7 401.7 896 399.7C917.3 397.7 938.7 394.3 949.3 392.7L960 391L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z"
        fill="#d25769"
      ></path>
      <path
        className="wave wave2"
        d="M0 445L10.7 445.2C21.3 445.3 42.7 445.7 64 444C85.3 442.3 106.7 438.7 128 438.3C149.3 438 170.7 441 192 440.8C213.3 440.7 234.7 437.3 256 435.7C277.3 434 298.7 434 320 433.7C341.3 433.3 362.7 432.7 384 432.3C405.3 432 426.7 432 448 431.7C469.3 431.3 490.7 430.7 512 432.7C533.3 434.7 554.7 439.3 576 440C597.3 440.7 618.7 437.3 640 436.3C661.3 435.3 682.7 436.7 704 438.2C725.3 439.7 746.7 441.3 768 440.7C789.3 440 810.7 437 832 436.8C853.3 436.7 874.7 439.3 896 438.5C917.3 437.7 938.7 433.3 949.3 431.2L960 429L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z"
        fill="#cd4067"
      ></path>
      <path
        className="wave wave3"
        d="M0 480L10.7 480C21.3 480 42.7 480 64 479.3C85.3 478.7 106.7 477.3 128 478.2C149.3 479 170.7 482 192 481.7C213.3 481.3 234.7 477.7 256 479.5C277.3 481.3 298.7 488.7 320 489.8C341.3 491 362.7 486 384 485C405.3 484 426.7 487 448 487.5C469.3 488 490.7 486 512 486.7C533.3 487.3 554.7 490.7 576 491.3C597.3 492 618.7 490 640 487.8C661.3 485.7 682.7 483.3 704 482.2C725.3 481 746.7 481 768 482.5C789.3 484 810.7 487 832 488.2C853.3 489.3 874.7 488.7 896 486.7C917.3 484.7 938.7 481.3 949.3 479.7L960 478L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z"
        fill="#c62368"
      ></path>
    </svg>
  );
}

const StyledChip = styled(Chip)({
  color: "white",
  justifyContent: "center",
  borderRadius: "1.5rem",
  fontSize: "1rem",
  zIndex: 0,
});

export default Footer;
