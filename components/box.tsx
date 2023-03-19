import { Container } from "@nextui-org/react";
import React, { ReactNode } from "react";

const Box = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Container fluid className={className}>
      {children}
    </Container>
  );
};

export default Box;
