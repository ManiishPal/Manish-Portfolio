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
  webData,
  categoryFiltersMap,
  images,
  type CategoryKey,
  type SubFilterType,
} from "./webData";
import { useEffect, useState } from "react";
import { Check, FilterAlt } from "@mui/icons-material";
import { useGetImages } from "../akash-commons/Hooks";
import WebCard from "./WebCard";
import { useLocation } from "react-router-dom";

export function Application() {
  const isPhone = useMediaQuery("(min-width:800px)");
  const isLoading = useGetImages(images);
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const filterOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCategoryKey = (pathname: string): CategoryKey => {
    if (pathname.includes("software-engineering")) return "software-engineering";
    if (pathname.includes("specialized-skills")) return "specialized-skills";
    return "ai-data-science-cloud";
  };

  const categoryKey = getCategoryKey(location.pathname);
  const activeFilters = categoryFiltersMap[categoryKey];
  const categoryData = webData.filter((item) => item.category === categoryKey);

  // Selected sub-filters state for the active collection
  const [selectedTypes, setSelectedTypes] = useState<SubFilterType[]>(activeFilters);

  // When category route changes, reset sub-filters to 'All' for that category
  useEffect(() => {
    setSelectedTypes(activeFilters);
  }, [categoryKey]);

  const isAllSelected = selectedTypes.length === activeFilters.length;

  const handleSubFilterClick = (type: SubFilterType) => {
    if (isAllSelected) {
      setSelectedTypes([type]);
    } else if (selectedTypes.includes(type)) {
      if (selectedTypes.length === 1) {
        setSelectedTypes(activeFilters);
      } else {
        setSelectedTypes(selectedTypes.filter((t) => t !== type));
      }
    } else {
      const next = [...selectedTypes, type];
      if (next.length === activeFilters.length) {
        setSelectedTypes(activeFilters);
      } else {
        setSelectedTypes(next);
      }
    }
  };

  const handleSelectAll = () => {
    setSelectedTypes(activeFilters);
  };

  const filteredData = categoryData.filter((item) =>
    selectedTypes.includes(item.subType),
  );

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
            title="Filters"
            icon={<FilterAlt />}
            elevation={3}
            style={{
              width: "15rem",
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
                    backgroundColor: isAllSelected
                      ? "var(--mui-palette-background-light)"
                      : "none",
                  }}
                  onClick={handleSelectAll}
                >
                  <ListItemText primary="All" />
                  {isAllSelected && <Check />}
                </StyledListItemButton>
              </ListItem>
              {activeFilters.map((type, index) => (
                <ListItem key={index} disablePadding>
                  <StyledListItemButton
                    sx={{
                      backgroundColor:
                        selectedTypes.includes(type) && !isAllSelected
                          ? "var(--mui-palette-background-light)"
                          : "none",
                    }}
                    onClick={() => handleSubFilterClick(type)}
                  >
                    <ListItemText primary={type} />
                    {selectedTypes.includes(type) && !isAllSelected && (
                      <Check />
                    )}
                  </StyledListItemButton>
                </ListItem>
              ))}
            </List>
          </SidePaper>
        )}
        <Box>
          {!isPhone && (
            <Stack gap={1} direction="row" flexWrap="wrap" mt={2} mb={3}>
              <Chip
                sx={{ padding: "0.5rem" }}
                icon={<FilterAlt sx={{ color: "white !important" }} />}
                label="Add Filter"
                onClick={handleClick}
              />
              <Menu
                anchorEl={anchorEl}
                open={filterOpen}
                onClose={handleClose}
                sx={{
                  marginTop: "0.1rem",
                  marginLeft: "0.25rem",
                }}
              >
                {activeFilters.map((type, index) => (
                  <MenuItem
                    key={index}
                    value={type}
                    onClick={() => {
                      handleSubFilterClick(type);
                      handleClose();
                    }}
                  >
                    {type}
                  </MenuItem>
                ))}
              </Menu>
              {!isAllSelected && (
                <>
                  <Chip
                    sx={{ padding: "0.5rem" }}
                    onDelete={handleSelectAll}
                    label="Clear All"
                    onClick={handleClick}
                  />
                  {selectedTypes.map((type, index) => (
                    <Chip
                      key={index}
                      sx={{ padding: "0.5rem" }}
                      label={type}
                      onDelete={() => handleSubFilterClick(type)}
                    />
                  ))}
                </>
              )}
            </Stack>
          )}
          <Stack
            sx={{ flexGrow: 1 }}
            direction={!isPhone ? "column" : "row"}
            width="100%"
            flexWrap={!isPhone ? "nowrap" : "wrap"}
            gap={!isPhone ? "0rem" : "1.5rem"}
          >
            {filteredData.map((item, index) => (
              <WebCard
                key={index}
                data={item}
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

export default Application;
