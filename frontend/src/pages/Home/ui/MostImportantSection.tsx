import { Stack, Typography, styled } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import YouTube, { type YouTubeProps } from "react-youtube";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const opts: YouTubeProps["opts"] = {
    height: "200",
    width: "350",
  };

  return (
    <SectionContainer
      sx={
        isMobile
          ? {
              width: "85vw",
              flexDirection: "column",
              padding: "2rem",
              background: "hsl(0, 0%, 50%, 0.1)",
              gap: "1rem",
            }
          : {}
      }
    >
      <Stack gap={"1rem"}>
        <SerifHeading level="h1" fontSize={isMobile ? "2.75rem" : "3.75rem"}>
          Most important title on the page
        </SerifHeading>
        <Typography fontSize={"1.25rem"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </Typography>
      </Stack>
      <YouTube videoId="dQw4w9WgXcQ" opts={isMobile ? opts : {}} />
    </SectionContainer>
  );
};

export default MostImportantSection;
