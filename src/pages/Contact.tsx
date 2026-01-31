import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Calendar, Mail, Send, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import Container from "../components/Container";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/TON_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background Decoratif */}
      <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-purple-300/30 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-300/30 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />

      <Container>
        <div className="py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-start">
          
          {/* COLONNE GAUCHE : TEXTE & CALENDLY */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
          >
            <span className="text-blue-600 font-bold tracking-wider text-xs uppercase">Lançons votre projet</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Parlons de votre <br/>transformation digitale.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Vous avez un projet de développement ? Notre équipe vous répond sous 24h avec une première 
              analyse de faisabilité et une proposition de roadmap détaillée.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Email professionnel</div>
                  <div className="text-slate-900 font-semibold">contact@novytris.com</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-lg shadow-blue-900/20">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Préférez un échange direct ?</h3>
                    <p className="text-blue-100 text-sm mt-1">Planifiez un rendez-vous de 30 minutes pour discuter de votre projet en détail.</p>
                    <a 
                      href="https://calendly.com/TON-LIEN" 
                      target="_blank" 
                      rel="noreferrer"
                      className="mt-4 inline-block px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors"
                    >
                      Planifier un entretien
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLONNE DROITE : FORMULAIRE GLASS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-3xl border border-white/50 bg-white/60 backdrop-blur-xl p-8 shadow-2xl shadow-slate-200/50"
          >
            <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold text-xl">
                <MessageSquare className="w-5 h-5 text-blue-500"/>
                Demande de devis
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Nom</label>
                    <input
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl p-3 transition-all outline-none placeholder:text-slate-400"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Email</label>
                    <input
                        name="email"
                        required
                        type="email"
                        placeholder="name@entreprise.fr"
                        className="w-full bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl p-3 transition-all outline-none placeholder:text-slate-400"
                    />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Entreprise</label>
                <input
                    name="company"
                    placeholder="Nom de votre société"
                    className="w-full bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl p-3 transition-all outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Votre projet</label>
                <textarea
                    name="message"
                    required
                    placeholder="Décrivez votre besoin : objectifs métier, fonctionnalités attendues, contraintes techniques, budget prévisionnel..."
                    className="w-full bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl p-3 min-h-[160px] transition-all outline-none placeholder:text-slate-400 resize-none"
                />
              </div>

              <button 
                disabled={status === "ok"}
                className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "idle" && <>Envoyer la demande <Send className="w-4 h-4" /></>}
                {status === "ok" && <>Demande envoyée <CheckCircle className="w-5 h-5" /></>}
                {status === "err" && <>Erreur, veuillez réessayer <AlertCircle className="w-5 h-5" /></>}
              </button>

              {status === "ok" && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} className="p-3 bg-green-50 text-green-700 rounded-lg text-sm text-center">
                    Merci pour votre demande. Nous vous recontactons rapidement.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}