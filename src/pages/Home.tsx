import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Code2, Rocket, ShieldCheck, Zap } from "lucide-react";
import Container from "../components/Container";
import CTA from "../components/CTA";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-screen">
      {/* Background Decoratif */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-300/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-300/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <Container>
        <div className="py-20 relative z-10">
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            {/* COLONNE GAUCHE */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              {/* LOGO AREA */}
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                <div className="px-3 py-1 rounded-full bg-white/60 border border-slate-200 backdrop-blur-sm text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Développement logiciel sur mesure
                </div>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
              >
                Transformez vos idées en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  solutions digitales
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                Novytris conçoit et développe des applications web et mobile{" "}
                <strong>robustes et évolutives</strong> qui digitalisent vos processus métier.
                Architecture solide, code maintenable, sécurité renforcée, nous créons des solutions pensées pour durer.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group relative px-6 py-3.5 rounded-full bg-slate-900 text-white font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 transition-all hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">Discutons de votre projet</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Link>

                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1 shadow-sm"
                >
                  Découvrir nos services
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  Notre stack technique
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "Docker", "CI/CD"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-md text-xs font-medium text-slate-600 shadow-sm hover:scale-105 transition-transform cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* COLONNE DROITE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl transform scale-90" />

              <div className="relative rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-8 shadow-2xl shadow-slate-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900">Nos engagements</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    { text: "Architecture sécurisée et évolutive", icon: <ShieldCheck className="w-5 h-5 text-emerald-500" /> },
                    { text: "Performance optimale et UX soignée", icon: <Zap className="w-5 h-5 text-amber-500" /> },
                    { text: "Code propre, testé et documenté", icon: <Code2 className="w-5 h-5 text-blue-500" /> },
                    { text: "Déploiement automatisé et suivi qualité", icon: <Rocket className="w-5 h-5 text-purple-500" /> },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/50 border border-transparent hover:border-slate-200 hover:bg-white transition-colors cursor-default"
                    >
                      <div className="shrink-0">{item.icon}</div>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-200/60 text-center">
                  <p className="text-xs text-slate-500 italic">
                    "L'excellence technique au service de vos ambitions"
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <CTA />
          </motion.section>
        </div>
      </Container>
    </div>
  );
}