import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { NAV_LINKS, SERVICES, COMPANY } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden gradient-earth text-cream">
      <div className="bg-grain absolute inset-0 opacity-30" aria-hidden />
      <div className="container-pro relative z-10 grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-warm font-display text-base font-bold text-cream shadow-glow">
              VH
            </div>
            <div className="font-display text-lg font-bold leading-tight tracking-wide text-foreground">
              <span className="uppercase">VÍCTOR TUFINIO</span>{' '}
              <span className="text-clay font-normal">&</span>{' '}
              <span className="capitalize font-medium">Consultores</span>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-pretty text-sm text-cream/70">
            {COMPANY.name}. Soluciones técnicas integrales para proyectos que necesitan avanzar.
          </p>
          <div className="mt-6 flex gap-2">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition hover:border-clay hover:bg-clay hover:text-cream"
                aria-label="social"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-clay">
            Navegación
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-cream">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-clay">
            Servicios
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/servicios" className="transition hover:text-cream">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-clay">
            Contacto
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-cream/75">
            <li className="flex items-start gap-3"><HiLocationMarker className="mt-0.5 shrink-0 text-clay" /> {COMPANY.address}</li>
            <li className="flex items-center gap-3"><HiPhone className="text-clay" /> {COMPANY.phone}</li>
            <li className="flex items-center gap-3"><HiMail className="text-clay" /> {COMPANY.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-pro flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.short}. Todos los derechos reservados.</p>
          <p>Diseñado con precisión técnica · Hecho en Perú</p>
        </div>
      </div>
    </footer>
  );
}
