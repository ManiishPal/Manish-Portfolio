import { Skeleton, Stack, styled, Typography } from "@mui/material";
import { useContext } from "react";
import { MacContext } from "./MacContext";
import { useNavigate } from "react-router-dom";

type MacFinderContentProps = {
  names: string[];
  imgSrc: string[];
  links: string[];
  isLoading?: boolean;
};

export function MacFinderContent({
  names,
  imgSrc,
  links,
  isLoading = false,
}: MacFinderContentProps) {
  const { macSystemState } = useContext(MacContext);
  const isTrash = macSystemState.finderPath === "Trash";
  const navigate = useNavigate();

  function handleClick(link: string) {
    if (link.startsWith("/#/")) {
      navigate(link.slice(2));
    } else {
      window.open(link, "_blank");
    }
  }

  return (
    <StyledStack
      alignItems={isTrash ? "center" : "flex-start"}
      justifyContent={isTrash ? "center" : "flex-start"}
    >
      {isTrash ? (
        <StyledTrash variant="h6">Nothing in Trash</StyledTrash>
      ) : (
        <StyledList>
          {names.map((name, index) => (
            <StyledHolder
              key={index}
              onClick={() => {
                handleClick(links[index]);
              }}
            >
              {isLoading && (
                <Skeleton
                  variant="rounded"
                  width={100}
                  height={60}
                  sx={{ borderRadius: "0.75rem" }}
                />
              )}
              <StyledImg
                src={imgSrc[index]}
                sx={{ display: isLoading ? "none" : "block" }}
              />
              <StyledTypography variant="body2">{name}</StyledTypography>
            </StyledHolder>
          ))}
        </StyledList>
      )}
    </StyledStack>
  );
}

const StyledList = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
});

const StyledHolder = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
  gap: "0.4rem",
  width: "6.5rem",
  cursor: "pointer",
});

const StyledImg = styled("img")({
  width: "100%",
  maxHeight: "4rem",
  objectFit: "contain",
  borderRadius: "0.75rem",
});

const StyledTypography = styled(Typography)({
  fontFamily: "San Francisco",
  fontSize: "0.7rem",
  color: "var(--mui-palette-text-secondary)",
});

const StyledStack = styled(Stack)({
  padding: "1.5rem 1rem",
  gap: "1rem",
  flexGrow: 1,
  flexDirection: "row",
  width: "100%",
  overflow: "hidden",
});

const StyledTrash = styled(Typography)({
  fontFamily: "San Francisco Bold",
  fontSize: "1rem",
  color: "var(--mui-palette-text-dark)",
});
