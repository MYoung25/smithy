import React, { useEffect } from "react";
import { Hero } from "@/components/landing-page";

import { TopNavigation } from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AppProps {
  disableAutomaticDarkMode?: boolean;
}

function App({ disableAutomaticDarkMode = false }: AppProps) {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (disableAutomaticDarkMode) return;
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, disableAutomaticDarkMode]);

  return (
    <>
      <TopNavigation />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
