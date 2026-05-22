import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS, COMPANY } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-pro">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 lg:px-6 ${
            scrolled
              ? "glass shadow-soft"
              : "bg-transparent border border-transparent"
          }`}
        >
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl gradient-warm text-primary-foreground shadow-glow">
              <span className="font-display text-lg font-bold">VH</span>
              <span className="absolute -inset-px rounded-xl ring-1 ring-inset ring-white/20" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-bold text-foreground sm:text-base">
                VHTC <span className="text-primary">&</span> Arqueólogos
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {COMPANY.tagline}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative rounded-full px-4 py-2 font-sans-pro text-sm font-medium text-foreground/80 transition hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    <span
                      className={`pointer-events-none absolute inset-x-3 -bottom-px h-px origin-left bg-gradient-to-r from-primary to-transparent transition-transform duration-500 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contacto"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-2.5 font-sans-pro text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow"
            >
              <span className="relative z-10">Solicitar asesoría</span>
              <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 -z-0 translate-y-full bg-earth-deep transition-transform duration-500 group-hover:translate-y-0" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="container-pro lg:hidden"
          >
            <div className="mt-2 overflow-hidden rounded-2xl glass shadow-elegant">
              <nav className="flex flex-col p-2">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="rounded-xl px-4 py-3 font-sans-pro text-base font-medium text-foreground/80 transition hover:bg-secondary"
                    activeProps={{ className: "bg-secondary text-foreground" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contacto"
                  className="mt-2 rounded-xl bg-primary px-4 py-3 text-center font-sans-pro text-sm font-semibold text-primary-foreground"
                >
                  Solicitar asesoría
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
