import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const categories = [
  { id: "general", label: "Général", icon: "🎯" },
  { id: "tarifs", label: "Tarifs & Offres", icon: "💰" },
  { id: "services", label: "Services", icon: "⚙️" },
  { id: "securite", label: "Sécurité", icon: "🔒" },
  { id: "support", label: "Support", icon: "💬" },
];

const faqs = [
  {
    category: "general",
    question: "Qu'est-ce que Novytris ?",
    answer:
      "Novytris est une agence de développement spécialisée dans la conception d'applications web modernes, l'intégration de solutions d'intelligence artificielle et l'automatisation des processus métier. Nous travaillons avec les indépendants, PME et entreprises pour créer des solutions performantes, sûres et évolutives.",
  },
  {
    category: "general",
    question: "Dans quel secteur intervenez-vous ?",
    answer:
      "Nos services s'adressent à tout type de secteur : e-commerce, éducation, logistique, énergie, santé, artisanat, etc. Notre expertise nous permet de proposer des solutions adaptées à vos besoins spécifiques, quel que soit votre domaine.",
  },
  {
    category: "general",
    question: "Proposez-vous des solutions clé-en-main ?",
    answer:
      "Oui, selon votre budget et vos objectifs, nous pouvons vous proposer des sites web ou applications entièrement fonctionnelles, prêtes à l'emploi, comprenant : design, hébergement, nom de domaine, e-mails professionnels, etc.",
  },
  {
    category: "general",
    question: "Quelle est la durée moyenne d'un projet ?",
    answer:
      "Pour un site vitrine, le délai moyen est de 2 à 4 semaines. Pour une application web ou intégration avancée (IA, CRM, etc.), cela peut varier entre 1 à 3 mois selon la complexité.",
  },
  {
    category: "tarifs",
    question: "Quels sont vos tarifs ?",
    answer:
      "Nos prestations commencent à 499€ pour un site vitrine simple. Les projets plus avancés (applications web, intégrations IA, etc.) démarrent à 2499€. Pour des projets personnalisés, un devis sur-mesure est établi. Consultez notre page services pour plus de détails.",
  },
  {
    category: "tarifs",
    question: "Puis-je payer en plusieurs fois ?",
    answer:
      "Oui, nous proposons des facilités de paiement en 2 ou 3 fois sans frais pour les projets au-delà de 1000€.",
  },
  {
    category: "tarifs",
    question: "Proposez-vous un contrat de maintenance ?",
    answer:
      "Oui, nous proposons des contrats de maintenance mensuels ou annuels incluant mises à jour, sauvegardes, surveillance de sécurité et support prioritaire.",
  },
  {
    category: "services",
    question: "Quels services propose Novytris ?",
    answer:
      "Nous proposons : développement de sites web vitrine ou e-commerce, intégration de solutions IA (chatbots, automatisation...), création d'applications web sur-mesure, dashboards, sécurisation de vos systèmes, création d'API, optimisation SEO et plus encore.",
  },
  {
    category: "services",
    question: "Faites-vous aussi des interfaces mobiles ?",
    answer:
      "Oui, selon votre projet, nous pouvons créer des applications mobiles ou PWA (Progressive Web Apps) compatibles iOS et Android, ou générer des versions mobiles à partir de votre application web.",
  },
  {
    category: "services",
    question: "Intégrez-vous des solutions externes (CRM, ERP, WordPress...) ?",
    answer:
      "Bien sûr, nous pouvons connecter votre site ou application à des outils tiers grâce à des API (ex: WordPress, Hubspot, Stripe, Zapier, Dolibarr, etc.).",
  },
  {
    category: "securite",
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Oui. Toutes nos solutions incluent des certificats SSL, des sauvegardes régulières, un hébergement sécurisé et des mesures de protection contre les attaques (DDoS, injections, etc.). Pour les applications avancées, nous offrons des solutions conformes RGPD.",
  },
  {
    category: "securite",
    question: "Qui détient les droits sur mon site ?",
    answer:
      "Vous êtes entièrement propriétaire de votre site ou application une fois livré. Vous pouvez le faire héberger ailleurs, transférer les sources, etc.",
  },
  {
    category: "securite",
    question: "Puis-je accéder à mes données si je résilie ?",
    answer:
      "Oui, vous pouvez exporter ou récupérer toutes vos données (fichiers, base de données, etc.) avant la résiliation.",
  },
  {
    category: "support",
    question: "Proposez-vous un support après livraison ?",
    answer:
      "Oui, tous nos projets incluent au minimum 1 mois de support gratuit. Des extensions ou contrats annuels de maintenance peuvent être souscrits.",
  },
  {
    category: "support",
    question: "Comment contacter l'équipe Novytris ?",
    answer:
      "Vous pouvez nous contacter via le formulaire de contact, par email, ou via nos réseaux sociaux. Les clients sous contrat de support bénéficient d'un support prioritaire.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-start justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex-1">
          <h3 className="font-bold text-lg text-slate-900 pr-4">{faq.question}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // Premier item ouvert par défaut

  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl pointer-events-none" />

      <Container>
        <div className="py-20 relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              Centre d'aide
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Foire Aux Questions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Trouvez des réponses aux questions les plus fréquentes sur nos services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* CATEGORY TABS */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setOpenItems(new Set()); // Reset les items ouverts
                    }}
                    className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                      selectedCategory === cat.id
                        ? "bg-slate-900 text-white shadow-lg"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <span className="mr-2">{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ ITEMS */}
            <div className="space-y-4 mb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {filteredFaqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      faq={faq}
                      isOpen={openItems.has(index)}
                      onToggle={() => toggleItem(index)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 text-white text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Notre équipe se tient à votre disposition pour répondre à toutes vos questions.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Contacter le support
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}