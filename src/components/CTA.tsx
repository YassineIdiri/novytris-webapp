import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div className="relative w-full">
      {/* Container principal avec effet Glass sombre */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl shadow-blue-900/20 isolate">
        
        {/* Décoration d'arrière-plan (Glows) */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[300px] h-[300px] rounded-full bg-blue-500/30 blur-[80px]" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-[80px]" />
        
        {/* Texture subtile */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
          
          {/* TEXTE */}
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              Lançons votre projet
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
               Transformez votre vision en solution digitale
            </h2>
            <p className="mt-4 text-slate-400 text-lg leading-relaxed">
              Échangeons sur vos objectifs, 
              votre budget et établissons ensemble une roadmap claire et réaliste.
            </p>
          </div>

          {/* BOUTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            
            <a href="https://calendly.com/pro-idiri-yassine/30min"
              target="_blank"
              rel="noreferrer"
              className="group relative px-6 py-4 rounded-xl bg-white text-slate-900 font-bold shadow-lg hover:shadow-white/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 overflow-hidden"
            >
              {/* Animation de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
              
              <Calendar className="w-4 h-4" />
              <span>Planifier un rendez-vous</span>
            </a>

            <Link
              to="/contact"
              className="px-6 py-4 rounded-xl border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}