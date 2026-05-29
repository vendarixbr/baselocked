import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Instagram, Clock, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({ meta: [{ title: "Contato | Dra. Lara Ganem" }, { name: "description", content: "Entre em contato com a Dra. Lara Ganem em Nova Serrana - MG. WhatsApp, endereço e formulário online." }] }),
});

function Contato() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Consulta", message: "" });
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.message) { toast.error("Preencha nome e mensagem."); return; }
    setLoading(true);
    const { error } = await supabase.from("contacts").insert([form]);
    setLoading(false);
    if (error) { toast.error("Erro ao enviar. Tente pelo WhatsApp."); return; }
    toast.success("Mensagem enviada! Retornaremos em breve.");
    setForm({ name: "", email: "", phone: "", subject: "Consulta", message: "" });
  }

  return (
    <>
      <PageHero title="Vamos conversar" breadcrumb="Início · Contato" subtitle="Estamos prontos para receber você. Agende sua consulta ou envie sua dúvida." />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl text-dark">Informações</h2>
            <div className="flex items-center gap-4 my-6">
              <div className="w-10 h-px bg-primary" />
              <div className="size-2 rounded-full bg-primary/40" />
            </div>
            <ul className="space-y-5 font-sans font-light text-text-muted text-[14.5px]">
              <li className="flex gap-4 p-4 rounded-xl bg-bg-alt/40 border border-border/40"><MapPin className="size-4 text-primary mt-0.5 shrink-0" /><span className="leading-relaxed">Edifício Camel — R. Cornélio Benfica, 63<br/>Sala 1101/1102 — Jardim do Lago<br/>Nova Serrana - MG, 35522-024</span></li>
              <li className="flex gap-4 p-4 rounded-xl bg-bg-alt/40 border border-border/40"><Phone className="size-4 text-primary mt-0.5 shrink-0" /><a href="https://wa.me/5537994219291" className="hover:text-primary transition-colors">(37) 99421-9291</a></li>
              <li className="flex gap-4 p-4 rounded-xl bg-bg-alt/40 border border-border/40"><Instagram className="size-4 text-primary mt-0.5 shrink-0" /><a href="https://www.instagram.com/dralaraganem.gineco/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">@dralaraganem.gineco</a></li>
              <li className="flex gap-4 p-4 rounded-xl bg-bg-alt/40 border border-border/40"><Clock className="size-4 text-primary mt-0.5 shrink-0" /><span className="leading-relaxed">Segunda a Sexta: 08h às 18h<br/>Sábados: 08h às 12h</span></li>
            </ul>
            <div className="mt-10 aspect-[4/3] overflow-hidden border border-border/60 rounded-2xl shadow-soft">
              <iframe
                title="Mapa do consultório"
                src="https://www.google.com/maps?q=R.+Corn%C3%A9lio+Benfica,+63,+Nova+Serrana+-+MG&output=embed"
                className="w-full h-full grayscale-[25%] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={submit} className="relative bg-gradient-cream p-8 lg:p-10 rounded-2xl border border-primary/20 shadow-premium overflow-hidden">
            <div className="absolute inset-0 noise opacity-40 pointer-events-none" />
            <div className="relative">
            <h2 className="font-serif text-3xl text-dark">Envie uma mensagem</h2>
            <div className="w-12 h-px bg-primary my-6" />
            <div className="space-y-5">
              {[
                { k: "name", label: "Nome completo *", type: "text" },
                { k: "email", label: "E-mail", type: "email" },
                { k: "phone", label: "Telefone", type: "tel" },
              ].map((f) => (
                <div key={f.k}>
                  <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-text-muted mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    value={(form as any)[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="w-full bg-background border border-border/70 px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200 rounded-xl"
                  />
                </div>
              ))}
              <div>
                <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-text-muted mb-2">Assunto</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full bg-background border border-border/70 px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200 rounded-xl">
                  {["Consulta", "Pré-natal", "Dúvida", "Outro"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-sans text-[10px] tracking-[0.3em] uppercase text-text-muted mb-2">Mensagem *</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-background border border-border/70 px-4 py-3 font-sans text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all duration-200 rounded-xl resize-none"
                />
              </div>
              <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-white font-sans text-[11px] tracking-[0.25em] uppercase rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed">
                <Send className="size-4" /> {loading ? "Enviando..." : "Enviar mensagem"}
              </button>
            </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
