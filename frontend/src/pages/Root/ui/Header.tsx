import { Stack, styled } from "@mui/joy";
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
  boxShadow: "0.5rem 0 1rem hsl(0, 0%, 0%, 0.75)",
}));

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <SerifHeading
          level="h1"
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
          }}
        >
          Some company
        </SerifHeading>
        <StyledButton onClick={() => navigate("/contact-us")}>
          Contact us
        </StyledButton>
      </HeaderContainer>
      <GradientSeparator />
    </>
  );
};

export default Header;
