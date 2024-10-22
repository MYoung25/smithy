import React from "react";
import { TopNavigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <TopNavigation />
      <main className="bg-primary p-6">
        <Button variant="gradient-outline">Get Started</Button>
      </main>
    </>
  );
}

export default App;
