import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiCheck,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi";
import { FaBolt, FaSun } from "react-icons/fa6";
import { GiAncientColumns, GiWaterDrop } from "react-icons/gi";
import { TbMapPins, TbFileStack } from "react-icons/tb";
import heroImg from "@/assets/hero-arqueologia.jpg";
import nosotrosImg from "@/assets/nosotros.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SERVICES, STATS, ABOUT_FEATURES, PROJECTS, WHY_US } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arqueología e Ingeniería de alto nivel" },
      {
        name: "description",
        content:
          "Servicios técnicos integrales en arqueología, ingeniería, topografía, energía y saneamiento. Acompañamiento de proyectos públicos y privados.",
      },
      { property: "og:title", content: "VHTC & Arqueólogos — Soluciones Técnicas Integrales" },
      {
        property: "og:description",
        content:
          "Impulsamos la viabilidad de proyectos con un equipo multidisciplinario de arqueólogos e ingenieros.",
      },
    ],
  }),
  component: HomePage,
});

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  arqueologia: GiAncientColumns,
  topografia: TbMapPins,
  electrica: FaBolt,
  solar: FaSun,
  saneamiento: GiWaterDrop,
  expedientes: TbFileStack,
};

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt="Excavación arqueológica e ingeniería en los Andes"
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.2, 0.7, 0.2, 1] }}
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-deep/85 via-earth-deep/60 to-earth-deep/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-deep/70 to-transparent" />
        </div>

        {/* floating badges */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="float-slow absolute right-6 top-32 z-10 hidden max-w-[220px] rounded-2xl glass-dark p-4 text-cream lg:block"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-clay/90"><HiOutlineShieldCheck size={20} /></div>
            <div>
              <div className="font-display text-sm font-semibold">CIRA · PEA · PMA</div>
              <div className="text-xs text-cream/70">Acreditado MINCUL</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="float-slow absolute left-6 top-44 z-10 hidden max-w-[220px] rounded-2xl glass-dark p-4 text-cream lg:block"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand/90 text-earth-deep"><HiOutlineClock size={20} /></div>
            <div>
              <div className="font-display text-sm font-semibold">+20 años</div>
              <div className="text-xs text-cream/70">de experiencia técnica</div>
            </div>
          </div>
        </motion.div>

        <div className="container-pro relative z-10 pb-24 pt-40 text-cream">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <HiOutlineSparkles className="text-clay" />
            <span className="font-sans-pro text-xs font-medium uppercase tracking-[0.22em] text-cream/80">
              Consultoría técnica multidisciplinaria
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Servicios de{" "}
            <span className="italic text-sand">Arqueología</span> e{" "}
            <span className="italic text-clay">Ingeniería</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 max-w-2xl font-display text-lg font-light text-cream/90 sm:text-xl"
          >
            Soluciones técnicas integrales para proyectos que necesitan avanzar.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-cream/70"
          >
            Impulsamos la viabilidad de proyectos públicos y privados mediante servicios
            especializados en arqueología, ingeniería, topografía, saneamiento, electrificación
            y energía solar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-sans-pro text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/90"
            >
              Solicitar asesoría
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/servicios"
              className="group inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-4 font-sans-pro text-sm font-semibold text-cream backdrop-blur-sm transition hover:bg-cream/10"
            >
              Ver servicios
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Inline stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur-md sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label} className="bg-earth-deep/40 p-5">
                <div className="font-display text-2xl font-bold text-sand sm:text-3xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-cream/65">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/50">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/30 p-1">
            <motion.span
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="block h-1.5 w-1 rounded-full bg-cream/70"
            />
          </div>
        </div>
      </section>

      {/* NOSOTROS — preview */}
      <section className="relative py-24 sm:py-32">
        <div className="container-pro grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={nosotrosImg} alt="Equipo técnico VHTC" className="h-[520px] w-full object-cover" loading="lazy" width={1600} height={1200} />
              <div className="absolute inset-0 bg-gradient-to-tr from-earth-deep/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-64 rounded-2xl bg-card p-5 shadow-elegant lg:block">
              <div className="font-display text-3xl font-bold text-primary">+20</div>
              <div className="text-sm text-muted-foreground">Años acompañando proyectos de ingeniería y patrimonio cultural.</div>
            </div>
            <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full gradient-warm opacity-90 blur-2xl lg:block" aria-hidden />
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Nosotros"
              title={<>Asesoría técnica que <span className="text-gradient">acompaña</span> el proyecto de principio a fin.</>}
              description="Brindamos asesoría, consultoría y gestión integral de expedientes técnicos, acompañando cada proyecto desde su planificación hasta la obtención final de permisos, autorizaciones y liberaciones necesarias para su ejecución."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ABOUT_FEATURES.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><HiCheck size={12} /></span>
                  <span className="text-sm text-foreground/80">{f}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/nosotros" className="group inline-flex items-center gap-2 font-sans-pro text-sm font-semibold text-primary">
                Conoce más sobre nosotros
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="relative bg-secondary/40 py-24 sm:py-32">
        <div className="bg-grain absolute inset-0 opacity-40" aria-hidden />
        <div className="container-pro relative">
          <SectionHeading
            align="center"
            eyebrow="Servicios"
            title={<>Una sola firma, <span className="text-gradient">seis especialidades</span> integradas.</>}
            description="Resolvemos los componentes técnicos, arqueológicos y administrativos de tu proyecto bajo un mismo equipo."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.slug];
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group hover-lift relative overflow-hidden rounded-3xl border border-border bg-card p-7"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" aria-hidden />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-warm text-primary-foreground shadow-soft">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                    <Link to="/servicios" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                      Explorar <HiArrowRight />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className="relative py-24 sm:py-32">
        <div className="container-pro">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Proyectos"
              title={<>Experiencia probada en <span className="text-gradient">terreno</span>.</>}
              description="Desde la cordillera hasta la costa, hemos acompañado infraestructura crítica de los sectores público y privado."
            />
            <Link to="/proyectos" className="group inline-flex items-center gap-2 font-sans-pro text-sm font-semibold text-primary">
              Ver portafolio completo <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 6).map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-soft"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" loading="lazy" width={1280} height={960} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-earth-deep via-earth-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                  <span className="inline-flex items-center rounded-full bg-clay/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-1 text-xs text-cream/70">{p.location} · {p.year}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="relative overflow-hidden gradient-earth py-24 text-cream sm:py-32">
        <div className="bg-grain absolute inset-0 opacity-30" aria-hidden />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-clay/30 blur-[120px]" aria-hidden />
        <div className="container-pro relative">
          <SectionHeading
            invert
            eyebrow="Por qué elegirnos"
            title={<>Precisión técnica, gestión y <span className="text-clay italic">prestigio</span>.</>}
            description="Combinamos el rigor arqueológico con la disciplina de la ingeniería para reducir riesgos y plazos."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 backdrop-blur-sm transition hover:border-clay/40 hover:bg-cream/[0.07]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-clay text-cream"><HiCheck /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-cream/70">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="container-pro">
          <div className="relative overflow-hidden rounded-[2rem] gradient-warm px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-24">
            <div className="absolute inset-0 bg-grain opacity-25" aria-hidden />
            <h2 className="relative mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-balance sm:text-5xl">
              ¿Tienes un proyecto que necesita avanzar?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-cream/85">
              Asesoría especializada para proyectos públicos y privados, con respaldo técnico garantizado.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="inline-flex items-center gap-2 rounded-full bg-earth-deep px-7 py-4 text-sm font-semibold text-cream transition hover:bg-ink">
                Hablar con un especialista <HiArrowRight />
              </Link>
              <Link to="/servicios" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-sm font-semibold text-cream transition hover:bg-cream/10">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
