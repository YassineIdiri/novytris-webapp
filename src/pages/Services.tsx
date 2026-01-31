import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Check, Blocks, Zap, RefreshCw, ArrowRight, Sparkles } from "lucide-react";
import Container from "../components/Container";
import CTA from "../components/CTA";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    title: "Application Web & SaaS B2B",
    tagline: "Votre produit digital de A à Z",
    desc: "Nous concevons des plateformes SaaS complètes pour digitaliser vos processus métier et générer des revenus récurrents.",
    icon: <Blocks className="w-7 h-7 text-blue-600" />,
    benefits: [
      "Architecture multi-tenant scalable",
      "Dashboard analytique & reporting",
      "Gestion des rôles et permissions",
      "API REST documentée",
      "Système de facturation intégré",
      "Déploiement Cloud sécurisé",
    ],
    useCases: ["Gestion interne", "Marketplace", "Outil métier spécialisé"],
    highlight: true,
    price: "À partir de 25k€",
  },
  {
    title: "Automatisation & Intégrations",
    tagline: "Connectez vos outils, économisez du temps",
    desc: "Nous automatisons vos workflows et connectons vos systèmes existants pour éliminer les tâches manuelles chronophages.",
    icon: <Zap className="w-7 h-7 text-amber-600" />,
    benefits: [
      "Connexion API entre vos outils",
      "Webhooks & synchronisation temps réel",
      "Automatisation de processus métier",
      "Import/Export de données massives",
      "Intégration ERP, CRM, comptabilité",
      "Pipeline CI/CD pour vos équipes",
    ],
    useCases: ["Sync CRM ↔ Facturation", "Export auto comptable", "Workflow validation"],
    highlight: false,
    price: "À partir de 8k€",
  },
  {
    title: "Modernisation d'applications",
    tagline: "Transformez votre legacy en système moderne",
    desc: "Migration technique, refonte UX et optimisation de votre application existante pour gagner en performance et maintenabilité.",
    icon: <RefreshCw className="w-7 h-7 text-emerald-600" />,
    benefits: [
      "Audit technique complet",
      "Migration progressive sans interruption",
      "Refonte UX/UI moderne",
      "Optimisation des performances",
      "Mise en conformité sécurité (RGPD, etc.)",
      "Documentation technique complète",
    ],
    useCases: ["PHP → Stack moderne", "Monolithe → Microservices", "Desktop → Web"],
    highlight: false,
    price: "Sur devis",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Découverte",
    desc: "Audit de vos besoins, analyse de l'existant et définition des objectifs business mesurables.",
  },
  {
    number: "02",
    title: "Conception",
    desc: "Architecture technique, maquettes UX/UI, spécifications fonctionnelles et estimation budgétaire.",
  },
  {
    number: "03",
    title: "Développement",
    desc: "Sprints agiles de 2 semaines, démos régulières, tests automatisés et intégration continue.",
  },
  {
    number: "04",
    title: "Déploiement",
    desc: "Mise en production sécurisée, formation de vos équipes, documentation et support post-lancement.",
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl pointer-events-none" />

      <Container>
        <div className="py-20 relative z-10">
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Nos expertises
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Services & Expertises
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Nous transformons vos défis métier en solutions techniques performantes.
            </p>
          </div>

          {/* SERVICES CARDS */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-3 gap-8 mb-24"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col
                  ${
                    service.highlight
                      ? "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-2xl shadow-blue-900/10"
                      : "bg-white border border-slate-200 shadow-lg hover:shadow-xl"
                  }
                `}
              >
                {service.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    ⭐ Notre signature
                  </div>
                )}

                {/* ICON & HEADER */}
                <div className="mb-6">
                  <div
                    className={`inline-flex p-3 rounded-2xl mb-4 ${
                      service.highlight ? "bg-white/80" : "bg-slate-50"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-3">{service.tagline}</p>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>

                {/* BENEFITS */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Livrables inclus
                  </h4>
                  <ul className="space-y-2.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 text-sm text-slate-700">
                        <Check
                          className={`w-5 h-5 shrink-0 ${
                            service.highlight ? "text-blue-600" : "text-slate-400"
                          }`}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* USE CASES */}
                <div className="pt-6 border-t border-slate-200/60 mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Exemples d'usage
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase) => (
                      <span
                        key={useCase}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PRICE & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200/60">
                  <a
                    href="/contact"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                      service.highlight
                        ? "bg-slate-900 text-white shadow-lg hover:shadow-xl"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* PROCESS SECTION */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Notre méthodologie éprouvée
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Un processus transparent et agile pour garantir la réussite de votre projet,
                de la conception au déploiement.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={step.number}
                  className="relative group"
                >
                  {/* Connector line (pas sur le dernier) */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-200 to-transparent" />
                  )}

                  <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 text-blue-600 font-bold text-lg mb-4">
                      {step.number}
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <CTA />
        </div>
      </Container>
    </div>
  );
}