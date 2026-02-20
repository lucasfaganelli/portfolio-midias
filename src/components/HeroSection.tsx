import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import lucasProfile from "@/assets/lucas-profile.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.75)" }} />

      {/* Floating orbs */}
      <div className="orb-purple w-[600px] h-[600px] -top-32 -left-32 opacity-60" />
      <div className="orb-blue w-[500px] h-[500px] bottom-0 right-0 opacity-50" />

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(262 83% 58% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(262 83% 58% / 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Profile photo + badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          {/* Foto premium */}
            <div className="relative mb-2 flex justify-center">
              {/* Glow suave */}
              <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />

              {/* Borda gradiente */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-br from-primary via-purple-500 to-secondary">
                <img
                  src={lucasProfile}
                  alt="Lucas Vinicius"
                  className="
                    w-36 h-36
                    sm:w-44 sm:h-44
                    rounded-full
                    object-cover
                    object-center
                    scale-110
                    contrast-105
                    saturate-110
                    shadow-2xl
                  "
                />
              </div>
            </div>
          <div className="flex items-center gap-2 tag-purple">
            <Sparkles size={12} />
            Criador de Conteúdo &amp; Social Media
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
        >
          <span className="text-foreground">Lucas</span>{" "}
          <span className="text-gradient">Faganelli</span>
        </motion.h1>

        {/* Subtitle role */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
          className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
        >
          Criador de Conteúdo &amp;{" "}
          <span className="text-secondary">Social Media em Formação</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.55 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Ajudo marcas e perfis a crescer através de{" "}
          <span className="text-foreground font-medium">
            vídeos curtos estratégicos
          </span>
          , criativos e de alta retenção.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#portfolio" className="btn-primary flex items-center gap-2">
            <Play size={16} fill="currentColor" />
            Ver Portfólio
          </a>
          <a href="#contato" className="btn-outline flex items-center gap-2">
            Entrar em Contato
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.9 }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "3+", label: "Plataformas" },
            { value: "100%", label: "Dedicação" },
            { value: "∞", label: "Criatividade" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
