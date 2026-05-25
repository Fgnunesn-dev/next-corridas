import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Clock, Users, CheckCircle, Flame, ArrowRight, Share2 } from "lucide-react";
import { TeamEvent } from "../types";

export default function EventsCalendar() {
  const [events, setEvents] = useState<TeamEvent[]>([
    {
      id: "evt-1",
      title: "Simulado 10K Speed Test",
      type: "simulado",
      date: "07 de Junho",
      time: "06:30",
      location: "Parque do Ibirapuera (Arena de Eventos), SP",
      spots: 120,
      spotsLeft: 34,
      level: "Todos",
    },
    {
      id: "evt-2",
      title: "Fortalecimento & Tiros em Subida",
      type: "treino",
      date: "10 de Junho",
      time: "19:30",
      location: "Ladeira da Cerro Corá, Alto de Pinheiros",
      spots: 50,
      spotsLeft: 12,
      level: "Intermediário",
    },
    {
      id: "evt-3",
      title: "Longão do Café & Quilômetros",
      type: "social",
      date: "14 de Junho",
      time: "06:15",
      location: "Cidade Universitária (USP) - Bolão",
      spots: 150,
      spotsLeft: 82,
      level: "Todos",
    },
    {
      id: "evt-4",
      title: "Circuito das Estações (Prova)",
      type: "prova",
      date: "21 de Junho",
      time: "07:00",
      location: "Região do Pacaembu, SP (Largada oficial)",
      spots: 200,
      spotsLeft: 45,
      level: "Todos",
    },
  ]);

  const [registeredIds, setRegisteredIds] = useState<string[]>([]);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

  const handleRegister = (id: string, eventTitle: string) => {
    if (registeredIds.includes(id)) return;

    // Register active user
    setRegisteredIds((prev) => [...prev, id]);
    
    // Decrement slots left locally
    setEvents((prevEvents) =>
      prevEvents.map((evt) =>
        evt.id === id ? { ...evt, spotsLeft: Math.max(evt.spotsLeft - 1, 0) } : evt
      )
    );

    // Show popup
    setConfirmationMessage(`Presença confirmada no "${eventTitle}"! Prepare seus tênis!`);
    setTimeout(() => {
      setConfirmationMessage(null);
    }, 4500);
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "prova":
        return { bg: "bg-red-500/10 border-red-500/20 text-red-400", label: "Provas Oficiais" };
      case "treino":
        return { bg: "bg-brand-neon/15 border-brand-neon-light/35 text-brand-neon-light", label: "Tiro Técnico" };
      case "simulado":
        return { bg: "bg-brand-cyan/15 border-brand-cyan/35 text-brand-cyan", label: "Simulado Next" };
      default:
        return { bg: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400", label: "Social Coletivo" };
    }
  };

  return (
    <section
      id="agenda"
      className="relative py-24 sm:py-32 bg-brand-dark w-full overflow-hidden"
    >
      {/* Background soft lighting effects */}
      <div className="absolute top-[35%] left-0 w-[240px] h-[240px] bg-brand-neon/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[330px] h-[330px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-black tracking-widest uppercase text-brand-neon-light mb-3 text-glow">
            CALENDÁRIO INTEGRADO
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase italic">
            Próximos Desafios &{" "}
            <span className="bg-gradient-to-r from-brand-neon-light via-brand-neon to-brand-cyan bg-clip-text text-transparent text-glow-neon">
              Treinos
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-lg">
            Mantenha-se engajado. Veja nossa agenda com os treinos presenciais oficiais, rodagens mapeadas, tendas de suporte de provas e festividades coletivas.
          </p>
        </div>

        {/* Confirmation banner float popup */}
        <AnimatePresence>
          {confirmationMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="fixed bottom-6 right-6 z-50 bg-brand-card border-2 border-brand-cyan px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm sm:max-w-md neon-glow"
              id="calendar-toast"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-brand-cyan flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Inscrição Sincronizada!</h4>
                <p className="text-xxs text-gray-400 mt-0.5">{confirmationMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Events listing schedule dashboard layout */}
        <div className="flex flex-col gap-6" id="calendar-list">
          {events.map((evt) => {
            const styles = getTypeStyle(evt.type);
            const isRegistered = registeredIds.includes(evt.id);
            
            return (
              <div
                key={evt.id}
                className={`relative rounded-2xl p-6 sm:p-8 backdrop-blur-md border transition-all duration-300 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 overflow-hidden ${
                  isRegistered
                    ? "bg-purple-950/20 border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.1)]"
                    : "bg-brand-card/30 border-white/5 hover:border-brand-neon/20 hover:bg-brand-card/45"
                }`}
                id={`event-item-${evt.id}`}
              >
                
                {/* Visual marker inside event layout left border decoration */}
                <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${isRegistered ? "bg-purple-400" : "bg-purple-600"}`} />

                {/* Left block info: Badge, Date, Title, Location */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Event Custom Style Badge */}
                    <span className={`px-3 py-1 rounded-full text-xxs font-mono font-bold uppercase border ${styles.bg}`}>
                      {styles.label}
                    </span>
                    
                    {/* Athlete Required Level */}
                    <span className="text-xxs text-gray-500 font-mono uppercase tracking-wide">
                      Nível: <strong className="text-gray-300">{evt.level}</strong>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase italic tracking-wide group-hover:text-brand-neon-light transition-colors">
                      {evt.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2.5 text-xs sm:text-sm text-gray-400">
                      <div className="flex items-center gap-1.5 font-mono">
                        <Calendar className="w-4 h-4 text-brand-neon" />
                        <span className="font-bold text-gray-200">{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono">
                        <Clock className="w-4 h-4 text-brand-neon" />
                        <span>{evt.time} hrs</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                        <span>{evt.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right block interaction: stats of spots and register button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center lg:justify-end gap-6 border-t border-white/5 pt-6 lg:border-t-0 lg:pt-0 shrink-0">
                  
                  {/* Availability Counter inside visual HUD layout */}
                  <div className="flex items-center gap-4 border-r border-white/5 pr-6 font-mono text-xs">
                    <div className="text-left">
                      <div className="text-gray-500 uppercase tracking-widest text-[10px]">Vagas Totais</div>
                      <div className="text-sm font-bold text-white mb-0.5">{evt.spots}</div>
                    </div>
                    
                    <div className="text-left">
                      <div className="text-gray-500 uppercase tracking-widest text-[10px]">Restam</div>
                      <div className={`text-sm font-bold ${evt.spotsLeft <= 15 ? "text-red-400 animate-pulse" : "text-brand-cyan"}`}>
                        {evt.spotsLeft} vagas
                      </div>
                    </div>
                  </div>

                  {/* Operational RSVP button */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleRegister(evt.id, evt.title)}
                      disabled={isRegistered}
                      className={`w-full sm:w-auto cursor-pointer font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                        isRegistered
                          ? "bg-transparent text-purple-400 border border-purple-500/30"
                          : "bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-500"
                      }`}
                      id={`register-btn-${evt.id}`}
                    >
                      {isRegistered ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Estou Confirmado</span>
                        </>
                      ) : (
                        <>
                          <Flame className="w-4 h-4" />
                          <span>Marcar Presença</span>
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={() => {
                        // Simulates sharing links
                        navigator.clipboard.writeText(`Próximo treino Next: ${evt.title} no dia ${evt.date}! Bora?`);
                        setConfirmationMessage("Link do treino copiado! Compartilhe no grupo!");
                        setTimeout(() => setConfirmationMessage(null), 3000);
                      }}
                      className="cursor-pointer p-3 rounded-sm bg-zinc-900 border border-zinc-700 hover:border-purple-500 text-gray-300 hover:text-white transition-colors flex items-center justify-center"
                      title="Compartilhar treino"
                      id={`share-btn-${evt.id}`}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Calendar footer instructions */}
        <div className="mt-12 text-center" id="calendar-disclaimer">
          <p className="text-xs text-gray-500 leading-relaxed font-mono">
            ⚠️ Os treinos coletivos possuem equipe de hidratação, apoio médico rápido e filmagem profissional de passada (análise de running-form). Sincronize com seu treinador Next.
          </p>
        </div>

      </div>
    </section>
  );
}
