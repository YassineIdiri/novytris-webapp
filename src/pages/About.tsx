import { motion } from "framer-motion";
import { ExternalLink, User, Target, Zap, Shield } from "lucide-react";
import Container from "../components/Container";
import CTA from "../components/CTA";

export default function About() {
  return (
    <div className="relative bg-slate-50 min-h-screen">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl pointer-events-none" />

      <Container>
        <div className="py-20 max-w-4xl mx-auto relative z-10">
          {/* HEADER SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">
              À propos de Novytris
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Expertise technique, résultats concrets.
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Nous transformons vos défis métier en solutions digitales performantes. 
              De l'architecture au déploiement, nous accompagnons les entreprises ambitieuses 
              dans leur croissance digitale.
            </p>
          </motion.div>

          {/* SECTION POURQUOI NOVYTRIS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Pourquoi choisir Novytris ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-slate-900 mb-2">Livraison rapide</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Premier prototype en 2-4 semaines. Pas de tunnel interminable, vous voyez le produit évoluer à chaque sprint.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-slate-900 mb-2">Code production-ready</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Architecture solide, tests automatisés, CI/CD intégré. Votre app est prête à scaler dès le jour 1.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-slate-900 mb-2">Budget maîtrisé</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Devis clair, pas de surprises. Vous savez exactement ce que vous payez et ce que vous obtenez.
                </p>
              </div>
            </div>
          </motion.div>


          {/* SECTION FONDATEUR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur group-hover:opacity-60 transition duration-500" />
                <div className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white shadow-md">
                      <User className="w-10 h-10 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">Yassine Idiri</h3>
                      <p className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full inline-block">
                        Fondateur & Architecte Lead
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                     Architecte Full-stack et pilote de projets, diplomé d'un Master en informatique.
                     Spécialisé dans le développement d'applications web avec Spring Boot et Angular. 
                  </p>
                  <p className="text-sm text-slate-500 italic  mb-4 mt-2">
                    Convaincu qu'un bon code doit être simple, testé et documenté.
                  </p>

                  <a
                    href="https://www.linkedin.com/in/yassine-idiri"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    Voir le profil complet <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CTA />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}