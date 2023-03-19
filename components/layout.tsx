import React, { ReactNode } from "react";
import Box from "@/components/box";
import Content from "@/components/content";
import AppBar from "./app-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <AppBar />
      {children}
      <Content />
    </Box>
  );
}
