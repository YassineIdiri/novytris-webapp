import { Link } from "react-router-dom"; 
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50/50 backdrop-blur-xl pt-16 pb-8">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* COLONNE 1 : BRAND & SOCIAL */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">N</div>
              <span className="text-xl font-bold text-slate-900">Novytris</span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm mb-6">
              Spécialisé dans le développement d'applications web et mobile. Nous accompagnons les entreprises 
              dans leur transformation digitale.
            </p>
            
            {/* LISTE DES RÉSEAUX SOCIAUX */}
            <div className="flex flex-wrap gap-3">
              <SocialLink href="https://github.com/yassineidiri" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/company/novytris/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/novytris/" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
              <SocialLink href="https://www.instagram.com/novytris/" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialLink href="https://www.facebook.com/novytris" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
              <SocialLink href="https://www.youtube.com/@novytris" icon={<Youtube className="w-5 h-5" />} label="YouTube" />
            </div>
          </div>

          {/* COLONNE 2 : NAVIGATION */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><FooterLink to="/faq">FAQ</FooterLink></li>
            </ul>
          </div>

          {/* COLONNE 3 : LÉGAL & RESSOURCES */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Informations légales</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><FooterLink to="/term-conditions">Conditions d'utilisation</FooterLink></li>
              <li><FooterLink to="/privacy-policy">Confidentialité</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Novytris. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1">
            Conçu et développé avec par Novytris
          </div>
        </div>
      </Container>
    </footer>
  );
}

// Composants Helpers
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      aria-label={label}
      className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="hover:text-blue-600 transition-colors">
      {children}
    </Link>
  );
}