import React, { useEffect } from "react";
import { Hero } from "@/components/landing-page";

import { TopNavigation } from "@/components/navigation";

function App() {
  return (
    <>
      <TopNavigation />
      <main className="font-ember pt-[var(--nav-offset)]">
        <Hero />
      </main>
    </>
  );
}

export default App;
