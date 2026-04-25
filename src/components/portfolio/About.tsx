import { BarChart3, Globe, Rocket, Target } from "lucide-react";

const items = [
  { icon: BarChart3, title: "Análisis de Datos", text: "De datos crudos a insights accionables que impulsan el negocio." },
  { icon: Globe, title: "Estrategia Digital", text: "Roadmaps tecnológicos alineados con objetivos de crecimiento." },
  { icon: Rocket, title: "Desarrollo Web", text: "Sitios y plataformas rápidas, optimizadas y orientadas a conversión." },
  { icon: Target, title: "Impacto Real", text: "Decisiones basadas en métricas y resultados medibles." },
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
            Tecnología con <span className="text-gradient-primary">propósito</span>,
            datos con <span className="text-gradient-primary">estrategia</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Soy Ingeniero en Sistemas y Telecomunicaciones con más de 8 años
            ayudando a empresas a convertir su información en ventaja
            competitiva. Combino análisis de datos, estrategia digital y
            desarrollo web para entregar soluciones escalables con impacto
            directo en el negocio.
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
