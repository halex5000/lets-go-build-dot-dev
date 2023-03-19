import React from "react";
import { Navbar, Text } from "@nextui-org/react";
import Logo from "@/components/logo";
import { Fira_Code } from "next/font/google";

const codeFont = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

export default function AppBar({ callback }: { callback?: Function }) {
  return (
    <Navbar variant="static">
      <Navbar.Brand>
        <Logo />
        <Text
          css={{
            mt: "$5",
            color: "green",
          }}
          h3
          className={codeFont.className}
        >
          {"let's go build_"}
        </Text>
      </Navbar.Brand>
    </Navbar>
  );
}
