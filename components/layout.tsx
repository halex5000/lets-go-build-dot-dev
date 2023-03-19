import React, { ReactNode } from "react";
import Box from "@/components/box";
import Content from "@/components/content";
import AppBar from "./app-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar />
      <Box>
        {children}
        <Content />
      </Box>
    </>
  );
}
