import { styled } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { useLocation } from "react-router";

import { SerifHeading } from "@/shared/StyledComponents";

const PageContainer = styled("div")(() => ({
  flex: 1,
  background: `linear-gradient(90deg, transparent 0%, hsl(0, 0%, 50%, 0.1) 8%, hsl(0, 0%, 50%, 0.1) 92%, transparent 100%)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "3rem",
}));

const Response = () => {
  const { state } = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <PageContainer
      sx={{
        background: isMobile ? "hsl(0, 0%, 50%, 0.1)" : undefined,
        padding: isMobile ? "2rem" : undefined,
      }}
    >
      <SerifHeading level="h1" fontSize={isMobile ? "2.5rem" : "4rem"}>
        {state !== null
          ? state.message
          : "Произошла ошибка. Сообщение не найдено"}
      </SerifHeading>
    </PageContainer>
  );
};

export default Response;
