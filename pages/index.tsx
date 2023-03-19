import TypingCenter from "@/components/typing-center";
import { Container } from "@nextui-org/react";
import React, { useRef } from "react";
import { useSpringValue, useScroll, useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";
import Portfolio from "@/components/portfolio-item";

export default function Home() {
  const opacity = useSpringValue(0);

  const containerRef = useRef<HTMLDivElement>(null!);

  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      console.log(scrollYProgress);
    },
    default: {
      immediate: true,
    },
  });

  return (
    <Container css={{ position: "fixed", top: "40%", left: "40%" }}>
      <animated.div style={{ opacity: scrollYProgress }}>
        <TypingCenter />
      </animated.div>
    </Container>
  );
}
