import { Skeleton, Stack, Typography, styled } from "@mui/material";
import { FolderOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { MacContext } from "./MacContext";

type LeftItemsProps = {
  title: string;
  items: string[];
  imgSrc: string[];
  isLoading?: boolean;
};

export function LeftItems({
  title,
  items,
  imgSrc,
  isLoading = false,
}: LeftItemsProps) {
  const { dispatch } = useContext(MacContext);

  function handleClick(item: string) {
    if (item === "Handcrafted by Manish") {
      dispatch({ type: "SET_FIND_PATH", path: "Handcrafted by Manish" });
    } else if (item === "Trash") {
      dispatch({ type: "SET_FIND_PATH", path: "Trash" });
    } else {
      dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: true });
      dispatch({
        type: "SET_DIALOG_PROPS",
        dialogProps: {
          heading: "You don't have permission",
          description:
            "At this rate, we would be replicating the entire macOS on my website and Apple will soon have a lawsuit against me lol.",
          imgCode: 1,
          primaryButtonText: "OK",
          primaryAction: () => {
            dispatch({ type: "SET_MAC_ALERT_OPEN", booleanValue: false });
            dispatch({ type: "CLEAR_SELECTED" });
          },
        },
      });
    }
  }
  return (
    <>
      <StyledTitle variant="body2">{title}</StyledTitle>
      <StyledStack>
        {items?.map((item, index) => (
          <StyledItem
            key={index}
            onClick={() => {
              handleClick(item);
            }}
          >
            {imgSrc[index] !== "" ? (
              <>
                <Skeleton
                  variant="rectangular"
                  width={19}
                  height={19}
                  sx={{
                    borderRadius: "0.3rem",
                    marginLeft: "0.5rem",
                    display: isLoading ? "block" : "none",
                  }}
                />
                <img
                  src={imgSrc[index]}
                  style={{
                    ...imageStyle,
                    display: isLoading ? "none" : "block",
                  }}
                />
              </>
            ) : (
              <FolderOutlined style={imageStyle} />
            )}
            <StyledItemText variant="body2">{item}</StyledItemText>
          </StyledItem>
        ))}
      </StyledStack>
    </>
  );
}

const imageStyle = {
  width: "1.2rem",
  height: "1.2rem",
  objectFit: "contain" as const,
  marginLeft: "0.5rem",
  color: "var(--mui-palette-secondary-main)",
};

const StyledStack = styled(Stack)({
  margin: "0.5rem",
});

const StyledItem = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "0.3rem",
  padding: "0.25rem 0",
  cursor: "pointer",
  gap: "0.5rem",
  "&:hover": { backgroundColor: "var(--mui-palette-background-macos)" },
});

const StyledTitle = styled(Typography)({
  marginTop: "1rem",
  marginLeft: "0.75rem",
  fontWeight: "bold",
  color: "gray",
  fontSize: "0.7rem",
  fontFamily: "San Francisco Bold",
});

const StyledItemText = styled(Typography)({
  fontSize: "0.8rem",
  fontFamily: "San Francisco",
  color: "var(--mui-palette-text-secondary)",
});
