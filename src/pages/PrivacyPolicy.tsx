import { motion } from "framer-motion";
import { Shield, Database, Eye, Lock, UserX, FileText, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sections = [
  {
    number: "01",
    icon: <Database className="w-5 h-5 text-blue-600" />,
    title: "Données que nous collectons",
    subsections: [
      {
        subtitle: "Données personnelles",
        content:
          "Nous pouvons collecter les informations suivantes lorsque vous êtes en interaction avec notre site ou nos services :",
        bullets: [
          "Nom et prénom",
          "Adresse e-mail",
          "Numéro de téléphone",
          "Nom de votre entreprise",
          "Adresse professionnelle",
          "Données liées à vos projets ou demandes spécifiques",
        ],
      },
      {
        subtitle: "Données d'utilisation",
        content:
          "Lors de votre visite sur notre site, des informations techniques peuvent être automatiquement recueillies, telles que votre adresse IP, le type de navigateur utilisé, les pages visitées, la durée de navigation et d'autres données statistiques anonymes.",
      },
    ],
  },
  {
    number: "02",
    icon: <Eye className="w-5 h-5 text-purple-600" />,
    title: "Utilisation de vos données",
    content: "Nous utilisons les données collectées afin de :",
    bullets: [
      "Répondre à vos demandes et vous fournir des services de qualité",
      "Améliorer nos produits, notre communication et l'expérience utilisateur",
      "Vous envoyer des emails d'informations ou de prospection (si accepté par vous)",
      "Analyser l'usage du site pour optimiser nos performances",
      "Garantir la sécurité de nos services et prévenir toute fraude",
    ],
  },
  {
    number: "03",
    icon: <FileText className="w-5 h-5 text-amber-600" />,
    title: "Cookies",
    content:
      "Nous utilisons des cookies pour assurer le bon fonctionnement du site, analyser son utilisation et améliorer l'expérience utilisateur. Vous pouvez choisir de refuser ou désactiver les cookies via les paramètres de votre navigateur.",
  },
  {
    number: "04",
    icon: <Lock className="w-5 h-5 text-emerald-600" />,
    title: "Sécurité de vos données",
    content:
      "Nous mettons en place des mesures de sécurité techniques et organisationnelles afin de protéger vos informations contre tout accès non autorisé, modification ou destruction. Cependant, aucune transmission de données sur internet n'est totalement sécurisée. Nous ne pouvons garantir une sécurité absolue.",
  },
  {
    number: "05",
    icon: <Shield className="w-5 h-5 text-blue-600" />,
    title: "Partage avec des tiers",
    content:
      "Vos données ne sont jamais vendues. Elles peuvent toutefois être partagées avec des services tiers de confiance uniquement dans le cadre de la réalisation de nos services (ex. hébergement, messagerie, formulaires externes), et toujours dans le respect de cette politique.",
  },
  {
    number: "06",
    icon: <UserX className="w-5 h-5 text-red-600" />,
    title: "Mineurs",
    content:
      "Nos services ne sont pas destinés aux personnes de moins de 18 ans. Nous ne collectons pas sciemment de données personnelles de mineurs. Si vous pensez qu'un mineur nous a transmis des données, merci de nous contacter afin que nous les supprimions.",
  },
  {
    number: "07",
    icon: <FileText className="w-5 h-5 text-slate-600" />,
    title: "Modifications de la politique",
    content:
      "Nous pouvons être amenés à mettre à jour cette politique de confidentialité. Toute modification sera publiée directement sur cette page avec une mise à jour de la date en haut du document. Nous vous invitons donc à la consulter régulièrement.",
  },
];

export default function PrivacyPolicy() {
  const lastUpdated = "30 janvier 2026";

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-purple-100/40 to-transparent blur-3xl pointer-events-none" />

      <Container>
        <div className="py-20 max-w-4xl mx-auto relative z-10">
          {/* HEADER */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Vos données en sécurité
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-slate-600 text-lg mb-6">
              Dernière mise à jour : <span className="font-semibold">{lastUpdated}</span>
            </p>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Chez Novytris, nous accordons une grande importance à la confidentialité et à la
              protection de vos données personnelles. Cette politique de confidentialité a pour
              objectif de vous informer sur la manière dont nous collectons, utilisons, stockons
              et protégeons vos informations lorsque vous utilisez notre site web ou nos services.
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
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-purple-200 group-hover:bg-purple-50 transition-colors">
                        {section.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-slate-400 tracking-wider">
                          SECTION {section.number}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-16 text-slate-600 leading-relaxed space-y-4">
                    {section.content && <p>{section.content}</p>}

                    {/* Bullets list */}
                    {section.bullets && (
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-purple-600 mt-1.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Subsections */}
                    {section.subsections && (
                      <div className="space-y-6">
                        {section.subsections.map((sub, i) => (
                          <div key={i}>
                            <h3 className="font-semibold text-slate-900 mb-2">{sub.subtitle}</h3>
                            {sub.content && <p className="mb-3">{sub.content}</p>}
                            {sub.bullets && (
                              <ul className="space-y-2">
                                {sub.bullets.map((bullet, j) => (
                                  <li key={j} className="flex gap-3">
                                    <span className="text-purple-600 mt-1.5">•</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
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
            className="mt-12"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Contact</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Pour toute question relative à cette politique ou à la gestion de vos données,
                    vous pouvez nous contacter.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 font-semibold transition-all hover:-translate-y-0.5"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* VOS DROITS (Section bonus importante) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 rounded-xl bg-purple-50 border border-purple-100"
          >
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600" />
              Vos droits RGPD
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de
              suppression et de portabilité de vos données personnelles. Vous pouvez également vous
              opposer au traitement de vos données ou demander leur limitation. Pour exercer ces
              droits, contactez-nous via notre{" "}
              <Link to="/contact" className="text-purple-600 font-semibold hover:underline">
                formulaire de contact
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}