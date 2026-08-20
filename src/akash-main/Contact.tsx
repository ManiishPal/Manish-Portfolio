import {
  Box,
  Button,
  Stack,
  styled,
  Tooltip,
  tooltipClasses,
  useColorScheme,
  useMediaQuery,
  type TooltipProps,
} from "@mui/material";
import mail from "../assets/img-contact/Mail.mp4";
import mailDark from "../assets/img-contact/MailDark.mp4";
import loading from "../assets/img-contact/Loading.mp4";
import loadingDark from "../assets/img-contact/LoadingDark.mp4";
import error from "../assets/img-commons/error.png";
import errorSound from "../assets/img-contact/error.mp3";
import successSound from "../assets/img-contact/success.mp3";
import { motion } from "framer-motion";
import {
  CheckCircleOutlineOutlined,
  Close,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { openGitHub, openLinkedIn } from "../akash-commons/Utils";
import { useNavigate } from "react-router";
import { useContactSubmit } from "../akash-commons/firebaseHooks";
import { ContactWavesDark, ContactWavesLight } from "./ContactWaves";

const sanitize = (value: string): string => {
  return value
    .trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/`/g, "&#96;");
};

function Contact() {
  const { mode } = useColorScheme();
  const isLight = mode === "light";
  const navigate = useNavigate();
  const isPhone = useMediaQuery("(max-width:1000px)");

  const handleSubmit = () => {
    const nameInput = document.querySelector(
      'input[name="name"]',
    ) as HTMLInputElement | null;

    const emailInput = document.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement | null;

    const messageInput = document.querySelector(
      'textarea[name="message"]',
    ) as HTMLTextAreaElement | null;

    const data = {
      name: sanitize(nameInput?.value ?? ""),
      email: sanitize(emailInput?.value ?? ""),
      message: sanitize(messageInput?.value ?? ""),
    };

    submitContactForm(data);
  };

  const { isSubmitting, isError, isSuccess, errorMessage, submitContactForm } =
    useContactSubmit();

  return (
    <>
      <Box
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100dvw",
          height: "100dvh",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        {isLight ? <ContactWavesLight /> : <ContactWavesDark />}
      </Box>
      <CenterBox
        flexDirection={isPhone ? "column" : "row"}
        sx={{
          height: isPhone ? "auto" : "90vh",
          padding: isPhone ? "2rem 1rem" : "0",
          margin: isPhone ? "1rem auto" : "none",
          transition: "opacity 0.25s ease-in-out",
        }}
      >
        {isError && (
          <audio autoPlay>
            <source src={errorSound} type="audio/mpeg" />
          </audio>
        )}
        {isSuccess && (
          <audio autoPlay>
            <source src={successSound} type="audio/mpeg" />
          </audio>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {!(isSubmitting || isPhone) && (
          <StyledTooltip title="Close" placement="top">
            <CircularButton
              variant="text"
              onClick={() => {
                sessionStorage.removeItem("name");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("message");
                sessionStorage.setItem("homeScroll", "0");
                navigate("/");
              }}
              sx={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                scale: isPhone ? 0.8 : 1,
                color: "red",
              }}
            >
              <Close />
            </CircularButton>
          </StyledTooltip>
        )}
        <Stack
          width={isPhone ? "100%" : "50%"}
          justifyContent="center"
          alignItems="center"
        >
          {!(isSubmitting || isSuccess || isError) && (
            <video
              src={isLight ? mail : mailDark}
              autoPlay
              muted
              playsInline
              style={{ width: isPhone ? "70%" : "30rem", maxWidth: "30rem" }}
            />
          )}
          {isSubmitting && (
            <video
              src={isLight ? loading : loadingDark}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: isPhone ? "50%" : "15rem", maxWidth: "15rem" }}
            />
          )}
          {isSuccess && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CheckCircleOutlineOutlined
                sx={{
                  color: "var(--mui-palette-success-main)",
                  fontSize: isPhone ? "6rem" : "10rem",
                  marginBottom: "2rem",
                }}
              />
            </motion.div>
          )}
          {isError && (
            <motion.img
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              src={error}
              alt="Error"
              style={{
                width: isPhone ? "50%" : "15rem",
                maxWidth: "15rem",
                marginBottom: "2rem",
              }}
            />
          )}
        </Stack>
        <Stack
          width={isPhone ? "100%" : "50%"}
          justifyContent="center"
          spacing={2}
          margin="auto"
        >
          <motion.div
            key={
              isSubmitting
                ? "submitting"
                : isError
                  ? "error"
                  : isSuccess
                    ? "success"
                    : "form"
            }
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.05, 0.8, 0.35, 0.99],
            }}
          >
            <h1
              style={{
                fontSize: isPhone ? "1.5rem" : "2rem",
                margin: "0rem",
              }}
            >
              {isSubmitting
                ? "Submitting your message"
                : isError
                  ? "Something went wrong"
                  : isSuccess
                    ? "Message sent successfully"
                    : "Let's get you connected"}
            </h1>
            <p>
              {isError
                ? errorMessage ?? "But you can try again"
                : isSuccess
                  ? "Thank you for reaching out!"
                  : isSubmitting
                    ? "Hang tight!"
                    : "If you have a question or just want to say hi, feel free to reach out!"}
            </p>
            {!(isSubmitting || isSuccess || isError) && (
              <form
                id="contact-form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  maxWidth: "30rem",
                  fontSize: isPhone ? "smaller" : "1rem",
                }}
              >
                <Stack
                  flexDirection={isPhone ? "column" : "row"}
                  alignContent="center"
                  gap={2}
                  mt={1}
                >
                  <StyledHolder>
                    <p>Enter your name</p>
                    <StyledInput
                      required
                      onChange={(e) => {
                        sessionStorage.setItem("name", e.target.value);
                      }}
                      type="text"
                      name="name"
                      placeholder="Name"
                      defaultValue={sessionStorage.getItem("name") ?? ""}
                    />
                  </StyledHolder>
                  <StyledHolder>
                    <p>Enter your email</p>
                    <StyledInput
                      required
                      onChange={(e) => {
                        sessionStorage.setItem("email", e.target.value);
                      }}
                      type="email"
                      name="email"
                      placeholder="Email"
                      defaultValue={sessionStorage.getItem("email") ?? ""}
                    />
                  </StyledHolder>
                </Stack>
                <StyledHolder>
                  <p>Enter your message</p>
                  <StyledTextarea
                    required
                    onChange={(e) => {
                      sessionStorage.setItem("message", e.target.value);
                    }}
                    name="message"
                    placeholder="Message"
                    defaultValue={sessionStorage.getItem("message") ?? ""}
                  ></StyledTextarea>
                </StyledHolder>
              </form>
            )}
            {!(isPhone || isSubmitting) && <br />}
            {!isSubmitting && (
              <>
                <p>More ways to connect</p>
                <Stack direction="row" spacing={2}>
                  <StyledTooltip title="GitHub" placement="bottom">
                    <CircularButton variant="outlined" onClick={openGitHub}>
                      <GitHub />
                    </CircularButton>
                  </StyledTooltip>
                  <StyledTooltip title="LinkedIn" placement="bottom">
                    <CircularButton variant="outlined" onClick={openLinkedIn}>
                      <LinkedIn />
                    </CircularButton>
                  </StyledTooltip>
                </Stack>
              </>
            )}
          </motion.div>
          <SubmitStack
            sx={{ position: isPhone ? "block" : "absolute" }}
            justifyContent={
              !isPhone
                ? "flex-start"
                : isSubmitting || isSuccess || isError
                  ? "flex-end"
                  : "space-between"
            }
          >
            {!(isSuccess || isSubmitting) && (
              <SubmitButton
                variant="text"
                onClick={() => {
                  if (isError) {
                    window.location.reload();
                  } else {
                    sessionStorage.removeItem("name");
                    sessionStorage.removeItem("email");
                    sessionStorage.removeItem("message");
                    sessionStorage.setItem("homeScroll", "0");
                    navigate("/");
                  }
                }}
                sx={{
                  color: "var(--mui-palette-primary-main)",
                }}
              >
                {isError ? "Try Again" : "Cancel"}
              </SubmitButton>
            )}
            <SubmitButton
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                if (isSuccess || isError) {
                  sessionStorage.removeItem("name");
                  sessionStorage.removeItem("email");
                  sessionStorage.removeItem("message");
                  sessionStorage.setItem("homeScroll", "0");
                  navigate("/");
                } else {
                  const form = document.getElementById(
                    "contact-form",
                  ) as HTMLFormElement | null;
                  if (form?.checkValidity()) {
                    handleSubmit();
                  } else {
                    form?.reportValidity();
                  }
                }
              }}
              sx={{
                color: "var(--mui-palette-text-primary)",
                justifySelf: "flex-end",
                minWidth: "8rem",
              }}
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {isSuccess || isError ? "Finish" : "Send Message"}
            </SubmitButton>
          </SubmitStack>
        </Stack>
      </CenterBox>
    </>
  );
}

export default Contact;

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--mui-palette-background-macosfinder)",
    borderRadius: "1rem",
    fontSize: "0.85rem",
    color: "var(--mui-palette-text-secondary)",
    fontFamily: "Segoe UI",
  },
}));

const SubmitButton = styled(Button)({
  fontFamily: "Segoe UI",
  textTransform: "none",
  fontSize: "1rem",
});

const SubmitStack = styled(Stack)({
  flexDirection: "row",
  bottom: "2rem",
  right: "2rem",
  gap: "1rem",
});

const CircularButton = styled(Button)({
  borderRadius: "50%",
  width: "3rem",
  height: "3rem",
  minWidth: "3rem",
  padding: "0",
});

const StyledHolder = styled(Stack)({
  gap: "0.4rem",
  flexGrow: 1,
  flexDirection: "column",
  p: {
    margin: "0",
  },
});

const StyledInput = styled("input")({
  padding: "0.5rem",
  borderRadius: "0.25rem",
  border: "none",
  fontFamily: "Segoe UI",
  fontSize: "1rem",
  height: "2.5rem",
  backgroundColor: "var(--mui-palette-background-macosfinder)",
  color: "var(--mui-palette-text-secondary)",
  "&:active, &:focus": {
    outline: "none",
    borderBottom: "2px solid var(--mui-palette-primary-main)",
  },
  "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus": {
    WebkitBoxShadow:
      "0 0 0px 1000px var(--mui-palette-background-macosfinder) inset !important",
    boxShadow:
      "0 0 0px 1000px var(--mui-palette-background-macosfinder) inset !important",
    WebkitTextFillColor: "var(--mui-palette-text-secondary) !important",
  },
});

const StyledTextarea = styled("textarea")({
  padding: "0.5rem",
  borderRadius: "0.25rem",
  border: "none",
  fontFamily: "Segoe UI",
  fontSize: "1rem",
  backgroundColor: "var(--mui-palette-background-macosfinder)",
  color: "var(--mui-palette-text-secondary)",
  resize: "none",
  height: "8rem",
  "&:active, &:focus": {
    outline: "none",
    borderBottom: "2px solid var(--mui-palette-primary-main)",
  },
  "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus": {
    WebkitBoxShadow:
      "0 0 0px 1000px var(--mui-palette-background-macosfinder) inset !important",
    boxShadow:
      "0 0 0px 1000px var(--mui-palette-background-macosfinder) inset !important",
    WebkitTextFillColor: "var(--mui-palette-text-secondary) !important",
  },
});

const CenterBox = styled(Stack)({
  position: "relative",
  width: "90%",
  margin: "auto",
  fontFamily: "Segoe UI",
  backgroundColor: "var(--mui-palette-background-macosfinder2)",
  color: "var(--mui-palette-text-secondary)",
  borderRadius: "0.5rem",
  overflow: "hidden",
});
