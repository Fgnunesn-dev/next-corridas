import React from "react";
import { motion } from "motion/react";
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  Music,
  Zap,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
  };

  return (
    <footer className="relative bg-brand-dark border-t border-brand-neon/15 overflow-hidden w-full" id="footer-landing">
      {/* Background soft purple flares */}
      <div className="absolute bottom-0 left-[10%] w-[200px] h-[200px] bg-brand-neon/5 rounded-full blur-[80px]" />
      
      {/* Upper Footer Action CTA Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Core footer division grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/5" id="footer-columns-grid">
          
          {/* Col 1: Brand description and minimal Logo */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4" id="footer-col-1">
            <Logo className="h-12 w-auto items-start justify-start" showSubtitle={false} />
            <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
              Next Assessoria Esportiva: integrando biomecânica, suporte humano de alta qualidade, e o prazer de evoluir no asfalto lado a lado.
            </p>
            <div className="flex items-center gap-3 mt-4 text-glow text-brand-neon-light font-mono text-xs font-bold uppercase animate-pulse">
              <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <span>Sempre no Próximo Nível</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4" id="footer-col-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#a855f7] border-l-2 border-brand-neon pl-2.5">
              Menu Geral
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <button onClick={() => handleNavClick("inicio")} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-left font-medium">Início</button>
              <button onClick={() => handleNavClick("vantagens")} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-left font-medium">Diferenciais</button>
              <button onClick={() => handleNavClick("resultados")} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-left font-medium">Resultados</button>
              <button onClick={() => handleNavClick("comunidade")} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-left font-medium">Comunidade</button>
              <button onClick={() => handleNavClick("planos")} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-left font-medium">Planos</button>
              <button onClick={() => handleNavClick("agenda")} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-left font-medium">Desafios</button>
            </div>
          </div>

          {/* Col 3: Contacts & Place */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4" id="footer-col-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#a855f7] border-l-2 border-brand-neon pl-2.5">
              Contato & Tendas
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Rooftop Next, Av. Brigadeiro Faria Lima, 4500 - Itaim Bibi, São Paulo - SP, 04538-132
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-brand-cyan" />
                <a href="https://instagram.com/next_assessoria" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>@next_assessoria</span>
                  <ExternalLink className="w-3 h-3 text-gray-600" />
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-medium text-gray-300">
                  +55 (11) 99999-9999
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-neon" />
                <span className="hover:text-white transition-colors">contato@nextesportiva.com.br</span>
              </div>
            </div>
          </div>

          {/* Col 4: Lifestyle Integrations (Spotify running vibe & Strava Club) */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4" id="footer-col-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#a855f7] border-l-2 border-brand-neon pl-2.5">
              NXT Lifestyle
            </h4>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              Sincronize com os batimentos da equipe. Siga nossos canais auxiliares de som e quilometragem:
            </p>

            <div className="flex flex-col gap-2 w-full mt-2">
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DXad66g8pY77g"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-cyan/40 hover:bg-white/10 transition-all text-xs font-mono text-gray-400 hover:text-white"
                id="footer-spotify-link"
              >
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-green-400" />
                  <span>Next Beat (High-tempo Planilha)</span>
                </div>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://strava.com/clubs/next"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#fc5200]/40 hover:bg-white/10 transition-all text-xs font-mono text-gray-400 hover:text-white"
                id="footer-strava-link"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#fc5200]" />
                  <span>Clube Oficial no Strava</span>
                </div>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower copyright and policy line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xxs sm:text-xs text-gray-500 font-mono" id="footer-copyright">
          <div>
            © {currentYear} Next Assessoria Esportiva LTDA. Todos os direitos reservados. CNPJ 00.342.342/0001-99
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Privacidade (LGPD)</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
