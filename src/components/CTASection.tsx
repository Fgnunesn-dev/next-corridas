import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Flame, Trophy, ShieldCheck, Zap } from "lucide-react";

export default function CTASection() {
  const handleRegisterClick = () => {
    const text = "Olá! Tenho interesse em entrar para a Next Assessoria Esportiva e subir de nível na corrida!";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      id="cta-final"
      className="relative py-28 sm:py-36 bg-gradient-to-br from-brand-dark via-purple-950/40 to-brand-dark w-full overflow-hidden border-t border-brand-neon/10"
    >
      {/* Immersive fast speed lines background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      
      {/* Oversized speed blur glow behind elements */}
      <div className="absolute inset-0 bgspeed overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-neon/25 rounded-full blur-[140px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[250px] h-[250px] bg-brand-cyan/20 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Dynamic streak lines passing through the space */}
        <div className="absolute inset-x-0 top-[20%] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-35 animate-[speed-line_3s_linear_infinite]" />
        <div className="absolute inset-x-0 bottom-[30%] h-[2px] bg-gradient-to-r from-transparent via-brand-neon-light to-transparent opacity-25 animate-[speed-line_4s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center">
        
        {/* Micro branding indicators badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-neon/20 border border-brand-neon-light/30 px-4.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-8 shadow-inner"
        >
          <Zap className="w-4 h-4 text-brand-neon-light animate-bounce" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-neon-light">
            Evolução Imediata • Pista livre
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black font-display text-white uppercase italic leading-none mb-6 tracking-tight"
          id="cta-headline"
        >
          Seu próximo nível <br />
          <span className="bg-gradient-to-r from-white via-brand-neon-light to-brand-neon bg-clip-text text-transparent text-glow-neon">
            começa agora.
          </span>
        </motion.h2>

        {/* Subhead descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-gray-300 text-sm sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 text-center"
        >
          Chega de pular treinos ou correr sem método. Integre-se a uma assessoria que entende de velocidade, apoia a sua evolução e abriga uma das comunidades mais fortes do esporte.
        </motion.p>

        {/* Big Neon Buttons CTA trigger */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
          id="cta-buttons-wrapper"
        >
          <button
            onClick={handleRegisterClick}
            className="w-full sm:w-auto cursor-pointer bg-white text-black font-black uppercase text-xs tracking-widest px-10 py-5 rounded-sm transition-all duration-300 hover:bg-purple-100 shadow-[0_0_25px_rgba(147,51,234,0.4)] flex items-center justify-center gap-3.5 group"
            id="cta-big-btn"
          >
            <Flame className="w-5 h-5 text-purple-600 animate-pulse" />
            <span>Entrar para a Next</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-600" />
          </button>
        </motion.div>

        {/* Credibility mini micro-icons list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-14 pt-10 border-t border-white/5 w-full text-left" id="cta-trust-indicators">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-cyan shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase font-display">Sem Contratos Amarrados</h4>
              <p className="text-xxs text-gray-400 mt-1">Troque ou pause sua planilha de forma livre, sob demanda e sem multas acumuladas.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Trophy className="w-6 h-6 text-brand-neon-light shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase font-display">Suporte Científico</h4>
              <p className="text-xxs text-gray-400 mt-1">Análises detalhadas de performance lideradas por profissionais formados em Ed. Física.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-yellow-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase font-display">Aplicativo Integrado</h4>
              <p className="text-xxs text-gray-400 mt-1">Acesso direto a treinos, arquivos GPX e agendas pelo nosso portal exclusivo.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
