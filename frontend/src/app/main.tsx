import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "@/pages/Home.tsx";
import ContactUs from "@/pages/contact-us";
import Root from "@/pages/Root";
import MessageSent from "@/pages/contact-us/MessageSent";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "contact-us",
        Component: ContactUs,
        children: [{ path: "response", Component: MessageSent }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
