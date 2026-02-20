import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle, Instagram, ArrowRight, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="orb-blue w-[500px] h-[500px] bottom-0 left-0 opacity-20" />
      <div className="orb-purple w-[400px] h-[400px] top-0 right-0 opacity-20" />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <div className="section-divider mb-16" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Contato</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Vamos <span className="text-gradient">Trabalhar Juntos?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            Pronto para levar seu perfil ou marca ao próximo nível? Entre em
            contato e vamos conversar!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {/* Email */}
          <motion.a
            href="mailto:lucasviniciusfaganeli@outlook.com"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 text-center group cursor-pointer block"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail size={24} className="text-foreground" />
            </div>
            <div className="font-display font-bold text-foreground mb-1">
              Email
            </div>
            <div className="text-muted-foreground text-sm">
              lucasviniciusfaganeli@outlook.com
            </div>
            <div className="mt-3 flex items-center justify-center gap-1 text-primary text-xs font-medium">
              Enviar email <ArrowRight size={12} />
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/5514998245716"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="glass-card rounded-2xl p-6 text-center group cursor-pointer block"
          >
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              style={{ background: "linear-gradient(135deg, hsl(142 76% 36%), hsl(142 76% 50%))" }}
            >
              <MessageCircle size={24} className="text-foreground" />
            </div>
            <div className="font-display font-bold text-foreground mb-1">
              WhatsApp
            </div>
            <div className="text-muted-foreground text-sm">
              Conversar no WhatsApp
            </div>
            <div
              className="mt-3 flex items-center justify-center gap-1 text-xs font-medium"
              style={{ color: "hsl(142 76% 56%)" }}
            >
              Abrir chat <ArrowRight size={12} />
            </div>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/lucas_faganelli"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card rounded-2xl p-6 text-center group cursor-pointer block"
          >
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              style={{ background: "linear-gradient(135deg, hsl(330 80% 60%), hsl(270 80% 60%), hsl(30 100% 60%))" }}
            >
              <Instagram size={24} className="text-foreground" />
            </div>
            <div className="font-display font-bold text-foreground mb-1">
              Instagram
            </div>
            <div className="text-muted-foreground text-sm">
              @lucas_faganelli
            </div>
            <div
              className="mt-3 flex items-center justify-center gap-1 text-xs font-medium"
              style={{ color: "hsl(330 80% 70%)" }}
            >
              Ver perfil <ArrowRight size={12} />
            </div>
          </motion.a>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative rounded-2xl p-px bg-gradient-to-br from-primary to-secondary overflow-hidden"
        >
          <div className="rounded-2xl p-8 sm:p-10 text-center relative" style={{ background: "#0D0D0D" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Pronto para começar? 🚀
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Me manda uma mensagem e vamos criar algo incrível juntos.
              </p>
              <a
                href="https://wa.me/5514998245716"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Send size={16} />
                Enviar Mensagem
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
