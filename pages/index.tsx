import TypingCenter from "@/components/typing-center";
import { Container } from "@nextui-org/react";
import React from "react";

export default function Home({ typingHeader }: { typingHeader: boolean }) {
  return (
    <Container
      fluid
      css={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
      }}
    >
      <TypingCenter typingHeader={typingHeader} />
    </Container>
  );
}
