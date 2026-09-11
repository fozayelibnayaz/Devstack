import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechnologiesSection from "./components/technologies/TechnologiesSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<p className="py-24 text-center text-slate-400">Loading technologies…</p>}>
          <TechnologiesSection />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} pauseOnHover theme="light" />
    </div>
  );
}

export default App;