import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Calendar, Users, Trophy, Play, CheckCircle2, MessageCircle } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animated counters state
  const [stats, setStats] = useState({
    athletes: 0,
    km: 0,
    races: 0,
  });

  useEffect(() => {
    setLoaded(true);

    // Progressive counter simulation for the stats
    const duration = 2000; // ms
    const startTime = performance.now();

    const animateStats = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve (easeOutQuad)
      const ease = progress * (2 - progress);

      setStats({
        athletes: Math.floor(ease * 542),
        km: Math.floor(ease * 12840),
        races: Math.floor(ease * 84),
      });

      if (progress < 1) {
        requestAnimationFrame(animateStats);
      }
    };

    requestAnimationFrame(animateStats);

    // Fallback if video fails
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Auto-play blocked or failed, using immersive gradient backup.");
      });
    }
  }, []);

  const handleStartClick = () => {
    const plansSection = document.getElementById("planos");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-16"
    >
      {/* Immersive background speed lines */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none z-1" />
      
      {/* Blurred glow balls in background */}
      <div className="absolute top-[20%] left-[10%] w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-brand-neon/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-purple-900/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Video Fullscreen Backing */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-10" />
        
        {/* Soft interactive radial purple light overlay over the video */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_#070311_85%] z-10 opacity-75" />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-35"
          poster="https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2000&auto=format&fit=crop"
        >
          {/* Public athletic/running stock background mp4 loop */}
          <source
            src="https://player.vimeo.com/external/340333331.sd.mp4?s=34a5d8520bf2f7cf4d173c3ee12467fdc3548e64&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-man-running-on-track-past-camera-40114-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dynamic speed-streak animations */}
      <div className="absolute top-[35%] left-0 right-0 h-1 overflow-hidden pointer-events-none z-1 opacity-20">
        <div className="h-full w-[40%] bg-gradient-to-r from-transparent via-brand-neon to-transparent animate-[speed-line_3.5s_linear_infinite]" />
      </div>
      <div className="absolute top-[65%] left-0 right-0 h-[2px] overflow-hidden pointer-events-none z-1 opacity-25">
        <div className="h-full w-[50%] bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-[speed-line_4.5s_linear_infinite_reverse]" />
      </div>

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-15 text-center flex flex-col items-center justify-center">
        {/* Upper Micro-Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-neon/10 border border-brand-neon/30 rounded-full mb-6"
          id="hero-badge"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-widest text-brand-neon-light uppercase">
            Alta Performance Ativada
          </span>
        </motion.div>

        {/* Big Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 25 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tight text-white uppercase italic leading-none mb-6 max-w-5xl"
          id="hero-title"
        >
          Corra além dos <br />
          <span className="bg-gradient-to-r from-white via-brand-neon-light to-brand-neon bg-clip-text text-transparent text-glow-neon">
            seus limites.
          </span>
        </motion.h1>

        {/* Subhead narrative section */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-gray-300 text-base sm:text-xl md:text-2xl max-w-3xl leading-relaxed mb-10 font-normal"
          id="hero-description"
        >
          Acompanhamento profissional, comunidade forte e evolução real para transformar sua performance no asfalto e na vida.
        </motion.p>

        {/* Hero Interactive button actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 15 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-none mb-16"
          id="hero-buttons"
        >
          <button
            onClick={handleStartClick}
            className="w-full sm:w-auto cursor-pointer bg-white text-black font-bold uppercase text-xs tracking-wider px-8 py-4 rounded-sm hover:bg-purple-100 transition-colors shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center justify-center gap-3.5 group"
            id="hero-btn-start"
          >
            <span>ENTRAR PARA O TIME</span>
            <CheckCircle2 className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Assisti+ao+v%C3%ADdeo+da+Next+e+gostaria+de+saber+como+funcionam+os+treinos+de+corrida%21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-700 text-zinc-100 font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-sm hover:border-brand-neon-light transition-all duration-300"
            id="hero-btn-whatsapp"
          >
            <MessageCircle className="w-4 h-4 text-brand-neon-light" />
            <span>SAIBA MAIS</span>
          </a>
        </motion.div>

        {/* Stats segment styled like a luxury race-HUD widget */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-full max-w-5xl"
          id="hero-stats-panel"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 bg-brand-card/50 backdrop-blur-xl border border-brand-neon/15 rounded-2xl p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.4)] relative">
            
            {/* Border glow shine */}
            <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-brand-neon to-transparent" />
            
            {/* Stat Item 1 */}
            <div className="flex flex-col items-center justify-center text-center p-3 relative group" id="stat-athletes">
              <div className="bg-brand-neon/10 p-3 rounded-full mb-3 text-brand-neon-light border border-brand-neon/25 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-1">
                +{stats.athletes}
              </div>
              <div className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                Atletas Ativos
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="flex flex-col items-center justify-center text-center p-3 relative group border-t sm:border-t-0 sm:border-x border-white/5" id="stat-km">
              <div className="bg-brand-neon/10 p-3 rounded-full mb-3 text-brand-neon-light border border-brand-neon/25 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-1">
                +{stats.km.toLocaleString("pt-BR")}k
              </div>
              <div className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                KM Percorridos
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="flex flex-col items-center justify-center text-center p-3 relative group border-t sm:border-t-0 border-white/5" id="stat-races">
              <div className="bg-brand-neon/10 p-3 rounded-full mb-3 text-brand-neon-light border border-brand-neon/25 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-1">
                +{stats.races}
              </div>
              <div className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                Provas Concluídas
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
