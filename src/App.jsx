import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";

const technologiesPromise = fetch("/data/technologies.json")
  .then((response) => response.json())
  .then((data) => new Promise((resolve) => setTimeout(() => resolve(data), 600)));

function App() {
  const [stack, setStack] = useState([]);

  function addToStack(tech) {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(tech.name + " is already in your stack!");
      return;
    }
    setStack([...stack, tech]);
    toast.success(tech.name + " added to your stack!");
  }

  function removeFromStack(tech) {
    setStack(stack.filter((item) => item.id !== tech.id));
    toast.info(tech.name + " removed from your stack.");
  }

  function removeAll() {
    if (stack.length === 0) {
      toast.info("Your stack is already empty.");
      return;
    }
    toast.info("Stack cleared - " + stack.length + " technologies removed.");
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

      <ToastContainer position="top-right" autoClose={2500} pauseOnHover theme="light" />
    </div>
  );
}

export default App;