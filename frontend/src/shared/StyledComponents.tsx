import { Button, Typography, styled } from "@mui/joy";

export const SerifHeading = styled(Typography)(() => ({
  fontFamily: '"Lora", serif, monospace',
}));

export const GradientSeparator = styled("div")(() => ({
  width: "80vw",
  height: "2px",
  background:
    "linear-gradient(90deg,transparent 0%, rgba(102, 102, 102, 0.8) 20%, rgba(102, 102, 102, 0.8) 80%, transparent 100%)",
}));

export const StyledButton = styled(Button)(() => ({
  paddingInline: "3rem",
}));
