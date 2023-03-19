import React, { ReactNode } from "react";
import Box from "@/components/box";
import Content from "@/components/content";
import AppBar from "./app-bar";

export default function Layout({
  children,
  callback,
}: {
  children: ReactNode;
  callback: Function;
}) {
  return (
    <>
      <AppBar callback={callback} />
      <Box>
        {children}
        <Content />
      </Box>
    </>
  );
}
