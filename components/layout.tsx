import React, { ReactNode } from "react";
import Box from "@/components/box";
import Content from "@/components/content";
import AppBar from "./app-bar";

export default function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Box className={className}>
      <AppBar className={className} />
      {children}
      <Content />
    </Box>
  );
}
