import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 180, damping: 16 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow ring-4 ring-white/30 transition hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" aria-hidden />
      <FaWhatsapp size={26} className="relative" />
    </motion.a>
  );
}
