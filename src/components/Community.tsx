import React from "react";
import { motion } from "motion/react";
import { Users, Heart, MapPin, Sparkles, MessageSquare } from "lucide-react";

export default function Community() {
  const photos = [
    {
      id: 1,
      title: "Concentração Geral",
      category: "Pré-Prova",
      url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-2",
      tagline: "Unidos na contagem regressiva antes da largada.",
    },
    {
      id: 2,
      title: "Treino de Tiros de Quarta",
      category: "Performance",
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      tagline: "Ritmo alto e superação mútua na subida.",
    },
    {
      id: 3,
      title: "Fisiologia e Apoio",
      category: "Conexão",
      url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-2",
      tagline: "Ajuste na pisada e acompanhamento focado.",
    },
    {
      id: 4,
      title: "Superação Fim de Tarde",
      category: "Lifestyle",
      url: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      tagline: "Mais um pôr do sol conquistado no asfalto.",
    },
    {
      id: 5,
      title: "A Vibração da Chegada",
      category: "Vitória",
      url: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-1",
      tagline: "Dividir a alegria da medalha de ouro é o nosso maior prêmio.",
    },
  ];

  const rituals = [
    {
      name: "Sábados de Longão",
      detail: "Café coletivo + hidratação organizada no Parque do Ibirapuera ou na pista aos sábados de manhã.",
      hour: "06:30 hrs • Sábado",
    },
    {
      name: "Tiros Explosivos",
      detail: "Análise técnica de cadência em pistas olímpicas com suporte de cones e pacekeepers da Next.",
      hour: "19:30 hrs • Quarta-feira",
    },
    {
      name: "Pós-Prova Next",
      detail: "Nossa famosa tenda de buffet, massoterapia, frutas e comemoração regada a risadas.",
      hour: "Pós-Eventos Oficiais",
    },
  ];

  return (
    <section
      id="comunidade"
      className="relative py-24 sm:py-32 bg-brand-dark/95 w-full overflow-hidden"
    >
      {/* Visual glowing elements */}
      <div className="absolute top-[25%] left-[-15%] w-[350px] h-[350px] bg-brand-neon/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[65%] right-[-10%] w-[300px] h-[300px] bg-brand-magenta/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs sm:text-sm font-black tracking-widest uppercase text-brand-neon-light mb-3 text-glow animate-pulse">
            O CORAÇÃO DA EQUIPE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase italic">
            Não é só treino. <br />
            É{" "}
            <span className="bg-gradient-to-r from-brand-neon-light to-pink-500 bg-clip-text text-transparent text-glow-neon">
              Pertencimento.
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-lg">
            Acreditamos que a evolução humana atinge o seu ápice através do apoio coletivo. Na Next, cada atleta que cruza a linha de chegada carrega a força de centenas de mentes focadas.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]" id="community-bento-grid">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.015 }}
              className={`relative rounded-2xl overflow-hidden group border border-white/5 shadow-2xl ${photo.span}`}
              id={`photo-card-${photo.id}`}
            >
              {/* Photo backdrop */}
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay shading gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              {/* Glowing hover visual card border indicator */}
              <div className="absolute inset-0 border border-brand-neon-light/0 group-hover:border-brand-neon-light/30 rounded-2xl transition-all duration-300 pointer-events-none z-10" />

              {/* Content items inside details */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col justify-end h-full">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-brand-neon/20 border border-brand-neon-light/30 text-brand-neon-light text-xxs font-mono font-bold uppercase py-0.5 px-2 rounded-full">
                    {photo.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display uppercase italic text-white leading-tight">
                  {photo.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live rituals list: what makes Next unique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" id="community-rituals-list">
          {rituals.map((rit, idx) => (
            <div
              key={idx}
              className="bg-brand-card/30 border border-white/5 hover:border-brand-neon/20 rounded-2xl p-6 sm:p-8 hover:bg-brand-card/45 transition-all duration-300 group flex flex-col justify-between"
              id={`ritual-${idx}`}
            >
              <div>
                <span className="font-mono text-xs text-brand-neon-light font-bold mb-3 block">
                  {rit.hour}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase italic font-display mb-3 group-hover:text-brand-neon/80 transition-colors">
                  {rit.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {rit.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xxs font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                <Users className="w-3 h-3 text-brand-cyan" />
                <span>Integração Máxima</span>
              </div>
            </div>
          ))}
        </div>

        {/* Emotive Community Motto Banner */}
        <div className="mt-20 text-center max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-brand-card/60 via-purple-950/10 to-brand-card/50 border border-white/5 relative overflow-hidden" id="community-motto-banner">
          <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-pink-500/5 rounded-full blur-[50px]" />
          
          <Heart className="w-8 h-8 text-brand-neon-light mx-auto mb-4 animate-float" />
          <p className="text-lg sm:text-2xl font-medium italic text-gray-200 leading-relaxed font-display">
            "Você não está correndo para cruzar a linha de chegada de forma isolada. Você está correndo para se conectar com pessoas que compartilham da mesma determinação de buscar a evolução real."
          </p>
          <div className="text-xs font-mono uppercase tracking-widest text-brand-neon-light font-bold mt-4">
            — Clã Next Assessoria
          </div>
        </div>

      </div>
    </section>
  );
}
