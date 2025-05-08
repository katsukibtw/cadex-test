import { Stack, Typography, styled } from "@mui/joy";
import YouTube from "react-youtube";

import { SerifHeading } from "@/shared/StyledComponents";

const SectionContainer = styled("div")(() => ({
  padding: "2rem 7.5vw",
  background: `linear-gradient(90deg, transparent 0%, hsl(0, 0%, 50%, 0.1) 8%, hsl(0, 0%, 50%, 0.1) 92%, transparent 100%)`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  gap: "5rem",
}));

const MostImportantSection = () => {
  return (
    <SectionContainer>
      <Stack gap={"1rem"}>
        <SerifHeading level="h1" fontSize={"3.75rem"}>
          Most important title on the page
        </SerifHeading>
        <Typography fontSize={"1.25rem"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </Typography>
      </Stack>
      <YouTube videoId="dQw4w9WgXcQ" />
    </SectionContainer>
  );
};

export default MostImportantSection;
