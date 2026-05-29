export function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb?: string }) {
  return (
    <section className="pt-36 pb-20 bg-gradient-warm relative overflow-hidden">
      <div className="absolute inset-0 noise opacity-55 pointer-events-none" />
      <div className="absolute -top-24 -right-16 w-[28rem] h-[28rem] rounded-full bg-accent/45 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -left-16 w-[32rem] h-[32rem] rounded-full bg-gold-light/14 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {breadcrumb && (
          <p className="font-sans text-[11px] tracking-[0.32em] uppercase text-text-muted mb-5 font-light">{breadcrumb}</p>
        )}
        <div className="flex items-start gap-5">
          <div className="hidden lg:block w-px self-stretch bg-primary/30 shrink-0 mt-1" />
          <div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-dark text-balance">{title}</h1>
            {subtitle && (
              <p className="font-sans font-light text-text-muted text-lg max-w-2xl mt-5 leading-relaxed">{subtitle}</p>
            )}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <div className="w-3 h-3 rounded-full border border-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
