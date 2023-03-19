import React from "react";
import { Navbar, Text } from "@nextui-org/react";
import Logo from "@/components/logo";
import { TypeAnimation } from "react-type-animation";
import { Fira_Code } from "next/font/google";

const codeFont = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

export default function AppBar() {
  return (
    <Navbar>
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
          <TypeAnimation
            cursor
            sequence={[
              "let's",
              500,
              "let's go",
              500,
              "let's go build",
              500,
              "let's go build.",
              500,
              "let's go build..",
              500,
              "let's go build...",
            ]}
          ></TypeAnimation>
        </Text>
      </Navbar.Brand>
    </Navbar>
  );
}
