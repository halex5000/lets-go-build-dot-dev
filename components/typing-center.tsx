import { Text, Row } from "@nextui-org/react";
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

export default function CenterTyping({
  typingHeader,
}: {
  typingHeader: boolean;
}) {
  const [isTypingCenter, setIsTypingCenter] = useState(true);
  const [isTypingName, setIsTypingName] = useState(true);
  return (
    <Row
      justify="center"
      align="center"
      css={{ position: "absolute", top: "40%" }}
    >
      {typingHeader ? (
        <></>
      ) : (
        <Text h4 className={codeFont.className} css={{ pr: "$5" }}>
          <TypeAnimation
            cursor={false}
            sequence={[
              "Alex is",
              () => {
                setIsTypingName(false);
              },
            ]}
          ></TypeAnimation>
        </Text>
      )}
      {isTypingName ? (
        <></>
      ) : (
        <Text h4 className={codeFont.className}>
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
              () => {
                setIsTypingCenter(false);
              },
            ]}
          ></TypeAnimation>
        </Text>
      )}
    </Row>
  );
}
