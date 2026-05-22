import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { PROJECTS, type Project } from "@/lib/site-data";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Portafolio técnico | VHTC & Arqueólogos" },
      { name: "description", content: "Portafolio de proyectos en infraestructura, energía, saneamiento y patrimonio arqueológico a nivel nacional." },
      { property: "og:title", content: "Portafolio de proyectos — VHTC & Arqueólogos" },
      { property: "og:description", content: "Carreteras, puentes, energía y rescate arqueológico." },
    ],
  }),
  component: ProyectosPage,
});

const CATEGORIES = ["Todos", "Carreteras", "Puentes", "Energía", "Arqueología", "Saneamiento", "Minería"] as const;

function ProyectosPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Todos");
  const list = useMemo<Project[]>(
    () => (active === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <section className="relative overflow-hidden bg-secondary/40 pt-20 pb-16">
        <div className="bg-grain absolute inset-0 opacity-40" aria-hidden />
        <div className="container-pro relative">
          <span className="font-sans-pro text-xs font-semibold uppercase tracking-[0.25em] text-primary">Proyectos</span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
            Obras que avanzan con <span className="text-gradient">respaldo técnico</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Una selección de proyectos en infraestructura, energía y patrimonio cultural a lo largo del Perú.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-pro">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`relative rounded-full px-5 py-2 text-sm font-sans-pro font-semibold transition ${
                    isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="cat-pill"
                      className="absolute inset-0 rounded-full bg-primary shadow-glow"
                      transition={{ type: "spring", stiffness: 250, damping: 25 }}
                    />
                  )}
                  <span className="relative">{c}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.article
                  layout
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover-lift"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" loading="lazy" width={1280} height={960} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-deep via-earth-deep/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                    <span className="inline-flex items-center rounded-full bg-clay/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold leading-tight">{p.title}</h3>
                    <p className="mt-1 text-xs text-cream/70">{p.location} · {p.year}</p>
                    <p className="mt-3 text-sm text-cream/85 opacity-0 transition duration-500 group-hover:opacity-100">{p.description}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
