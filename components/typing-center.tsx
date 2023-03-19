import { Text, Row, Card } from "@nextui-org/react";
import React, { useState } from "react";
import { Fira_Code } from "next/font/google";
import { TypeAnimation } from "react-type-animation";

// eslint-disable-next-line new-cap
const codeFont = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

const delay = 600;

export default function CenterTyping() {
  const [isTypingName, setIsTypingName] = useState(true);
  return (
    <Card
      css={{
        width: 400,
      }}
    >
      <Card.Header
        className={codeFont.className}
        css={{ justifyContent: "center", backgroundColor: "red" }}
      >
        <Text h4 className={codeFont.className} css={{ pr: "$5" }}>
          Hello, my name is
        </Text>
      </Card.Header>
      <Card.Body
        css={{
          textAlign: "center",
          justifyContent: "center",
          backgroundColor: "White",
        }}
      >
        <Text
          h1
          className={codeFont.className}
          css={{ pr: "$5", color: "Black" }}
        >
          Alex
        </Text>
      </Card.Body>
      <Card.Footer css={{ justifyContent: "center", backgroundColor: "red" }}>
        <Text h4 className={codeFont.className} css={{ pr: "$5" }}>
          and I am
        </Text>
        <Text h3 className={codeFont.className}>
          <TypeAnimation
            cursor
            sequence={[
              "an inventor",
              delay,
              "a technologist",
              delay,
              "a mentor",
              delay,
              "a student",
              delay,
              "a leader",
              delay,
              "a software engineer",
              delay,
              "a software architect",
              delay,
              "a builder",
            ]}
          ></TypeAnimation>
        </Text>
      </Card.Footer>
    </Card>
  );
}
