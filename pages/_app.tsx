import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import Head from "next/head";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    fonts: {},
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [typingHeader, setTypingHeader] = useState(false);

  const doneTypingHeader = () => {
    setTypingHeader(false);
  };

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
          <Head>
            <title>{"let's go build"}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout callback={doneTypingHeader}>
            <Component {...pageProps} typingHeader={typingHeader} />
          </Layout>
        </motion.div>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
