import { styled } from "@mui/joy";

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
  return (
    <SectionContainer>
      <SerifHeading level="h1" fontSize={"3rem"}>
        Less important title
      </SerifHeading>
      <StyledButton>Contact us</StyledButton>
    </SectionContainer>
  );
};

export default LessImportantSection;
