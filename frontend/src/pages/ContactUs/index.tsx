import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Textarea,
  styled,
} from "@mui/joy";

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

const StyledInput = styled(Input)(({ theme }) => ({
  transition: "0.4s ease",
  "--Input-focusedInset": "var(--any, )",
  "--Input-focusedThickness": "0",
  "--Input-focusedHighlight": theme.vars.palette.primary["100"],
  ":hover": {
    borderColor: theme.vars.palette.primary["300"],
    transition: "0.4s ease",
    color: theme.vars.palette.primary["50"],
  },
  ":active": {
    borderColor: theme.vars.palette.primary["400"],
    transition: "0.4s ease",
  },
  ":focus": {
    borderColor: theme.vars.palette.primary["200"],
    transition: "0.4s ease",
    background: theme.vars.palette.primary["900"],
    color: theme.vars.palette.primary["50"],
  },
  ":focus-visible": {
    borderColor: theme.vars.palette.primary["200"],
    transition: "0.4s ease",
    background: theme.vars.palette.primary["900"],
    color: theme.vars.palette.primary["50"],
  },
  ":focus-within": {
    borderColor: theme.vars.palette.primary["200"],
    transition: "0.4s ease",
    background: theme.vars.palette.primary["900"],
    color: theme.vars.palette.primary["50"],
  },
}));

const StyledTextarea = styled(Textarea)(({ theme }) => ({
  transition: "0.4s ease",
  "--Textarea-focusedInset": "var(--any, )",
  "--Textarea-focusedThickness": "0",
  "--Textarea-focusedHighlight": theme.vars.palette.primary["100"],
  ":hover": {
    borderColor: theme.vars.palette.primary["300"],
    transition: "0.4s ease",
    color: theme.vars.palette.primary["50"],
  },
  ":active": {
    borderColor: theme.vars.palette.primary["400"],
    transition: "0.4s ease",
  },
  ":focus": {
    borderColor: theme.vars.palette.primary["200"],
    transition: "0.4s ease",
    background: theme.vars.palette.primary["900"],
    color: theme.vars.palette.primary["50"],
  },
  ":focus-visible": {
    borderColor: theme.vars.palette.primary["200"],
    transition: "0.4s ease",
    background: theme.vars.palette.primary["900"],
    color: theme.vars.palette.primary["50"],
  },
  ":focus-within": {
    borderColor: theme.vars.palette.primary["200"],
    transition: "0.4s ease",
    background: theme.vars.palette.primary["900"],
    color: theme.vars.palette.primary["50"],
  },
}));

const ContactUs = () => {
  return (
    <PageContainer>
      <SerifHeading level="h1" fontSize={"4rem"}>
        Only CTA on the page
      </SerifHeading>
      <Sheet
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
          gap: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <StyledInput type="text" placeholder="Value" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <StyledInput type="email" placeholder="Value" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <StyledTextarea sx={{ height: "5rem" }} placeholder="Value" />
        </FormControl>
        <Button
          color="neutral"
          sx={{
            marginTop: "0.5rem",
          }}
        >
          Submit
        </Button>
      </Sheet>
    </PageContainer>
  );
};

export default ContactUs;
