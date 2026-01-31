import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Détecte le scroll pour ajuster l'effet "Glass"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Styles dynamiques pour les liens
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-blue-600 bg-blue-50 shadow-sm ring-1 ring-blue-100"
        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
            : "bg-transparent border-b border-transparent py-2"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 bg-slate-900 rounded-lg text-white font-bold shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                {/* Remplace par <img src="/logo.svg" ... /> si tu préfères */}
                N
            </div>
            <span className="font-bold tracking-tight text-lg text-slate-900">
              Novytris
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1 bg-white/40 p-1 rounded-full border border-white/20 backdrop-blur-md">
            <NavLink to="/services" className={navClass}>Services</NavLink>
            <NavLink to="/realisations" className={navClass}>Réalisations</NavLink>
            <NavLink to="/about" className={navClass}>À propos</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/pro-idiri-yassine/30min"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex group relative px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative flex items-center gap-2">
                Appel 30 min <Sparkles className="w-3 h-3 text-yellow-300" />
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY (Simple version) */}
      {mobileMenuOpen && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b shadow-xl p-6 md:hidden"
        >
            <nav className="flex flex-col gap-4 text-lg">
                <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-600">Services</Link>
                <Link to="/realisations" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-600">Réalisations</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-600">À propos</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="font-medium text-slate-600">Contact</Link>
                <hr className="border-slate-100" />
                <a href="https://calendly.com/TON-LIEN" className="flex items-center justify-center w-full py-3 bg-slate-900 text-white rounded-xl font-bold">
                    Réserver un appel
                </a>
            </nav>
        </motion.div>
      )}
    </>
  );
}