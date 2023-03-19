import Portfolio from "@/components/portfolio-item";
import TypingCenter from "@/components/typing-center";
import { Card, Container } from "@nextui-org/react";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

export default function Home({ typingHeader }: { typingHeader: boolean }) {
  const { scrollY } = useScroll({
    offset: ["end end", "start start"],
  });

  const [typingOpacity, setTypingOpacity] = useState(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setTypingOpacity(1 - latest / 100);
  });

  return (
    <Container css={{ position: "fixed", top: "40%", left: "40%" }}>
      <TypingCenter />
    </Container>
  );
}
