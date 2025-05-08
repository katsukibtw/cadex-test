import { styled } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

import { SerifHeading, StyledButton } from "@/shared/StyledComponents";

const SectionContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  background: `linear-gradient(90deg, transparent 0%, hsl(0, 0%, 50%, 0.1) 8%, hsl(0, 0%, 50%, 0.1) 92%, transparent 100%)`,
  padding: "3rem",
}));

const LessImportantSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <SectionContainer
      sx={
        isMobile
          ? {
              background: "hsl(0, 0%, 50%, 0.1)",
            }
          : {}
      }
    >
      <SerifHeading level="h1" fontSize={isMobile ? "2.5rem" : "3rem"}>
        Less important title
      </SerifHeading>
      <StyledButton>Contact us</StyledButton>
    </SectionContainer>
  );
};

export default LessImportantSection;
