import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import nosotrosImg from "@/assets/nosotros.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ABOUT_FEATURES, STATS, WHY_US } from "@/lib/site-data";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — VHTC & Arqueólogos" },
      { name: "description", content: "Más de 20 años acompañando proyectos públicos y privados con gestión técnica y arqueológica integral." },
      { property: "og:title", content: "Nosotros — VHTC & Arqueólogos" },
      { property: "og:description", content: "Equipo multidisciplinario de arqueólogos e ingenieros con cobertura nacional." },
    ],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary/40 pt-20 pb-24">
        <div className="bg-grain absolute inset-0 opacity-40" aria-hidden />
        <div className="container-pro relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="font-sans-pro text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Nosotros
            </span>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
              Una firma técnica que <span className="text-gradient">conecta patrimonio e ingeniería</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Brindamos asesoría, consultoría y gestión integral de expedientes técnicos,
              acompañando cada proyecto desde su planificación hasta la obtención final de
              permisos, autorizaciones y liberaciones necesarias para su ejecución.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pro grid items-center gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={nosotrosImg} alt="Equipo VHTC" className="h-[560px] w-full object-cover" loading="lazy" width={1600} height={1200} />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-elegant lg:block">
              <div className="font-display text-3xl font-bold text-primary"><AnimatedCounter value={150} suffix="+" /></div>
              <div className="text-sm text-muted-foreground">Proyectos entregados</div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Lo que nos diferencia"
              title={<>Gestión integral con <span className="text-gradient">resultados eficientes</span>.</>}
            />
            <ul className="mt-8 grid gap-3">
              {ABOUT_FEATURES.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><HiCheck size={14} /></span>
                  <span className="text-foreground/85">{f}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-pro">
          <SectionHeading align="center" eyebrow="Cifras" title={<>Un respaldo construido con el <span className="text-gradient">tiempo</span>.</>} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
                <div className="font-display text-5xl font-bold text-primary"><AnimatedCounter value={s.value} suffix={s.suffix} /></div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-foreground/80">{s.label}</div>
                {s.note && <div className="mt-1 text-xs text-muted-foreground">{s.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pro">
          <SectionHeading align="center" eyebrow="Por qué elegirnos" title={<>Calidad técnica con <span className="text-gradient">enfoque humano</span>.</>} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.55 }} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-warm text-primary-foreground"><HiCheck /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contacto" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow">
              Conversemos sobre tu proyecto <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
