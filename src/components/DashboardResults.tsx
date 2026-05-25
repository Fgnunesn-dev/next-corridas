import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingDown,
  Gauge,
  Flame,
  Scale,
  Award,
  Plus,
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function DashboardResults() {
  const [activeTab, setActiveTab] = useState<"pace" | "distancia" | "peso" | "medalhas">("pace");
  
  // Pace simulator input state
  const [currentPace, setCurrentPace] = useState<string>("06:00");
  const [weeksCommitment, setWeeksCommitment] = useState<number>(12);
  const [simulatedResult, setSimulatedResult] = useState<{
    pace: string;
    improvement: string;
    vosMax: string;
  } | null>(null);

  // Hardcoded historical statistics of the team
  const accomplishments = [
    { name: "Guilherme S.", metric: "Pace 5K", initial: "05:45/km", current: "04:12/km", type: "Pace", icon: "⚡" },
    { name: "Letícia R.", metric: "Composição Corporal", initial: "28% BF", current: "18% BF", type: "Composição", icon: "🔥" },
    { name: "Fabio D.", metric: "Meia Maratona", initial: "2h05m", current: "1h38m", type: "Tempo", icon: "🥈" },
    { name: "Camila N.", metric: "Perda de Peso", initial: "82kg", current: "69kg", type: "Peso", icon: "⚖️" },
  ];

  // Helper to compute simulated pace dropping
  const runSimulator = () => {
    // Parse current pace MM:SS
    const parts = currentPace.split(":");
    let min = parseInt(parts[0]) || 6;
    let sec = parseInt(parts[1]) || 0;
    let totalSeconds = min * 60 + sec;

    // Next coaching drops pace by roughly 2.5 seconds per week for basic commitments
    const reductionPerWeek = 4.2; // premium drop seconds per week
    const reducedSeconds = Math.round(totalSeconds - (reductionPerWeek * weeksCommitment));
    
    // Hard limit at 3:15 pace
    const finalSeconds = Math.max(reducedSeconds, 195);
    
    const finalMin = Math.floor(finalSeconds / 60);
    const finalSec = finalSeconds % 60;
    
    const finalPaceString = `${finalMin.toString().padStart(2, "0")}:${finalSec.toString().padStart(2, "0")}/km`;
    
    const percentage = (((totalSeconds - finalSeconds) / totalSeconds) * 100).toFixed(1);
    
    // Simulate estimated VO2 Max estimate increase (typically improves by 4% to 15%)
    const startingVO2 = 42;
    const finalVO2 = (startingVO2 + (weeksCommitment * 0.75)).toFixed(1);

    setSimulatedResult({
      pace: finalPaceString,
      improvement: `${percentage}% mais veloz`,
      vosMax: `+${finalVO2} ml/kg/min`,
    });
  };

  return (
    <section
      id="resultados"
      className="relative py-24 sm:py-32 bg-brand-dark bg-cyber-grid w-full overflow-hidden"
    >
      {/* Background neon blurs */}
      <div className="absolute top-[10%] left-0 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[300px] h-[300px] bg-brand-neon/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-black tracking-widest uppercase text-brand-neon-light mb-3 text-glow">
            BIOMECÂNICA & PERFORMANCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase italic">
            Dashboard de{" "}
            <span className="bg-gradient-to-r from-brand-neon-light via-brand-neon to-brand-cyan bg-clip-text text-transparent text-glow-neon">
              Resultados
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-lg">
            Nossos números são reais. Veja a progressão média de pace, emagrecimento saudável, evolução de endurance e o quadro geral de conquistas coletivas da Next.
          </p>
        </div>

        {/* Dashboard Frame Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20" id="results-dashboard-frame">
          
          {/* LEFT PANEL: Visual Interactive HUD Controls & Tabs (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-1 px-1">
              Select Metodologias / Indicadores
            </h3>

            {/* Tap 1: Pace dropping */}
            <button
              onClick={() => setActiveTab("pace")}
              className={`flex items-center gap-4 p-4 rounded-xl text-left border cursor-pointer transition-all ${
                activeTab === "pace"
                  ? "bg-brand-neon/15 border-brand-neon-light/40 text-white shadow-md shadow-brand-neon/5"
                  : "bg-brand-card/30 border-white/5 text-gray-400 hover:bg-brand-card/50 hover:border-white/10"
              }`}
              id="tab-pace"
            >
              <div className={`p-3 rounded-lg ${activeTab === "pace" ? "bg-brand-neon text-white" : "bg-white/5"}`}>
                <Gauge className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-medium text-sm sm:text-base text-white">Evolução do Pace</h4>
                <p className="text-xs text-gray-400 mt-0.5">Tempo por KM no asfalto</p>
              </div>
            </button>

            {/* Tap 2: Odometer volume */}
            <button
              onClick={() => setActiveTab("distancia")}
              className={`flex items-center gap-4 p-4 rounded-xl text-left border cursor-pointer transition-all ${
                activeTab === "distancia"
                  ? "bg-brand-neon/15 border-brand-neon-light/40 text-white shadow-md shadow-brand-neon/5"
                  : "bg-brand-card/30 border-white/5 text-gray-400 hover:bg-brand-card/50 hover:border-white/10"
              }`}
              id="tab-volume"
            >
              <div className={`p-3 rounded-lg ${activeTab === "distancia" ? "bg-brand-neon text-white" : "bg-white/5"}`}>
                <Flame className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-medium text-sm sm:text-base text-white">Volume de Corrida</h4>
                <p className="text-xs text-gray-400 mt-0.5">KM acumulados mensalmente</p>
              </div>
            </button>

            {/* Tap 3: Composition / weightloss */}
            <button
              onClick={() => setActiveTab("peso")}
              className={`flex items-center gap-4 p-4 rounded-xl text-left border cursor-pointer transition-all ${
                activeTab === "peso"
                  ? "bg-brand-neon/15 border-brand-neon-light/40 text-white shadow-md shadow-brand-neon/5"
                  : "bg-brand-card/30 border-white/5 text-gray-400 hover:bg-brand-card/50 hover:border-white/10"
              }`}
              id="tab-peso"
            >
              <div className={`p-3 rounded-lg ${activeTab === "peso" ? "bg-brand-neon text-white" : "bg-white/5"}`}>
                <Scale className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-medium text-sm sm:text-base text-white">Composição Corporal</h4>
                <p className="text-xs text-gray-400 mt-0.5">BF% e massa muscular equilibrada</p>
              </div>
            </button>

            {/* Tap 4: Medals */}
            <button
              onClick={() => setActiveTab("medalhas")}
              className={`flex items-center gap-4 p-4 rounded-xl text-left border cursor-pointer transition-all ${
                activeTab === "medalhas"
                  ? "bg-brand-neon/15 border-brand-neon-light/40 text-white shadow-md shadow-brand-neon/5"
                  : "bg-brand-card/30 border-white/5 text-gray-400 hover:bg-brand-card/50 hover:border-white/10"
              }`}
              id="tab-medals"
            >
              <div className={`p-3 rounded-lg ${activeTab === "medalhas" ? "bg-brand-neon text-white" : "bg-white/5"}`}>
                <Award className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-display font-medium text-sm sm:text-base text-white">Medalhas & Pódios</h4>
                <p className="text-xs text-gray-400 mt-0.5">Conquistas coletivas do grupo</p>
              </div>
            </button>

            {/* Dynamic Goal Odometer box */}
            <div className="bg-gradient-to-br from-brand-card to-brand-dark border border-brand-neon/10 rounded-xl p-5 mt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Meta de KM do Mês</span>
                <span className="text-xs text-brand-neon-light font-bold">12.420 / 15.000 KM</span>
              </div>
              {/* Progress bar outer container */}
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "82.8%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-neon to-brand-cyan rounded-full"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">
                O coletivo já quebrou +82% da meta total estipulada para a Next nesta maratona anual!
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: Dynamic SVG charts rendering and Tooltip info (Col 8) */}
          <div className="lg:col-span-8 bg-brand-card/50 border border-brand-neon/15 rounded-2xl p-6 md:p-8 min-h-[460px] flex flex-col justify-between relative shadow-2xl">
            {/* Ambient inner card layout */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-brand-neon/5 rounded-full blur-[60px]" />
            
            <AnimatePresence mode="wait">
              {activeTab === "pace" && (
                <motion.div
                  key="pace-tab"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6 h-full flex-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display uppercase italic text-glow text-white">
                        Curva de Redução de Pace (Média de Atletas)
                      </h3>
                      <p className="text-xs text-gray-400">
                        Pace médio por KM após assessoria individual (meses 1 a 6)
                      </p>
                    </div>
                    <div className="bg-brand-neon/20 border border-brand-neon/40 px-3 py-1 rounded-full text-xs font-mono text-brand-neon-light">
                      Média: -23% de Tempo
                    </div>
                  </div>

                  {/* Dynamic High-tech SVG chart */}
                  <div className="flex-1 w-full h-[220px] sm:h-[260px] relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 600 220" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                      <line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                      <line x1="0" y1="140" x2="600" y2="140" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                      <line x1="0" y1="190" x2="600" y2="190" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                      
                      {/* X-Axis Month Indicators vertical lines */}
                      <line x1="20" y1="20" x2="20" y2="200" stroke="rgba(168,85,247,0.1)" />
                      <line x1="130" y1="20" x2="130" y2="200" stroke="rgba(168,85,247,0.1)" />
                      <line x1="240" y1="20" x2="240" y2="200" stroke="rgba(168,85,247,0.1)" />
                      <line x1="350" y1="20" x2="350" y2="200" stroke="rgba(168,85,247,0.1)" />
                      <line x1="460" y1="20" x2="460" y2="200" stroke="rgba(168,85,247,0.1)" />
                      <line x1="570" y1="20" x2="570" y2="200" stroke="rgba(168,85,247,0.1)" />

                      {/* Area gradient under the stroke */}
                      <defs>
                        <linearGradient id="glow-area-fill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 20 50 L 130 80 L 240 105 L 350 135 L 460 160 L 570 185 L 570 200 L 20 200 Z"
                        fill="url(#glow-area-fill)"
                      />

                      {/* Line Path */}
                      <path
                        d="M 20 50 L 130 80 L 240 105 L 350 135 L 460 160 L 570 185"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="4"
                        strokeLinecap="round"
                        filter="drop-shadow(0px 0px 8px rgba(168,85,247,0.8))"
                      />

                      {/* Interactive Data Nodes */}
                      <circle cx="20" cy="50" r="5" fill="#ffffff" stroke="#a855f7" strokeWidth="3" />
                      <circle cx="130" cy="80" r="5" fill="#ffffff" stroke="#a855f7" strokeWidth="3" />
                      <circle cx="240" cy="105" r="5" fill="#ffffff" stroke="#a855f7" strokeWidth="3" />
                      <circle cx="350" cy="135" r="5" fill="#ffffff" stroke="#a855f7" strokeWidth="3" />
                      <circle cx="460" cy="160" r="5" fill="#ffffff" stroke="#a855f7" strokeWidth="3" />
                      <circle cx="570" cy="185" r="6" fill="#c084fc" stroke="#ffffff" strokeWidth="2" />

                      {/* Labels on vertical points */}
                      <text x="20" y="32" fill="#9ca3af" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">6'30/km</text>
                      <text x="130" y="62" fill="#9ca3af" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">5'55/km</text>
                      <text x="240" y="87" fill="#9ca3af" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">5'30/km</text>
                      <text x="350" y="117" fill="#9ca3af" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">5'05/km</text>
                      <text x="460" y="142" fill="#9ca3af" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">4'50/km</text>
                      <text x="570" y="167" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-mono)">4'15/km</text>
                    </svg>
                    
                    {/* Month labels underneath */}
                    <div className="absolute inset-x-0 bottom-[-24px] flex justify-between text-gray-500 text-xxs sm:text-xs font-semibold uppercase px-2 font-mono">
                      <span>Mês 1 (Início)</span>
                      <span>Mês 2</span>
                      <span>Mês 3</span>
                      <span>Mês 4</span>
                      <span>Mês 5</span>
                      <span className="text-brand-cyan">Mês 6 (Atual)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-6 text-center border-t border-white/5 mt-4">
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-white font-mono">6'30</div>
                      <div className="text-xxs sm:text-xs text-gray-500 uppercase">Pace Inicial Médio</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-brand-neon-light font-mono">4'15</div>
                      <div className="text-xxs sm:text-xs text-gray-500 uppercase">Pace Final Médio</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-green-400 font-mono">-2min 15s</div>
                      <div className="text-xxs sm:text-xs text-gray-500 uppercase">Redução Média</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "distancia" && (
                <motion.div
                  key="distancia-tab"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6 h-full flex-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display uppercase italic text-glow text-white">
                        Milhas & Escalada de Endurance Coletiva
                      </h3>
                      <p className="text-xs text-gray-400">
                        Treinos coletivos semanais e rodagem individual somada
                      </p>
                    </div>
                    <div className="bg-brand-cyan/20 border border-brand-cyan/40 px-3 py-1 rounded-full text-xs font-mono text-brand-cyan">
                      Soma Mês Passado: 14.860 KM
                    </div>
                  </div>

                  {/* Volume Bar Chart */}
                  <div className="flex-1 w-full h-[220px] sm:h-[260px] relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 600 220" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                      <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                      <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                      
                      {/* Bar 1 */}
                      <rect x="50" y="110" width="35" height="90" rx="4" fill="rgba(168,85,247,0.4)" stroke="#a855f7" strokeWidth="1" />
                      <text x="67.5" y="100" fill="#ffffff" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">1.8k</text>
                      
                      {/* Bar 2 */}
                      <rect x="140" y="85" width="35" height="115" rx="4" fill="rgba(168,85,247,0.5)" stroke="#a855f7" strokeWidth="1" />
                      <text x="157.5" y="75" fill="#ffffff" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">2.3k</text>
                      
                      {/* Bar 3 */}
                      <rect x="230" y="60" width="35" height="140" rx="4" fill="rgba(168,85,247,0.7)" stroke="#a855f7" strokeWidth="1" />
                      <text x="247.5" y="50" fill="#ffffff" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">2.8k</text>
                      
                      {/* Bar 4 */}
                      <rect x="320" y="45" width="35" height="155" rx="4" fill="rgba(168,85,247,0.8)" stroke="#a855f7" strokeWidth="1" />
                      <text x="337.5" y="35" fill="#ffffff" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">3.1k</text>
                      
                      {/* Bar 5 */}
                      <rect x="410" y="30" width="35" height="170" rx="4" fill="url(#purple-bar-grad)" stroke="#a855f7" strokeWidth="1" filter="drop-shadow(0px 0px 6px rgba(168,85,247,0.6))" />
                      <text x="427.5" y="20" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-mono)">4.8k</text>

                      {/* Gradient def for main bar */}
                      <defs>
                        <linearGradient id="purple-bar-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#c084fc" stopOpacity="1" />
                          <stop offset="100%" stopColor="#9333ea" stopOpacity="0.85" />
                        </linearGradient>
                      </defs>

                      {/* Ground line */}
                      <line x1="20" y1="200" x2="580" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                    </svg>

                    {/* Volume labels */}
                    <div className="absolute inset-x-0 bottom-[-24px] flex justify-around text-gray-500 text-xs font-semibold uppercase px-2 font-mono">
                      <span>Sem 1</span>
                      <span>Sem 2</span>
                      <span>Sem 3</span>
                      <span>Sem 4</span>
                      <span className="text-brand-cyan">Sem 5 (Corrida de Rua)</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl text-center text-sm text-gray-300 mt-6 md:mt-4 italic">
                    🚀 Na semana 5, com o simulado geral de 10K, quebramos o recorde absoluto de rodagem coletiva com 4.810 KM medidos via Strava API.
                  </div>
                </motion.div>
              )}

              {activeTab === "peso" && (
                <motion.div
                  key="peso-tab"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6 h-full flex-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display uppercase italic text-glow text-white">
                        Composição Corporal e Secagem do BF%
                      </h3>
                      <p className="text-xs text-gray-400">
                        Diminuição do percentual de gordura associado ao ganho aeróbico
                      </p>
                    </div>
                    <div className="bg-pink-500/20 border border-pink-500/40 px-3 py-1 rounded-full text-xs font-mono text-pink-400">
                      Média: -8.4kg Gordura
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center flex-1">
                    <div className="flex flex-col gap-4">
                      <div className="p-4 bg-brand-dark/60 rounded-xl border border-white/5 space-y-2">
                        <div className="flex justify-between text-xs text-gray-400 font-mono">
                          <span>Mês 1 (BF Inicial)</span>
                          <span className="text-white">26.5%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500 w-[85%]" />
                        </div>
                      </div>

                      <div className="p-4 bg-brand-dark/60 rounded-xl border border-white/5 space-y-2">
                        <div className="flex justify-between text-xs text-gray-400 font-mono">
                          <span>Mês 3 (BF Provisório)</span>
                          <span className="text-white">19.2%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-pink-500/80 w-[60%]" />
                        </div>
                      </div>

                      <div className="p-4 bg-brand-dark/60 rounded-xl border border-brand-neon/20 space-y-2">
                        <div className="flex justify-between text-xs text-brand-cyan font-mono font-bold animate-pulse">
                          <span>Mês 6 (BF Atual Média)</span>
                          <span className="text-brand-cyan">13.8%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-cyan w-[42%]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-5 border border-white/5 rounded-xl bg-gradient-to-tr from-brand-dark to-brand-card/45">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Reeducação Biomecânica</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Aliamos a corrida ao reforço muscular preventivo na planilha. O emagrecimento nos nossos atletas ocorre sem flacidez e sem perda de massa magra, aumentando diretamente a potência de passada.
                      </p>
                      
                      <div className="mt-4 flex items-center justify-between text-xs font-mono font-bold text-brand-neon-light">
                        <span>VO2 Máximo Estimado:</span>
                        <span>+16.4% de ganho de gás</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "medalhas" && (
                <motion.div
                  key="medalhas-tab"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4 h-full flex-1"
                >
                  <div className="border-b border-white/5 pb-4">
                    <h3 className="text-lg sm:text-xl font-bold font-display uppercase italic text-glow text-white">
                      Quadro de Honra & Pódios Recentes
                    </h3>
                    <p className="text-xs text-gray-400">
                      Nossa equipe se destaca nos principais circuitos e maratonas do país
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 my-2">
                    <div className="p-4 bg-brand-dark/60 rounded-xl border border-brand-neon/15 flex items-center gap-3">
                      <div className="text-2xl">🥇</div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">Maratona de S. Paulo</h4>
                        <p className="text-xs text-gray-400">12 atletas completando abaixo de 3h15m</p>
                      </div>
                    </div>

                    <div className="p-4 bg-brand-dark/60 rounded-xl border border-brand-neon/15 flex items-center gap-3">
                      <div className="text-2xl">🏆</div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">Circuito das Estações</h4>
                        <p className="text-xs text-gray-400">E. Barbosa: 3º Lugar Geral Feminino nos 10K</p>
                      </div>
                    </div>

                    <div className="p-4 bg-brand-dark/60 rounded-xl border border-brand-neon/15 flex items-center gap-3">
                      <div className="text-2xl">🥈</div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">Meia do Rio (21K)</h4>
                        <p className="text-xs text-gray-400">42 recordes pessoais (PR) batidos pelo grupo</p>
                      </div>
                    </div>

                    <div className="p-4 bg-brand-dark/60 rounded-xl border border-brand-neon/15 flex items-center gap-3">
                      <div className="text-2xl">👟</div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">Desafio da Montanha</h4>
                        <p className="text-xs text-gray-400">Troféu de maior delegação inscrita</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>

        </div>

        {/* BOTTOM SECTION: Live Athlete records list & PACE SIMULATOR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-8 border-t border-white/5" id="results-bottom-tools">
          
          {/* Athlete records widget (Races & medals showcase) */}
          <div className="bg-brand-card/40 border border-brand-neon/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold font-display uppercase tracking-wider text-white">
                  Casos de Superação Recentes
                </h3>
              </div>
              
              <div className="space-y-4">
                {accomplishments.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 rounded-xl bg-brand-dark/50 border border-white/5 hover:border-brand-neon/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <span className="font-bold text-xs text-white sm:text-sm">{item.name}</span>
                        <div className="text-xxs sm:text-xs text-gray-500 uppercase">{item.metric}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-right">
                      <span className="text-gray-500 line-through sm:inline hidden">{item.initial}</span>
                      <span className="text-brand-neon-light font-bold text-glow">{item.current}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Pace and VO2 Max projection tool (Scientific/gamification simulator) */}
          <div className="bg-brand-card/45 border border-brand-neon/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-brand-cyan/5 rounded-full blur-[40px]" />
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-brand-cyan" />
                <h3 className="text-lg font-bold font-display uppercase tracking-wider text-white">
                  Simulador de Evolução Científica
                </h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Insira o seu pace médio atual e o período pretendido de dedicação para projetar a estimativa científica da sua evolução baseado na planilha Next.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xxs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Meu Pace Atual (min/km)
                  </label>
                  <select
                    value={currentPace}
                    onChange={(e) => {
                      setCurrentPace(e.target.value);
                      setSimulatedResult(null);
                    }}
                    className="w-full bg-brand-dark/80 border border-white/10 rounded-lg p-2.5 text-xs font-mono text-white focus:outline-none focus:border-brand-neon/70"
                  >
                    <option value="07:30">07:30 min/km</option>
                    <option value="07:00">07:00 min/km</option>
                    <option value="06:30">06:30 min/km</option>
                    <option value="06:00">06:00 min/km</option>
                    <option value="05:30">05:30 min/km</option>
                    <option value="05:00">05:00 min/km</option>
                    <option value="04:45">04:45 min/km</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xxs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Semanas de Planilha
                  </label>
                  <select
                    value={weeksCommitment}
                    onChange={(e) => {
                      setWeeksCommitment(parseInt(e.target.value));
                      setSimulatedResult(null);
                    }}
                    className="w-full bg-brand-dark/80 border border-white/10 rounded-lg p-2.5 text-xs font-mono text-white focus:outline-none focus:border-brand-neon/70"
                  >
                    <option value={4}>4 Semanas (Básico)</option>
                    <option value={8}>8 Semanas (Intermediário)</option>
                    <option value={12}>12 Semanas (Foco Prova)</option>
                    <option value={24}>24 Semanas (Ciclo Completo)</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={runSimulator}
                  className="flex-1 cursor-pointer bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded-sm text-xs transition-all duration-300 font-display uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                >
                  <Play className="w-4 h-4 fill-white" />
                  Calcular Evolução
                </button>
                {simulatedResult && (
                  <button
                    onClick={() => setSimulatedResult(null)}
                    className="cursor-pointer border border-white/15 hover:border-brand-neon/40 px-3 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Simulated output results drawer panel */}
            <AnimatePresence>
              {simulatedResult && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="mt-6 pt-4 border-t border-brand-cyan/20 bg-brand-cyan/5 p-4 rounded-xl border border-brand-cyan/15 flex items-center justify-between"
                  id="simulator-results"
                >
                  <div className="space-y-1">
                    <span className="text-xxs font-mono text-brand-cyan uppercase font-bold tracking-widest">
                      Pace Estimado Próximo Passo:
                    </span>
                    <div className="text-2xl sm:text-3xl font-black font-display italic text-white tracking-tight animate-pulse">
                      {simulatedResult.pace}
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="bg-emerald-500/20 text-emerald-400 font-bold font-mono px-2 py-0.5 rounded text-xxs inline-block">
                      {simulatedResult.improvement}
                    </div>
                    <div className="text-gray-400 text-xxs block font-mono">
                      VO2: {simulatedResult.vosMax}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
