import { Calculator, FileSpreadsheet, ShieldCheck, TrendingUp } from "lucide-react";

const items = [
  { icon: Calculator, title: "Contabilidad Estratégica", text: "Llevo tus libros con precisión y los convierto en información útil para decidir." },
  { icon: ShieldCheck, title: "Optimización Fiscal", text: "Pagas exactamente lo que debes pagar, ni un peso más. Cero sustos con la SAT/SUNAT/DIAN." },
  { icon: TrendingUp, title: "Finanzas Corporativas", text: "Flujo de caja, presupuestos y proyecciones que sostienen el crecimiento." },
  { icon: FileSpreadsheet, title: "CFO Externo", text: "Dirección financiera tercerizada para empresas que aún no necesitan un CFO full-time." },
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Sobre mí
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Contabilidad con <span className="text-gradient-primary">cabeza estratégica</span>,
            finanzas con <span className="text-gradient-primary">mirada de dueño</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Soy Contador Público Certificado con MBA en Finanzas y más de 12
            años acompañando a empresas, emprendedores y profesionales a poner
            sus números en orden y, sobre todo, a usarlos para crecer. No solo
            registro tu pasado contable: diseño tu futuro financiero.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-card"
            >
              <div className="size-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all">
                <it.icon className="size-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
