import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import AppBar from "@/components/app-bar";
import { Fira_Code } from "next/font/google";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

// eslint-disable-next-line new-cap
const codeFont = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <motion.div layout>
          <Layout className={codeFont.className}>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
