import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5537994219291"
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <span className="hidden sm:inline-block bg-dark text-white text-xs font-sans tracking-wide px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        Agendar consulta
      </span>
      <span className="relative inline-flex">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-emerald-900/20">
          <MessageCircle className="size-6 text-white" />
        </span>
      </span>
    </a>
  );
}
