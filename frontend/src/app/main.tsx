import { CssVarsProvider } from "@mui/joy";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import ContactUs from "@/pages/ContactUs";
import Response from "@/pages/ContactUs/Response";
import Home from "@/pages/Home";
import Root from "@/pages/Root";

import "./index.css";
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "contact-us",
        children: [
          { index: true, Component: ContactUs },
          { path: "response", Component: Response },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider theme={theme} defaultColorScheme={"dark"}>
      <RouterProvider router={router} />
    </CssVarsProvider>
  </StrictMode>
);
