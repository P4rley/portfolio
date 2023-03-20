"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <html>
      <head />
      <body>
        <GlobalStyles />

        <ThemeProvider theme={theme}>
          <AnimatePresence>
            {loading ? (
              <Loader />
            ) : (
              <>
                <Navbar />
                {children}
              </>
            )}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
