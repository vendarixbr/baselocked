import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
  head: () => ({ meta: [{ title: "Serviços | Dra. Lara Ganem" }, { name: "description", content: "Conheça os serviços de ginecologia, pré-natal, saúde hormonal e mais oferecidos pela Dra. Lara Ganem." }] }),
});

const services = [
  { title: "Ginecologia Clínica", desc: "Consultas de rotina, exames preventivos (Papanicolau, colposcopia), diagnóstico e tratamento de infecções, acompanhamento de ciclo menstrual e saúde vaginal." },
  { title: "Pré-natal", desc: "Acompanhamento completo da gestação de baixo e alto risco. Consultas mensais, exames, orientações e suporte emocional para uma gravidez tranquila e segura." },
  { title: "Saúde Hormonal", desc: "Investigação e tratamento de desequilíbrios hormonais, TPM, síndrome dos ovários policísticos (SOP), endometriose e menopausa." },
  { title: "Planejamento Reprodutivo", desc: "Orientação sobre métodos contraceptivos, inserção de DIU e Implanon, planejamento familiar e fertilidade." },
  { title: "Prevenção e Rastreamento", desc: "Exames de rastreamento para câncer de colo do útero, mama e outras condições. Vacinação e check-up feminino completo." },
  { title: "Saúde Íntima", desc: "Tratamento de desconfortos na região íntima, laser íntimo, ninfoplastia e cuidados com a saúde sexual feminina." },
];

function Servicos() {
  return (
    <>
      <PageHero title="Serviços" breadcrumb="Início · Serviços" subtitle="Cuidado especializado para a saúde da mulher em cada fase da vida." />

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-cream relative overflow-hidden">
        <div className="absolute inset-0 noise opacity-50 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 relative">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {services.map((s, i) => (
                <AccordionItem key={i} value={`s-${i}`} className="border border-border/60 bg-background/85 backdrop-blur-sm px-7 rounded-2xl overflow-hidden data-[state=open]:border-primary/35 data-[state=open]:shadow-soft transition-all duration-300">
                  <AccordionTrigger className="font-serif text-xl sm:text-2xl text-dark hover:text-primary hover:no-underline py-6 transition-colors duration-200">
                    <span className="flex items-center gap-5 text-left">
                      <span className="font-sans text-xs tracking-[0.3em] text-primary/80 shrink-0">0{i + 1}</span>
                      {s.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="font-sans font-light text-text-muted leading-relaxed pb-7 text-base">{s.desc}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-rose text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-dark opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-balance">Não encontrou o que procurava?</h3>
            <p className="font-sans font-light text-white/80 mt-2">Entre em contato e vamos conversar.</p>
          </div>
          <a href="https://wa.me/5537994219291" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-gold text-white font-sans text-[11px] tracking-[0.25em] uppercase rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] shrink-0">
            Falar no WhatsApp <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
