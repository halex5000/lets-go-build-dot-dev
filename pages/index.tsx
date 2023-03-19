import { Container, Text, Row } from "@nextui-org/react";
import React, { useState } from "react";
import { Fira_Code } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line new-cap
const codeFont = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

const delay = 600;

export default function Home({ typingHeader }: { typingHeader: boolean }) {
  const [isTypingCenter, setIsTypingCenter] = useState(true);
  return (
    <Container
      fluid
      css={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
      }}
    >
      <AnimatePresence>
        <Row justify="center" align="center" css={{ top: "40%" }}>
          {typingHeader ? (
            <></>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Text h4 className={codeFont.className}>
                <TypeAnimation
                  cursor
                  sequence={[
                    "Alex is an inventor",
                    delay,
                    "Alex is a technologist",
                    delay,
                    "Alex is a mentor",
                    delay,
                    "Alex is a student",
                    delay,
                    "Alex is a leader",
                    delay,
                    "Alex is a software engineer",
                    delay,
                    "Alex is a software architect",
                    delay,
                    "Alex is a builder",
                    () => {
                      setIsTypingCenter(false);
                    },
                  ]}
                ></TypeAnimation>
              </Text>
            </motion.div>
          )}
        </Row>
      </AnimatePresence>
    </Container>
  );
}
