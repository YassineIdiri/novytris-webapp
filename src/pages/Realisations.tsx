import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { LayoutDashboard, Smartphone, Github } from "lucide-react";
import Container from "../components/Container";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: "Plateforme de dons en ligne",
    desc: "Solution de collecte de fonds digitale avec paiement sécurisé Stripe, génération de reçus fiscaux PDF et envoi email. Interface d'administration pour le suivi des donations.",
    stack: ["Spring Boot", "Angular", "Stripe API", "PostgreSQL"],
    icon: <LayoutDashboard className="w-6 h-6 text-blue-500" />,
    type: "Plateforme Web",
    image: "/images/3.jpeg",
  },
  {
    title: "Application de gestion de budget",
    desc: "Outil de suivi des dépenses personnelles avec authentification sécurisée, catégorisation des transactions et tableaux de bord analytiques pour visualiser vos finances.",
    stack: ["Spring Boot", "Angular", "JWT Auth", "Charts.js"],
    icon: <Smartphone className="w-6 h-6 text-purple-500" />,
    type: "Application Web",
    image: "/images/2.jpeg",
  },
  {
    title: "Jeu stratégique temps réel",
    desc: "Jeu en ligne basé sur la stratégie et la réflexion, avec système de grille interactive. Architecture GraphQL pour des performances optimales et expérience utilisateur fluide.",
    stack: ["NestJS", "GraphQL", "React", "Prisma"],
    icon: <Github className="w-6 h-6 text-emerald-500" />,
    type: "Application Web",
    image: "/images/1.jpeg",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-slate-200/50 to-transparent pointer-events-none" />

      <Container>
        <div className="py-20 relative z-10">
          
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Nos Réalisations</h1>
            <p className="mt-4 text-lg text-slate-600">
              Découvrez une sélection de projets représentatifs de notre expertise technique et 
              de notre capacité à résoudre des problématiques métier.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((p) => (
              <motion.div 
                key={p.title} 
                variants={cardVariant}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col"
              >
                {/* ZONE IMAGE */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10" />
                    <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                    
                    {/* Badge Type */}
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 text-xs font-bold bg-white/90 backdrop-blur text-slate-800 rounded-full uppercase tracking-wide shadow-sm">
                            {p.type}
                        </span>
                    </div>
                </div>

                {/* CONTENU TEXTE */}
                <div className="p-8 flex flex-col grow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                            {p.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {p.title}
                        </h3>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6 grow">
                        {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 mt-auto">
                        {p.stack.map((s) => (
                            <span key={s} className="px-3 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-500 border border-slate-200">
                            {s}
                            </span>
                        ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-20 text-center">
             <p className="text-slate-500 mb-4">Nos projets open-source et contributions techniques</p>
             <a href="https://github.com/yassineidiri" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">
                <Github className="w-4 h-4" /> Voir notre GitHub
             </a>
          </div>
        </div>
      </Container>
    </div>
  );
}