import { styled } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";

import Footer from "./ui/Footer";
import Header from "./ui/Header";

const RootContainer = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#090909",
  color: theme.vars.palette.neutral["50"],
  width: "80vw",
  marginInline: "auto",
}));

const Root = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <RootContainer
        sx={{
          width: isMobile ? "100vw" : undefined,
        }}
      >
        <Header />
        <div style={{ display: "flex", flex: 1 }}>
          <Outlet />
        </div>
        <Footer />
      </RootContainer>
    </>
  );
};

export default Root;
