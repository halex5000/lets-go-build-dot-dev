import { Container, styled } from "@nextui-org/react";
import React, { ReactNode } from "react";

const Box = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Container
      css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" }, ml: "$0" }}
      className={className}
    >
      {children}
    </Container>
  );
};

export default Box;
