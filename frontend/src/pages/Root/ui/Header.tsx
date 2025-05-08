import { Stack, styled } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";

import {
  GradientSeparator,
  SerifHeading,
  StyledButton,
} from "@/shared/StyledComponents";

const HeaderContainer = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  position: "sticky",
  top: 0,
  background: `hsl(from #090909 h s l / 0.5)`,
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 7.5vw",
  height: "7.5rem",
  backdropFilter: "blur(20px)",
}));

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <HeaderContainer
        sx={{
          width: isMobile ? "89vw" : undefined,
          padding: isMobile ? "0 1.5rem" : undefined,
        }}
      >
        <SerifHeading
          level="h1"
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
          }}
        >
          Some company
        </SerifHeading>
        <StyledButton
          onClick={() => navigate("/contact-us")}
          sx={{
            padding: isMobile ? "0.5rem" : undefined,
          }}
        >
          Contact us
        </StyledButton>
      </HeaderContainer>
      <GradientSeparator
        sx={
          isMobile
            ? {
                background: "rgba(102, 102, 102, 0.8)",
                width: "100vw",
              }
            : {}
        }
      />
    </>
  );
};

export default Header;
