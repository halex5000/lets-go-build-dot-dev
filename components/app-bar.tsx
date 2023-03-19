import React from "react";
import { Navbar, Text } from "@nextui-org/react";
import Logo from "@/components/logo";
import { TypeAnimation } from "react-type-animation";

export default function AppBar({ className }: { className?: string }) {
  return (
    <Navbar className={className}>
      <Navbar.Brand>
        <Logo />
        <Text
          css={{
            mt: "$5",
          }}
          h2
          color="green"
          className={className}
        >
          <TypeAnimation sequence={["let's go build"]}></TypeAnimation>
        </Text>
      </Navbar.Brand>
    </Navbar>
  );
}
