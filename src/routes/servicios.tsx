import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiCheck, HiArrowRight } from "react-icons/hi";
import { FaBolt, FaSun } from "react-icons/fa6";
import { GiAncientColumns, GiWaterDrop } from "react-icons/gi";
import { TbMapPins, TbFileStack } from "react-icons/tb";
import { SERVICES } from "@/lib/site-data";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Arqueología, Ingeniería y Energía | VHTC" },
      { name: "description", content: "Gestión arqueológica, topografía, ingeniería eléctrica, energía solar, saneamiento y expedientes técnicos." },
      { property: "og:title", content: "Servicios técnicos integrales — VHTC & Arqueólogos" },
      { property: "og:description", content: "Seis áreas de especialidad bajo una sola firma técnica." },
    ],
  }),
  component: ServiciosPage,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  arqueologia: GiAncientColumns,
  topografia: TbMapPins,
  electrica: FaBolt,
  solar: FaSun,
  saneamiento: GiWaterDrop,
  expedientes: TbFileStack,
};

function ServiciosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary/40 pt-20 pb-24">
        <div className="bg-grain absolute inset-0 opacity-40" aria-hidden />
        <div className="container-pro relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="font-sans-pro text-xs font-semibold uppercase tracking-[0.25em] text-primary">Servicios</span>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
              Seis especialidades, <span className="text-gradient">un solo equipo</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Resolvemos cada componente de tu proyecto con metodologías estandarizadas y profesionales colegiados.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pro space-y-8">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.slug];
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-soft hover-lift sm:p-12"
              >
                <div className={`grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl gradient-warm text-primary-foreground shadow-glow">
                      <Icon className="h-9 w-9" />
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/70">
                      Servicio {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">{s.title}</h2>
                    <p className="mt-4 max-w-md text-muted-foreground">{s.short}</p>
                    <Link to="/contacto" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Cotizar este servicio <HiArrowRight />
                    </Link>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-3.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><HiCheck size={12} /></span>
                        <span className="text-sm text-foreground/85">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" aria-hidden />
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}
