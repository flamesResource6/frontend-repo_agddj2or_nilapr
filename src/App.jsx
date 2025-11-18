import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative">
        <Hero />
        <Features />
        <CTA />
        <footer className="py-10 text-center text-blue-200/70">
          © {new Date().getFullYear()} MediCare Plus — All rights reserved
        </footer>
      </div>
    </div>
  );
}

export default App;