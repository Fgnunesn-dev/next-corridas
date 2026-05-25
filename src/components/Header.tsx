import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on proximity
      const sections = ["inicio", "vantagens", "resultados", "comunidade", "planos", "agenda"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "inicio", label: "Início" },
    { id: "vantagens", label: "Diferenciais" },
    { id: "resultados", label: "Resultados" },
    { id: "comunidade", label: "Comunidade" },
    { id: "planos", label: "Planos" },
    { id: "agenda", label: "Desafios & Treinos" },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-dark/85 backdrop-blur-md py-3 border-b border-brand-neon/15 shadow-lg"
            : "bg-gradient-to-b from-brand-dark/90 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <div className="cursor-pointer" onClick={() => handleNavClick("inicio")} id="nav-logo">
            <Logo className="h-10 sm:h-12 w-auto" showSubtitle={false} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 bg-brand-dark/40 py-1 px-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-${item.id}`}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer ${
                  activeTab === item.id ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === item.id && (
                  <motion.span
                    layoutId="activeBubble"
                    className="absolute inset-0 bg-brand-neon/20 border border-brand-neon-light/30 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+conhecer+os+planos+da+Next+Assessoria+Esportiva."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-brand-neon to-purple-600 hover:from-brand-neon-light hover:to-purple-500 text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 neon-glow text-sm"
              id="header-cta"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Participar</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none transition-colors"
              aria-label="Abrir menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-brand-neon/20 px-6 py-8 shadow-2xl flex flex-col gap-6"
            id="mobile-drawer"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mob-${item.id}`}
                  className={`text-left text-lg font-semibold py-2.5 border-b border-white/5 transition-colors ${
                    activeTab === item.id ? "text-brand-neon-light text-glow" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+conhecer+os+planos+da+Next+Assessoria+Esportiva."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-neon to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg neon-glow text-base"
                id="header-mob-whatsapp"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
