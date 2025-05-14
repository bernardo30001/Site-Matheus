import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";

/* ----------------------------------------------------------------
 * Landing Page – Versão Requintada (2025)
 * Paleta: Laranja #FF6500 | Azul #0B2347 | Branco #FFFFFF
 * Destaques: cartões 50/50, leve gradiente, hover‑scale e sombras
 * ---------------------------------------------------------------- */

/* ---------------- Reusable Components ---------------- */
function SocialLink({ href, Icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#0B2347] transition-colors duration-200 hover:text-[#FF6500]"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function CTA({ href, variant = "primary", children }) {
  const variants = {
    primary: "bg-[#FF6500] text-white",
    outline: "border border-[#FF6500] text-[#FF6500]",
    dark: "bg-[#0B2347] text-white",
  };
  const base =
    "inline-flex items-center justify-center gap-1 rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide shadow-sm transition-transform duration-200 hover:scale-105";
  return (
    <a href={href} className={`${base} ${variants[variant]}`}> {children} </a>
  );
}

function HeroCard({ location, primary }) {
  const bg = primary
    ? "bg-gradient-to-br from-[#FF7A26] via-[#FF6500] to-[#FF7A26]"
    : "bg-[#0B2347]";
  const btn = primary
    ? "bg-white text-[#FF6500] hover:bg-[#FFE5D6]"
    : "bg-[#FF6500] text-white hover:brightness-110";

  return (
    <div
      className={`${bg} relative flex w-full flex-col items-center justify-center overflow-hidden rounded-none md:rounded-2xl px-6 py-20 md:py-0 transition-transform duration-300 group hover:scale-[1.02]`}
    >
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      <h2 className="relative z-10 mb-8 text-center text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
        Você Decide:
        <br />
        {location}
      </h2>

      <a
        href="#votar"
        className={`relative z-10 rounded-full px-10 py-3 text-sm font-bold uppercase tracking-wide shadow-md transition-all duration-200 ${btn}`}
      >
        VOTE
      </a>
    </div>
  );
}

/* ------------------- Page ------------------- */
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Left: Social Icons */}
          <nav className="flex items-center gap-4">
            <SocialLink href="https://instagram.com/matheuscadorin" Icon={Instagram} label="Instagram" />
            <SocialLink href="https://facebook.com/matheuscadorin" Icon={Facebook} label="Facebook" />
            <SocialLink href="https://x.com/matheuscadorin" Icon={Twitter} label="Twitter" />
            <SocialLink href="https://youtube.com/@matheuscadorin" Icon={Youtube} label="YouTube" />
            <SocialLink href="https://wa.me/5547999999999" Icon={MessageCircle} label="WhatsApp" />
            <SocialLink href="https://linkedin.com/in/matheuscadorin" Icon={Linkedin} label="LinkedIn" />
          </nav>

          {/* Right: CTAs */}
          <div className="hidden gap-3 md:flex">
            <CTA href="https://novo.org.br/doe" variant="primary">
              Doe Agora
            </CTA>
            <CTA href="https://novo.org.br/participe" variant="outline">
              Participe
            </CTA>
            <CTA href="mailto:contato@matheuscadorin.com.br" variant="dark">
              Fale Conosco
            </CTA>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col md:flex-row h-[calc(100vh_-_64px)]">
        <HeroCard location="Joinville" primary />
        <HeroCard location="Santa Catarina" />
      </section>
    </div>
  );
}
