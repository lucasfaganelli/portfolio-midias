import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, BarChart, Star } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Visão Analítica",
    desc: "Background em tecnologia garante entendimento profundo de algoritmos e métricas.",
  },
  {
    icon: Zap,
    title: "Criatividade",
    desc: "Conteúdos que capturam atenção nos primeiros 3 segundos e prendem até o final.",
  },
  {
    icon: BarChart,
    title: "Dados + Arte",
    desc: "Decisões baseadas em dados combinadas com storytelling e identidade visual.",
  },
  {
    icon: Star,
    title: "Resultado Real",
    desc: "Foco em métricas que importam: alcance, retenção, seguidores e conversões.",
  },
];

export default function DifferentialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="diferencial"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "#161616" }}
    >
      {/* Orbs */}
      <div className="orb-purple w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      <div className="max-w-5xl mx-auto px-6 text-center" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Diferencial</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Por Que Me <span className="text-gradient">Escolher?</span>
          </h2>
        </motion.div>

        {/* Central highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          {/* Glowing border card */}
          <div className="relative rounded-2xl p-px bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
            <div className="bg-[#0D0D0D] rounded-2xl p-10 sm:p-14 relative">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />

              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center pulse-glow">
                  <Zap size={28} className="text-white" fill="currentColor" />
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                  Meu diferencial é unir{" "}
                  <span className="text-gradient">tecnologia</span> e{" "}
                  <span className="text-gradient">criatividade</span> para criar
                  conteúdos estratégicos que geram{" "}
                  <span className="text-foreground">atenção</span>,{" "}
                  <span className="text-foreground">retenção</span> e{" "}
                  <span className="text-foreground">crescimento real.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="skill-card text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <pillar.icon size={20} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
