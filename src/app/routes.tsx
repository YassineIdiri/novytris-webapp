import Home from "../pages/Home";
import Services from "../pages/Services";
import Projects from "../pages/Realisations";
import About from "../pages/About";
import Contact from "../pages/Contact";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FAQ from "../pages/Faq";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/realisations", element: <Projects /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/term-conditions", element: <TermsAndConditions /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/faq", element: <FAQ /> },
];
