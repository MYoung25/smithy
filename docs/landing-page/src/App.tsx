import React, { useEffect } from "react";
import { TopNavigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



function App() {
  function isDarkMode() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  
  useEffect(() => {
    if (isDarkMode()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  
  return (
    <>
      <TopNavigation />
      <main className="bg-smithy-gray p-6">
        <p>
          Content
        </p>
      </main>
    </>
  );
}

export default App;
