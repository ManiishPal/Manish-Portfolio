import "./../styles/App.css";
import HolderBox from "../manish-commons/HolderBox";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Portal,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { SidePaper } from "../manish-commons/SidePaper";
import { headerContainer } from "../manish-commons/Header";

export function Policy() {
  // Media Query
  const isPhone = useMediaQuery("(min-width:600px)");

  function handleScrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <HolderBox isWide>
      <title>Legal</title>
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
          <p id="link1" style={{ position: "relative", bottom: "5rem" }}></p>
          <h2>Terms of Service</h2>
          <p>
            <b>
              By using this portfolio website, you agree to the following terms:
            </b>
          </p>
          <ul>
            <li>
              This website is a personal portfolio created by <b>Manish Pal</b>
              to showcase projects, skills, education, experience, and
              professional work.
            </li>
            <li>
              You may view and use the publicly available content for personal,
              educational, and professional reference purposes.
            </li>
            <li>
              You may not use the website for unlawful activities, malicious
              purposes, unauthorized access, or attempts to compromise its
              security.
            </li>
            <li>
              Project source code and other materials may be subject to their
              respective licenses. You must follow the applicable license before
              copying, modifying, or redistributing them.
            </li>
            <li>
              Links to third-party websites, repositories, services, and project
              demonstrations are provided for convenience. Manish Pal is not
              responsible for their content, availability, security, or privacy
              practices.
            </li>
            <li>
              Project demonstrations and technical information are provided for
              informational purposes and may change, become unavailable, or
              contain limitations.
            </li>
            <li>
              Manish Pal reserves the right to modify, update, suspend, or
              remove any part of this website without prior notice.
            </li>
          </ul>
          <p>
            <b>Liability:</b> This website is provided "as is" and "as
            available." Manish Pal is not responsible for losses or damages
            resulting from reliance on the information provided, temporary
            unavailability of the website, technical issues, or third-party
            services, to the extent permitted by applicable law.
          </p>
          <p>
            <b>Contact:</b> If you have any questions regarding these terms,
            please contact me at <b>manish8872pal@gmail.com</b>.
          </p>

          <Divider
            sx={{
              backgroundColor: "var(--mui-palette-background-macos)",
              my: 4,
            }}
          />

          <p id="link2" style={{ position: "relative", bottom: "5rem" }}></p>
          <h2>Privacy Policy</h2>
          <p>
            <b>
              Your privacy is important to me. Information submitted through
              this portfolio is handled according to the following principles:
            </b>
          </p>
          <ul>
            <li>
              Information submitted through the <b>Contact Me</b> form may
              include your name, email address, and message.
            </li>
            <li>
              The information you provide is used primarily to respond to your
              inquiry, professional opportunity, collaboration request, or other
              message you submit.
            </li>
            <li>
              I do not sell your personal information or use information
              submitted through the contact form for advertising purposes.
            </li>
            <li>
              Your information may be processed or stored by third-party
              services used to operate the website, such as hosting,
              form-processing, email, database, or other services connected to
              the portfolio.
            </li>
            <li>
              I take reasonable measures to protect information submitted
              through the website, but no internet-based system can guarantee
              complete security.
            </li>
            <li>
              You should not submit passwords, financial information, government
              identification numbers, or other highly sensitive information
              through the Contact Me form.
            </li>
            <li>
              Information may be retained for as long as reasonably necessary to
              respond to inquiries, maintain relevant communication, or comply
              with applicable legal requirements.
            </li>
            <li>
              You may contact me to request information about, correction of, or
              deletion of personal information you have submitted, subject to
              applicable law and verification requirements.
            </li>
            <li>
              This website may contain links to third-party websites such as
              GitHub, LinkedIn, and project demonstrations. Their privacy
              practices are governed by their own policies.
            </li>
          </ul>

          <p>
            <b>User Control &amp; Deletion:</b> If you have submitted
            information through the Contact Me form and would like to request
            its correction or deletion, contact me at{" "}
            <b>manish8872pal@gmail.com</b>.
          </p>

          <p>
            <b>Contact:</b> If you have questions about this Privacy Policy or
            how your information is handled, please contact me at{" "}
            <b>manish8872pal@gmail.com</b>.
          </p>
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
        <ListItemText primary="Terms of Service" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding onClick={() => handler("link2")}>
      <ListItemButton>
        <ListItemText primary="Privacy Policy" />
      </ListItemButton>
    </ListItem>
  </List>
);
