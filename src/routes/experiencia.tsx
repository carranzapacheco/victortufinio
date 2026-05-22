import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { STATS } from "@/lib/site-data";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiencia — Trayectoria técnica | VHTC & Arqueólogos" },
      { name: "description", content: "Más de 20 años acompañando proyectos de infraestructura, energía y patrimonio cultural en todo el Perú." },
      { property: "og:title", content: "Experiencia — VHTC & Arqueólogos" },
      { property: "og:description", content: "Trayectoria, sectores y cobertura geográfica." },
    ],
  }),
  component: ExperienciaPage,
});

const TIMELINE = [
  { year: "2003", title: "Fundación", desc: "Inicio de operaciones como consultora especializada en gestión arqueológica." },
  { year: "2008", title: "Expansión multidisciplinaria", desc: "Incorporación de equipos de topografía e ingeniería civil." },
  { year: "2014", title: "Ingreso al sector energético", desc: "Primeros proyectos de electrificación rural y línea de transmisión." },
  { year: "2019", title: "Energía solar", desc: "Sistemas fotovoltaicos para minería y comunidades remotas." },
  { year: "2023", title: "Cobertura nacional", desc: "Operación simultánea en 24 regiones del Perú." },
];

const SECTORS = [
  { name: "Minería", value: 35 },
  { name: "Infraestructura pública", value: 30 },
  { name: "Energía", value: 18 },
  { name: "Saneamiento", value: 10 },
  { name: "Privados", value: 7 },
];

function ExperienciaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary/40 pt-20 pb-24">
        <div className="bg-grain absolute inset-0 opacity-40" aria-hidden />
        <div className="container-pro relative">
          <span className="font-sans-pro text-xs font-semibold uppercase tracking-[0.25em] text-primary">Experiencia</span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
            Dos décadas de <span className="text-gradient">precisión técnica</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Acompañamos a operadores mineros, entidades públicas y desarrolladores privados con el mismo estándar técnico.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-pro">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl" aria-hidden />
                <div className="relative font-display text-5xl font-bold text-primary"><AnimatedCounter value={s.value} suffix={s.suffix} /></div>
                <div className="relative mt-2 text-sm font-semibold uppercase tracking-wider text-foreground/80">{s.label}</div>
                {s.note && <div className="relative mt-1 text-xs text-muted-foreground">{s.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-pro grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Línea de tiempo" title={<>Una historia de <span className="text-gradient">crecimiento técnico</span>.</>} />
            <ol className="relative mt-10 border-l border-border pl-8">
              {TIMELINE.map((t, i) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative mb-10 last:mb-0"
                >
                  <span className="absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full gradient-warm ring-4 ring-background" />
                  <div className="font-display text-sm font-bold uppercase tracking-wider text-primary">{t.year}</div>
                  <h3 className="mt-1 font-display text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-muted-foreground">{t.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeading eyebrow="Sectores" title={<>Donde aportamos <span className="text-gradient">mayor valor</span>.</>} />
            <div className="mt-10 space-y-5">
              {SECTORS.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="font-display font-bold text-primary">{s.value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
                      className="h-full gradient-warm"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold">Cobertura geográfica</h3>
              <p className="mt-3 text-muted-foreground">
                Operación activa en costa, sierra y selva. Hemos ejecutado proyectos en
                Cajamarca, Áncash, La Libertad, Apurímac, Arequipa, Amazonas, Piura, Cusco
                y Lima, entre otras regiones.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {["Cajamarca","Áncash","La Libertad","Apurímac","Arequipa","Amazonas","Piura","Cusco"].map((r) => (
                  <span key={r} className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-center text-xs font-medium">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
