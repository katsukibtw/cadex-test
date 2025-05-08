import { styled } from "@mui/joy";

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

const Response = () => {
  return (
    <PageContainer>
      <SerifHeading level="h1" fontSize={"4rem"}>
        Message generated on the server
      </SerifHeading>
    </PageContainer>
  );
};

export default Response;
