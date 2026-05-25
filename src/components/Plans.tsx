import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, ShieldCheck, Zap, X, HelpCircle, Flame, Trophy, Activity, MessageSquare } from "lucide-react";

export default function Plans() {
  const [billingPeriod, setBillingPeriod] = useState<"mensal" | "semestral">("mensal");
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<string | null>(null);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      badge: "Para Começar",
      price: { mensal: "R$ 149", semestral: "R$ 126" },
      period: "mês",
      icon: Activity,
      description: "Ideal para iniciantes no asfalto que querem sair do zero e firmar consistência de corrida de forma segura.",
      features: [
        "Planilha de corrida quinzenal",
        "Suporte ao atleta via app próprio",
        "Acesso à comunidade Next nacional",
        "1 Treino presencial coletivo por mês",
        "Feedback básico de métricas mensais",
      ],
      notIncluded: [
        "Acesso direto no WhatsApp do Headcoach",
        "Análise postural biomecânica de corrida",
        "Tenda vip Next com massoterapia em provas",
        "Cardápio nutricional associado",
      ],
      ctaText: "Escolher Starter",
      highlight: false,
      color: "from-purple-900/10 to-indigo-900/10",
      accent: "text-purple-400",
    },
    {
      id: "performance",
      name: "Performance",
      badge: "Mais Procurado",
      price: { mensal: "R$ 229", semestral: "R$ 194" },
      period: "mês",
      icon: Flame,
      description: "Nossa consultoria de ponta para atletas que buscam diminuir pace, competir em provas ou voar alto.",
      features: [
        "Planilha de corrida semanal altamente adaptativa",
        "WhatsApp exclusivo do treinador para ajustes rápidos",
        "Análise de vídeo de corrida (Biomecânica)",
        "Todos os treinos presenciais coletivos liberados",
        "Tenda VIP com Buffet, Gatorade & Masso em provas",
        "Metodologia de periodização em picos de VO2",
        "Descontos em marcas parceiras (Asics, Garmin)",
      ],
      notIncluded: [
        "Encontro individual mensal presencial",
        "Teste de Lactato sanguíneo e limiares estrito",
      ],
      ctaText: "Acelerar Performance",
      highlight: true,
      color: "from-brand-neon/15 to-purple-900/40",
      accent: "text-brand-neon-light",
    },
    {
      id: "elite",
      name: "Elite",
      badge: "Máximo Nível",
      price: { mensal: "R$ 449", semestral: "R$ 381" },
      period: "mês",
      icon: Trophy,
      description: "Orientação individualizada de nível profissional para ultramaratonistas, maratonistas sub-3h ou triatletas.",
      features: [
        "Tudo do plano Performance",
        "Grade de planilhas diária integrada (Garmin/Strava)",
        "Coaching de Headcoach com ligações quinzenais",
        "Teste de Lactato em pista e limiares de limiar aeróbico",
        "Cardápio esportivo mensal com nutri parceiro",
        "Análise biomecânica semestral em laboratório",
        "Kit oficial Next Premium (Camiseta de prova + Boné)",
        "Suporte preferencial e tática individualizada em maratonas",
      ],
      notIncluded: [],
      ctaText: "Garantir Vaga Elite",
      highlight: false,
      color: "from-purple-950/20 to-black/30",
      accent: "text-yellow-400",
    },
  ];

  const handleChoosePlan = (planName: string) => {
    // Lead user automatically to whatsapp passing details about plan billing
    const text = billingPeriod === "mensal" 
      ? `Olá! Tenho interesse em me matricular no plano *Next ${planName}* no formato Trimestral/Mensal.`
      : `Olá! Tenho interesse no plano semestral da Next e gostaria de garantir o desconto de 15% no pacote *Next ${planName}*.`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="planos"
      className="relative py-24 sm:py-32 bg-brand-dark/95 w-full overflow-hidden"
    >
      {/* Background graphic designs */}
      <div className="absolute top-[35%] right-[-15%] w-[400px] h-[400px] bg-brand-neon/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[350px] h-[350px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-black tracking-widest uppercase text-brand-neon-light mb-3 text-glow">
            INVESTIMENTO & METAS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase italic">
            Escolha seu{" "}
            <span className="bg-gradient-to-r from-brand-neon-light via-brand-neon to-brand-cyan bg-clip-text text-transparent text-glow-neon">
              Destino
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-lg">
            Planos adaptados ao seu bolso e reais ambições na corrida. Sem cláusulas de fidelidade confusas ou pegadinhas, conte com nossa entrega total de valor.
          </p>

          {/* Monthly vs Semestral Toggle */}
          <div className="mt-10 inline-flex items-center gap-3 bg-brand-card border border-white/5 p-1 rounded-full relative z-20">
            <button
              onClick={() => setBillingPeriod("mensal")}
              className={`px-6 py-2 rounded-full cursor-pointer text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                billingPeriod === "mensal"
                  ? "bg-brand-neon text-white neon-glow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Plano Mensal
            </button>
            <button
              onClick={() => setBillingPeriod("semestral")}
              className={`px-6 py-2 rounded-full cursor-pointer text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                billingPeriod === "semestral"
                  ? "bg-brand-neon text-white neon-glow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>Plano Semestral</span>
              <span className="bg-green-500/15 border border-green-500/30 text-green-400 text-glow text-[10px] font-mono px-1.5 py-0.5 rounded-full lowercase">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20" id="plans-card-grid">
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                whileHover={{ y: p.highlight ? -12 : -6 }}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-8 relative border transition-all duration-500 ${
                  p.highlight
                    ? "bg-zinc-900/40 border-2 border-purple-600/50 shadow-2xl scale-102 lg:scale-105 z-10"
                    : "bg-brand-card/30 border-white/5 hover:border-brand-neon/20 shadow-lg"
                }`}
                id={`plan-card-${p.id}`}
              >
                {/* Active Highlight header banner */}
                {p.highlight && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white font-black italic text-[8px] px-3.5 py-1 rounded-bl-sm tracking-wider uppercase z-20">
                    MAIS VENDIDO
                  </div>
                )}

                <div>
                  {/* Plan Identification Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-white/5 ${p.highlight ? "text-brand-neon-light" : "text-gray-400"}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        {!p.highlight && (
                          <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                            {p.badge}
                          </span>
                        )}
                        <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-wide text-white italic">
                          {p.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Pricing terms */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight text-glow-neon">
                      {billingPeriod === "mensal" ? p.price.mensal : p.price.semestral}
                    </span>
                    <span className="text-sm text-gray-400 font-mono">/{p.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 mb-8 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Included features split block */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 border-b border-white/5 pb-2">
                      Vantagens Inclusas:
                    </h4>
                    
                    <ul className="space-y-2.5">
                      {p.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                          <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                      
                      {/* Greyed out variables */}
                      {p.notIncluded.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-500 opacity-55 line-through">
                          <X className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Main Action buttons */}
                <button
                  onClick={() => handleChoosePlan(p.name)}
                  className={`w-full cursor-pointer py-3.5 rounded-sm font-bold uppercase tracking-wider text-xs transition-all duration-300 text-center ${
                    p.highlight
                      ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-950/40"
                      : "bg-zinc-900 border border-zinc-700 hover:border-purple-400 text-zinc-300"
                  }`}
                  id={`plan-btn-${p.id}`}
                >
                  {p.ctaText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic FAQ comparison question drawer */}
        <div className="bg-brand-card/30 border border-white/5 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6" id="plans-faq-panel">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white font-display uppercase">Dúvidas sobre o formato semestral?</h4>
            <p className="text-xs text-gray-400">
              O plano semestral pode ser quitado via pix com desconto ou parcelado em até 6x s/ juros no cartão de crédito.
            </p>
          </div>
          <button
            onClick={() => {
              const text = "Olá! Tenho uma dúvida técnica sobre os métodos de cobrança da Next.";
              window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(text)}`, "_blank");
            }}
            className="cursor-pointer border border-white/10 hover:border-brand-neon-light/40 hover:text-brand-neon-light px-5 py-3 rounded-lg text-xs font-mono uppercase text-gray-400 transition-colors shrink-0"
          >
            Fazer Pergunta
          </button>
        </div>

      </div>
    </section>
  );
}
