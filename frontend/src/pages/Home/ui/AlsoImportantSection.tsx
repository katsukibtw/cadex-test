import { Sheet, Stack, Typography, styled } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";

import { SerifHeading, StyledButton } from "@/shared/StyledComponents";

const SectionContainer = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "0 7.5vw",
}));

const Card = () => {
  return (
    <Stack>
      <Typography fontSize={"1.5rem"} fontWeight={800}>
        Title
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
        leo et condimentum
      </Typography>
    </Stack>
  );
};

const AlsoImportantSection = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const range = (from: number, to: number, step: number = 1) =>
    [...Array(Math.floor((to - from) / step) + 1)].map(
      (_, i) => from + i * step
    );

  return (
    <SectionContainer
      sx={
        isMobile
          ? {
              width: "90vw",
              padding: 0,
              marginInline: "auto",
            }
          : {}
      }
    >
      <Sheet
        sx={{
          background: "transparent",
          height: "8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SerifHeading level="h1" fontSize={isMobile ? "2rem" : "3rem"}>
          Also very important title
        </SerifHeading>
      </Sheet>
      <Stack
        display={"grid"}
        gridTemplateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"}
        gridTemplateRows={isMobile ? "repeat(6, 1fr)" : "repeat(2, 1fr)"}
        gap={isMobile ? "2rem" : "5rem"}
      >
        {range(0, 5).map((el, index) => (
          <Card key={`${el} ${index}`} />
        ))}
      </Stack>
      <Sheet
        sx={{
          background: "transparent",
          height: "8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StyledButton onClick={() => navigate("/contact-us")}>
          Contact us
        </StyledButton>
      </Sheet>
    </SectionContainer>
  );
};

export default AlsoImportantSection;
