import "./../styles/App.css";
import HolderBox from "../manish-commons/HolderBox";
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
import { SidePaper } from "../manish-commons/SidePaper";
import { useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import {
  aimlData,
  AimlTypeFilters,
  images,
  type AimlDataType,
  type AimlFilterType,
} from "./aimlData";
import { useState } from "react";
import { Check, FilterAlt } from "@mui/icons-material";
import { useGetImages } from "../manish-commons/Hooks";
import AimlCard from "./AimlCard";

export function Aiml() {
  const isPhone = useMediaQuery("(min-width:800px)");
  const isLoading = useGetImages(images);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const filterOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedTypes, setSelectedTypes] =
    useState<AimlFilterType[]>(AimlTypeFilters);

  const isAllSelected = selectedTypes.length === AimlTypeFilters.length;

  const handleSubFilterClick = (type: AimlFilterType) => {
    if (isAllSelected) {
      setSelectedTypes([type]);
    } else if (selectedTypes.includes(type)) {
      if (selectedTypes.length === 1) {
        setSelectedTypes(AimlTypeFilters);
      } else {
        setSelectedTypes(selectedTypes.filter((t) => t !== type));
      }
    } else {
      const next = [...selectedTypes, type];
      if (next.length === AimlTypeFilters.length) {
        setSelectedTypes(AimlTypeFilters);
      } else {
        setSelectedTypes(next);
      }
    }
  };

  const handleSelectAll = () => {
    setSelectedTypes(AimlTypeFilters);
  };

  const filteredData = aimlData.filter((item) =>
    selectedTypes.includes(item.type),
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
              {AimlTypeFilters.map((type, index) => (
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
                {AimlTypeFilters.map((type, index) => (
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
              <AimlCard
                key={index}
                data={item as AimlDataType}
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

export default Aiml;
