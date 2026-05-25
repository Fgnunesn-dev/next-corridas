import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Users,
  TrendingUp,
  Zap,
  Target,
  Trophy,
  CheckCircle,
} from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      id: "treinos-personalizados",
      title: "Treinos Personalizados",
      description:
        "Planilhas individuais calculadas sob demanda para o seu ritmo cardíaco, pace e disponibilidade de dias na semana. Sem algoritmos genéricos, treino sob medida.",
      icon: Target,
      color: "from-purple-500 to-indigo-500",
      accent: "text-purple-400",
    },
    {
      id: "acompanhamento-profissional",
      title: "Acompanhamento Profissional",
      description:
        "Time de treinadores e fisiologistas de prontidão para ajustar suas cargas, tirar dúvidas e instruir você através de feedbacks constantes e videoconferências.",
      icon: Sparkles,
      color: "from-brand-neon to-pink-500",
      accent: "text-brand-neon-light",
    },
    {
      id: "evolucao-continua",
      title: "Evolução Contínua",
      description:
        "Metodologia focada na superação segura de marcas. Atinja consistência física, evite lesões comuns e veja sua resistência crescer semana após semana.",
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-500",
      accent: "text-blue-400",
    },
    {
      id: "performance-esportiva",
      title: "Performance Esportiva",
      description:
        "Táticas avançadas de corrida, treinos ritmados, tiros em subidas e controle de VO2 Máximo para você que quer baixar seu pace e cravar novos records pessoais.",
      icon: Zap,
      color: "from-brand-cyan to-blue-500",
      accent: "text-brand-cyan",
    },
    {
      id: "comunidade-motivadora",
      title: "Comunidade Motivadora",
      description:
        "Treinos presenciais com espírito de equipe. Você nunca mais correrá de forma solitária: divida a pista com parceiros focados que impulsionam o seu progresso.",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      accent: "text-pink-400",
    },
    {
      id: "preparacao-de-provas",
      title: "Preparação para Provas",
      description:
        "Planejamento tático, nutricional e psicológico para os seus maiores eventos, sejam provas locais de 5k, maratonas internacionais de 42k ou ultra-distâncias.",
      icon: Trophy,
      color: "from-yellow-500 to-brand-neon",
      accent: "text-yellow-400",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section
      id="vantagens"
      className="relative py-24 sm:py-32 bg-brand-dark/95 w-full overflow-hidden"
    >
      {/* Background visual graphics */}
      <div className="absolute top-[30%] right-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand-neon/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-cyan-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-black tracking-widest uppercase text-brand-neon-light mb-3 text-glow"
          >
            Nossa Estrutura
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase italic"
            id="why-choose-title"
          >
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-brand-neon-light to-brand-neon bg-clip-text text-transparent">
              Next?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-4 text-sm sm:text-lg"
          >
            Oferecemos uma solução completa que alia ciência fisiológica, tecnologia de treino, e o carisma de pertencer a uma das equipes que mais crescem.
          </motion.p>
        </div>

        {/* Highlight Feature Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          id="why-choose-grid"
        >
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-brand-card/35 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-brand-neon/10 hover:border-brand-neon/40 shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all duration-300"
                id={`why-card-${card.id}`}
              >
                {/* Border neon outline effect in corner */}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-brand-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-brand-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Animated graphic gradient pill behind icon */}
                <div className="relative mb-6 flex items-center justify-between">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${card.color} bg-opacity-10 border border-white/5 flex items-center justify-center text-white shadow-md relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                    {/* Interior glow ball */}
                    <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:scale-150 transition-transform duration-500" />
                    <IconComponent className="w-6 h-6 object-contain relative z-1" />
                  </div>
                  
                  {/* Performance metric tag number */}
                  <span className="font-mono text-xs text-gray-600 font-bold group-hover:text-brand-neon-light transition-colors">
                    0{idx + 1} // NXT
                  </span>
                </div>

                {/* Card Main Info */}
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-3 font-display uppercase italic group-hover:text-brand-neon-light transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                  {card.description}
                </p>

                {/* Card Indicator check link symbol */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 group-hover:text-brand-neon-light transition-colors">
                  <span className="font-mono tracking-widest uppercase">Evolução Segura</span>
                  <CheckCircle className="w-4 h-4 text-brand-neon opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner emphasizing velocity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-brand-card/60 via-purple-950/20 to-brand-card/60 border border-brand-neon/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          id="why-choose-banner"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-neon/15 flex items-center justify-center text-brand-neon-light border border-brand-neon/30 animate-pulse">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-display uppercase tracking-wider">
                Pronto para sair do ciclo de mesmice?
              </h4>
              <p className="text-sm text-gray-400">
                Oferecemos testes de limiares, análise biomecânica e re-scans a cada 30 dias.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const plansSection = document.getElementById("planos");
              if (plansSection) plansSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer bg-white text-black hover:bg-purple-100 font-bold uppercase text-xs tracking-wider px-6 py-3.5 rounded-sm transition-all duration-300 shadow-[0_4px_15px_rgba(147,51,234,0.15)] flex items-center gap-2 group"
          >
            <span>Consultar Soluções</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
