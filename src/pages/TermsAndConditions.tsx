import { motion } from "framer-motion";
import { FileText, Shield, AlertCircle, Scale, Mail } from "lucide-react";
import Container from "../components/Container";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sections = [
  {
    number: "01",
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    title: "Introduction",
    content: `Bienvenue sur le site de Novytris. En accédant à ce site ou en utilisant nos services, vous acceptez pleinement et sans réserve les présentes Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.`,
  },
  {
    number: "02",
    icon: <FileText className="w-5 h-5 text-purple-600" />,
    title: "Définitions",
    content: null,
    list: [
      {
        term: "Service",
        def: "désigne le site web novytris.com et l'ensemble des prestations proposées par Novytris.",
      },
      {
        term: "Utilisateur",
        def: "désigne toute personne accédant au site ou utilisant les services proposés.",
      },
      {
        term: "Contenu",
        def: "désigne toute information, donnée, texte, image ou média publié sur le site.",
      },
    ],
  },
  {
    number: "03",
    icon: <Shield className="w-5 h-5 text-emerald-600" />,
    title: "Accès au Service",
    content: `L'accès au site est gratuit. Toutefois, certains services ou fonctionnalités peuvent être soumis à réservation, contrat ou devis. Novytris se réserve le droit de suspendre ou modifier l'accès au site à tout moment, notamment pour des raisons techniques ou de maintenance.`,
  },
  {
    number: "04",
    icon: <AlertCircle className="w-5 h-5 text-amber-600" />,
    title: "Responsabilités de l'Utilisateur",
    content: `Vous vous engagez à utiliser les services de manière légale et responsable. Il est interdit :`,
    bullets: [
      "D'introduire des virus, logiciels malveillants ou toute technologie nuisible.",
      "De tenter d'accéder de manière non autorisée à des données ou zones protégées du site.",
      "De porter atteinte à l'image, à la sécurité ou au fonctionnement du site.",
    ],
  },
  {
    number: "05",
    icon: <Scale className="w-5 h-5 text-blue-600" />,
    title: "Propriété intellectuelle",
    content: `L'ensemble du contenu publié sur le site (textes, images, logos, vidéos, code, etc.) est la propriété exclusive de Novytris ou fait l'objet d'une licence d'utilisation. Toute reproduction ou redistribution non autorisée est strictement interdite.`,
  },
  {
    number: "06",
    icon: <Shield className="w-5 h-5 text-purple-600" />,
    title: "Protection des données",
    content: `La collecte et l'utilisation de vos données personnelles sont régies par notre Politique de Confidentialité, que vous acceptez en utilisant nos services.`,
  },
  {
    number: "07",
    icon: <AlertCircle className="w-5 h-5 text-red-600" />,
    title: "Limitation de responsabilité",
    content: `Novytris ne pourra être tenu responsable en cas de dommages directs ou indirects résultant de l'utilisation du site, y compris en cas d'interruption, d'inexactitude des données ou de cyberattaque.`,
  },
  {
    number: "08",
    icon: <FileText className="w-5 h-5 text-slate-600" />,
    title: "Modification des CGU",
    content: `Novytris se réserve le droit de modifier ces CGU à tout moment. Toute modification sera publiée sur cette page avec une mise à jour de la date. L'utilisation continue du site après modification vaut acceptation des nouvelles conditions.`,
  },
  {
    number: "09",
    icon: <Scale className="w-5 h-5 text-emerald-600" />,
    title: "Droit applicable",
    content: `Les présentes CGU sont régies par le droit français. En cas de litige, seules les juridictions françaises seront compétentes.`,
  },
];

export default function TermsAndConditions() {
  const lastUpdated = "30 janvier 2026";

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-blue-100/40 to-transparent blur-3xl pointer-events-none" />

      <Container>
        <div className="py-20 max-w-4xl mx-auto relative z-10">
          {/* HEADER */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-semibold mb-6">
              <FileText className="w-4 h-4" />
              Document légal
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-slate-600 text-lg">
              Dernière mise à jour : <span className="font-semibold">{lastUpdated}</span>
            </p>
          </motion.div>

          {/* SECTIONS */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                        {section.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-slate-400 tracking-wider">
                          ARTICLE {section.number}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-16 text-slate-600 leading-relaxed space-y-4">
                    {section.content && <p>{section.content}</p>}

                    {/* Definitions list */}
                    {section.list && (
                      <dl className="space-y-3">
                        {section.list.map((item) => (
                          <div key={item.term} className="flex gap-2">
                            <dt className="font-semibold text-slate-900 min-w-[120px]">
                              « {item.term} »
                            </dt>
                            <dd className="text-slate-600">{item.def}</dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {/* Bullets list */}
                    {section.bullets && (
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-blue-600 mt-1.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CONTACT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Pour toute question relative à ces Conditions Générales, vous pouvez nous
                  contacter à l'adresse suivante :
                </p>
                <a
                  href="mailto:contact@novytris.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@novytris.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* FOOTER NOTE */}
          <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-100 text-center">
            <p className="text-sm text-slate-600">
              En continuant à utiliser nos services, vous acceptez les présentes conditions.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}