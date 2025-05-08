import { styled } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

import { GradientSeparator } from "@/shared/StyledComponents";

const FooterContainer = styled("div")(() => ({
  height: "7.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.25rem",
  fontWeight: "700",
}));

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
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
      <FooterContainer>Some company 2025</FooterContainer>
    </>
  );
};

export default Footer;
