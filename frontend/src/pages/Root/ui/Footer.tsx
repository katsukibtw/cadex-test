import { styled } from "@mui/joy";

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
  return (
    <>
      <GradientSeparator />
      <FooterContainer>Some company 2025</FooterContainer>
    </>
  );
};

export default Footer;
