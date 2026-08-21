import "./../styles/App.css";
import HolderBox from "../akash-commons/HolderBox";
import {
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  MenuItem,
  Menu,
  Chip,
} from "@mui/material";
import { SidePaper } from "../akash-commons/SidePaper";
import { useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import {
  certificationsData,
  CertificationTypeFilters,
  certificationImages,
} from "./certificationsData";
import { useState, useMemo } from "react";
import { Check, FilterAlt } from "@mui/icons-material";
import { useGetImages } from "../akash-commons/Hooks";
import WebCard from "../akash-app/WebCard";
import { useParams } from "react-router-dom";

export function Certifications() {
  const { category: paramCategory } = useParams();
  const isPhone = useMediaQuery("(min-width:800px)");
  const isLoading = useGetImages(certificationImages);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const filterOpen = Boolean(anchorEl);

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === "All") return certificationsData;
    return certificationsData.filter(
      (cert) => cert.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <HolderBox isWide>
      <Stack
        direction={isPhone ? "row" : "column"}
        alignItems={isPhone ? "flex-start" : "center"}
        mt={1}
        gap={isPhone ? 3.5 : 0}
      >
        {isPhone && (
          <SidePaper
            title="Category Filters"
            icon={<FilterAlt />}
            elevation={3}
            style={{
              width: "16rem",
              height: "min-content",
              top: "5.5rem",
              margin: "0rem",
              flexShrink: 0,
              boxSizing: "border-box",
              position: "sticky",
            }}
          >
            <List sx={{ marginTop: "0.5rem", paddingBottom: "0" }}>
              <ListItem disablePadding>
                <StyledListItemButton
                  sx={{
                    backgroundColor:
                      selectedCategory === "All"
                        ? "var(--mui-palette-background-light)"
                        : "none",
                  }}
                  onClick={() => setSelectedCategory("All")}
                >
                  <ListItemText primary="All Certifications" />
                  {selectedCategory === "All" && <Check />}
                </StyledListItemButton>
              </ListItem>
              {CertificationTypeFilters.map((cat, index) => (
                <ListItem key={index} disablePadding>
                  <StyledListItemButton
                    sx={{
                      backgroundColor:
                        selectedCategory === cat
                          ? "var(--mui-palette-background-light)"
                          : "none",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <ListItemText primary={cat} />
                    {selectedCategory === cat && <Check />}
                  </StyledListItemButton>
                </ListItem>
              ))}
            </List>
          </SidePaper>
        )}
        <Box sx={{ width: "100%" }}>
          {!isPhone && (
            <Stack gap={1} direction="row" flexWrap="wrap" mt={2} mb={3}>
              <Chip
                sx={{ padding: "0.5rem" }}
                icon={<FilterAlt sx={{ color: "white !important" }} />}
                label="Filter Category"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              />
              <Menu
                anchorEl={anchorEl}
                open={filterOpen}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem
                  onClick={() => {
                    setSelectedCategory("All");
                    setAnchorEl(null);
                  }}
                >
                  All Certifications
                </MenuItem>
                {CertificationTypeFilters.map((cat, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setAnchorEl(null);
                    }}
                  >
                    {cat}
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          )}
          <Stack
            sx={{ flexGrow: 1 }}
            direction={!isPhone ? "column" : "row"}
            width="100%"
            flexWrap={!isPhone ? "nowrap" : "wrap"}
            gap={!isPhone ? "0rem" : "1.5rem"}
          >
            {filteredCertifications.map((item, index) => (
              <WebCard
                key={index}
                data={item as any}
                isLoading={isLoading}
                isPhone={isPhone}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </HolderBox>
  );
}

const StyledListItemButton = styled(ListItemButton)({
  cursor: "pointer",
  borderRadius: "1rem",
  margin: "0.25rem 0",
});

export default Certifications;
