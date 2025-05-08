import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Textarea,
  styled,
} from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useRef, useState } from "react";
import { Form, useNavigate } from "react-router";

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

const StyledForm = styled(Form)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  gap: "1rem",
}));

const ContactUs = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleFormSubmit = async () => {
    if (
      nameRef.current !== null &&
      emailRef.current !== null &&
      messageRef.current !== null
    ) {
      setIsLoading(true);
      try {
        const response = await axios.post(import.meta.env.VITE_API_URL, {
          name: nameRef.current.value,
          email: emailRef.current.value,
          messageRef: messageRef.current.value,
        });
        console.log(response.data);
        setIsLoading(false);
        navigate(`/contact-us/response`, {
          state: {
            message: response.data.message,
          },
        });
      } catch (e) {
        console.error(e as AxiosError);
        setIsLoading(false);
      }
    }
  };

  return (
    <PageContainer
      sx={{
        background: isMobile ? "hsl(0, 0%, 50%, 0.1)" : undefined,
      }}
    >
      <SerifHeading level="h1" fontSize={isMobile ? "2.25rem" : "4rem"}>
        Only CTA on the page
      </SerifHeading>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: "0.5rem",
        }}
      >
        <StyledForm onSubmit={handleFormSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <StyledInput
              type="text"
              placeholder="Value"
              required
              slotProps={{
                input: {
                  ref: nameRef,
                },
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <StyledInput
              type="email"
              placeholder="Value"
              required
              slotProps={{
                input: {
                  ref: emailRef,
                },
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <StyledTextarea
              sx={{ height: "5rem" }}
              placeholder="Value"
              required
              slotProps={{
                textarea: {
                  ref: messageRef,
                },
              }}
            />
          </FormControl>
          <Button
            type="submit"
            loading={isLoading}
            sx={{
              marginTop: "0.5rem",
            }}
          >
            Submit
          </Button>
        </StyledForm>
      </Sheet>
    </PageContainer>
  );
};

export default ContactUs;
