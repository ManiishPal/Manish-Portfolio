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
  WebTypeFilters,
  images,
  type WebDataType,
  type WebFilterType,
} from "./webData";
import { useReducer, useState } from "react";
import { reducerFilter } from "./WebHook";
import { Check, FilterAlt } from "@mui/icons-material";
import { useGetImages } from "../akash-commons/Hooks";
import WebCard from "./WebCard";

function Web() {
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

  const [filterState, dispatchFilteredData] = useReducer(reducerFilter, {
    selectedTypes: WebTypeFilters,
    filteredData: webData as WebDataType[],
    isAllSelected: true,
  });

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
                    backgroundColor: filterState.isAllSelected
                      ? "var(--mui-palette-background-light)"
                      : "none",
                  }}
                  onClick={() => {
                    dispatchFilteredData({
                      type: "RESET",
                      payload: "" as WebFilterType,
                    });
                  }}
                >
                  <ListItemText primary="All" />
                  {filterState.isAllSelected && <Check />}
                </StyledListItemButton>
              </ListItem>
              {WebTypeFilters.map((type, index) => (
                <ListItem key={index} disablePadding onClick={() => {}}>
                  <StyledListItemButton
                    sx={{
                      backgroundColor:
                        filterState.selectedTypes.includes(type) &&
                        !filterState.isAllSelected
                          ? "var(--mui-palette-background-light)"
                          : "none",
                    }}
                    onClick={() => {
                      if (filterState.selectedTypes.includes(type)) {
                        dispatchFilteredData({
                          type: "REMOVE_TYPE",
                          payload: type as WebFilterType,
                        });
                      } else {
                        dispatchFilteredData({
                          type: "ADD_TYPE",
                          payload: type as WebFilterType,
                        });
                      }
                    }}
                  >
                    <ListItemText primary={type} />
                    {filterState.selectedTypes.includes(type) &&
                      !filterState.isAllSelected && <Check />}
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
                {WebTypeFilters.map((type, index) => (
                  <MenuItem
                    key={index}
                    value={type}
                    onClick={() => {
                      if (filterState.selectedTypes.includes(type)) {
                        dispatchFilteredData({
                          type: "REMOVE_TYPE",
                          payload: type as WebFilterType,
                        });
                      } else {
                        dispatchFilteredData({
                          type: "ADD_TYPE",
                          payload: type as WebFilterType,
                        });
                      }
                      handleClose();
                    }}
                  >
                    {type}
                  </MenuItem>
                ))}
              </Menu>
              {!filterState.isAllSelected && (
                <>
                  <Chip
                    sx={{ padding: "0.5rem" }}
                    onDelete={() => {
                      dispatchFilteredData({
                        type: "RESET",
                        payload: "" as WebFilterType,
                      });
                    }}
                    label="Clear All"
                    onClick={handleClick}
                  />
                  {filterState.selectedTypes.map((type, index) => (
                    <Chip
                      key={index}
                      sx={{ padding: "0.5rem" }}
                      label={type}
                      onDelete={() => {
                        dispatchFilteredData({
                          type: "REMOVE_TYPE",
                          payload: type as WebFilterType,
                        });
                      }}
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
            {filterState.filteredData.map((item, index) => (
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

export default Web;
