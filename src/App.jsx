import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";

const technologiesPromise = fetch("/data/technologies.json")
  .then((response) => response.json())
  .then((data) => new Promise((resolve) => setTimeout(() => resolve(data), 600)));

function App() {
  const [stack, setStack] = useState([]);

  function addToStack(tech) {
    if (stack.some((item) => item.id === tech.id)) return;
    setStack([...stack, tech]);
  }

  function removeFromStack(tech) {
    setStack(stack.filter((item) => item.id !== tech.id));
  }

  function removeAll() {
    setStack([]);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<p className="py-24 text-center text-slate-400">Loading technologies…</p>}>
          <TechnologiesSection
            technologiesPromise={technologiesPromise}
            stack={stack}
            onAdd={addToStack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </Suspense>
      </main>
    </div>
  );
}

export default App;