import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Renato Silveira",
      age: 34,
      role: "Atleta de Endurance",
      outcome: "Sub-3h na Maratona de Porto Alegre (2h56m)",
      photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      text: "Eu corria há 3 anos sem orientação e vivia lesionado. Quando passei a treinar com as planilhas da Next, percebi o que é corrida de verdade. Os treinadores corrigiram minha mecânica de pisada e criaram ritmos lógicos. Completar minha maratona abaixo de 3 horas parecia um sonho inalcançável, mas eles me deram as ferramentas e a confiança necessárias.",
      rating: 5,
    },
    {
      id: 2,
      name: "Amanda Lopes",
      age: 28,
      role: "Designer Gráfica",
      outcome: "Pace dos 10K caiu de 6:15/km para 4:48/km",
      photoUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=300&auto=format&fit=crop",
      text: "Sempre achei que correr não era para mim. Sentia vergonha de começar devagar nas pistas. Mas o acolhimento do clã Next fez toda a diferença. O respeito com que os novatos são integrados é mágico. Hoje, correr em alta velocidade tornou-se uma terapia diária para mim, e meus exames de sangue nunca estiveram tão perfeitos!",
      rating: 5,
    },
    {
      id: 3,
      name: "Bianca Mendes",
      age: 41,
      role: "Advogada e Mãe de 2",
      outcome: "Perda de 14kg + conclusão de sua 1ª Meia Maratona",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
      text: "Rotina insana, estresse e falta de fôlego me motivaram a buscar a Next. Em menos de 6 meses, redescobri meu corpo e perdi peso sem flacidez ou sofrimento extremo. A planilha personalizada encaixa perfeitamente no meu dia a dia atribulado. Cruzei a linha de chegada dos 21K chorando e abraçando meus filhos, grata por me sentir viva e forte novamente.",
      rating: 5,
    },
  ];

  return (
    <section
      id="depoimentos"
      className="relative py-24 sm:py-32 bg-brand-dark bg-cyber-grid w-full overflow-hidden"
    >
      {/* Background visual indicators */}
      <div className="absolute top-[30%] left-[20%] w-[220px] h-[220px] bg-brand-neon/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-[330px] h-[330px] bg-indigo-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs sm:text-sm font-black tracking-widest uppercase text-brand-neon-light mb-3 text-glow">
            HISTÓRIAS REAIS, VITÓRIAS REAIS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase italic">
            A Voz dos{" "}
            <span className="bg-gradient-to-r from-brand-neon-light via-brand-neon to-brand-cyan bg-clip-text text-transparent text-glow-neon">
              Atletas Next
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-lg">
            Muito além de planilhas e métricas de relógios inteligentes, criamos laços emocionais e transformações de vida consistentes.
          </p>
        </div>

        {/* Testimonials cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {reviews.map((rev) => (
            <motion.div
              key={rev.id}
              whileHover={{ y: -8, scale: 1.015 }}
              className="relative bg-brand-card/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-brand-neon/10 hover:border-brand-neon/35 shadow-xl hover:shadow-[0_15px_35px_rgba(168,85,247,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              id={`testimonial-card-${rev.id}`}
            >
              {/* Background gradient subtle flare inside card */}
              <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-brand-neon/5 rounded-full blur-[40px]" />
              
              {/* Card top decorations */}
              <div className="flex justify-between items-start mb-6 z-10">
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-neon text-brand-neon-light" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-neon-light/20 rotate-180" />
              </div>

              {/* Emotional testimony text body */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic relative z-10 mb-8 flex-1">
                "{rev.text}"
              </p>

              {/* Athlete micro identification profile footer inside card */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 z-10">
                <img
                  src={rev.photoUrl}
                  alt={rev.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-neon-light/30 shadow-md ring-4 ring-brand-neon/10"
                />
                
                <div>
                  <h4 className="text-base sm:text-lg font-black font-display text-white tracking-wide">
                    {rev.name}
                  </h4>
                  <div className="text-xs text-gray-400 font-medium">
                    {rev.age} anos • {rev.role}
                  </div>
                  <div className="text-xs text-brand-cyan font-bold font-mono mt-1 uppercase">
                    {rev.outcome}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic client numbers list banner bottom */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-40 hover:opacity-75 transition-opacity" id="testimonials-brand-creds">
          <span className="font-display font-bold uppercase tracking-widest text-xs text-gray-500">Média de satisfação: 4.98/5★</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600 hidden sm:inline" />
          <span className="font-display font-bold uppercase tracking-widest text-xs text-gray-500">97% de adesão a longo prazo</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600 hidden sm:inline" />
          <span className="font-display font-bold uppercase tracking-widest text-xs text-gray-500">+100 Maratondistas Formados</span>
        </div>

      </div>
    </section>
  );
}
