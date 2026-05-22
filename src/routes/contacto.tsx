import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiArrowRight, HiCheck, HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "@/components/SectionHeading";
import { COMPANY, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — VHTC & Arqueólogos" },
      { name: "description", content: "Asesoría especializada para proyectos públicos y privados. Conversemos sobre tu próximo proyecto." },
      { property: "og:title", content: "Contacto — VHTC & Arqueólogos" },
      { property: "og:description", content: "Escríbenos para una asesoría técnica personalizada." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-secondary/40 pt-20 pb-24">
        <div className="bg-grain absolute inset-0 opacity-40" aria-hidden />
        <div className="container-pro relative">
          <span className="font-sans-pro text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contacto</span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
            Asesoría especializada para <span className="text-gradient">proyectos públicos y privados</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Cuéntanos sobre tu proyecto y un especialista te contactará en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-pro grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 shadow-elegant sm:p-10"
          >
            <h2 className="font-display text-2xl font-bold">Solicita tu asesoría</h2>
            <p className="mt-2 text-sm text-muted-foreground">Completa el formulario y nos pondremos en contacto contigo.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" name="nombre" placeholder="Tu nombre completo" required />
              <Field label="Correo" name="correo" type="email" placeholder="nombre@empresa.com" required />
              <Field label="Teléfono" name="telefono" type="tel" placeholder="+51 999 000 000" />
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/70">Servicio requerido</label>
                <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option value="">Selecciona un servicio</option>
                  {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/70">Mensaje</label>
                <textarea
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto…"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/90"
            >
              {sent ? (<><HiCheck /> Mensaje enviado</>) : (<>Enviar mensaje <HiArrowRight className="transition-transform group-hover:translate-x-1" /></>)}
            </button>
          </motion.form>

          <div className="space-y-5">
            <ContactCard icon={<HiPhone size={20} />} label="Teléfono" value={COMPANY.phone} href={`tel:${COMPANY.phone}`} />
            <ContactCard icon={<HiMail size={20} />} label="Correo" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
            <ContactCard icon={<FaWhatsapp size={20} />} label="WhatsApp" value="Chat directo" href={`https://wa.me/${COMPANY.whatsapp}`} highlight />
            <ContactCard icon={<HiLocationMarker size={20} />} label="Oficina" value={COMPANY.address} />

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31201.84!2d-77.04!3d-12.046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b40d6cdf41%3A0x9aef6ce5e1d62a7c!2sLima!5e0!3m2!1ses!2spe!4v1700000000000"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function ContactCard({ icon, label, value, href, highlight }: { icon: React.ReactNode; label: string; value: string; href?: string; highlight?: boolean }) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`group flex items-center gap-4 rounded-2xl border p-5 transition hover-lift ${
        highlight ? "border-clay/40 bg-clay/5" : "border-border bg-card"
      }`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${highlight ? "bg-[#25D366] text-white" : "gradient-warm text-primary-foreground"}`}>
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-display text-base font-semibold text-foreground">{value}</div>
      </div>
      {href && <HiArrowRight className="ml-auto opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />}
    </Wrapper>
  );
}
