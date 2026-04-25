import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

const problems = [
  "Empresas que toman decisiones a ciegas por falta de datos consolidados.",
  "Equipos que pierden horas en reportes manuales y repetitivos.",
  "Webs lentas, sin SEO y sin estrategia de conversión.",
  "Infraestructura tecnológica costosa, rígida y poco escalable.",
];

const stats = [
  { icon: TrendingUp, k: "+220%", v: "Crecimiento orgánico promedio" },
  { icon: Zap, k: "-60%", v: "Tiempo en toma de decisiones" },
  { icon: Users, k: "+200", v: "Usuarios migrados a cloud" },
  { icon: CheckCircle2, k: "98/100", v: "Lighthouse performance" },
];

const Value = () => {
  return (
    <section id="valor" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Propuesta de Valor
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              No vendo currículum. <br />
              <span className="text-gradient-primary">Resuelvo problemas.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Ayudo a empresas, startups y equipos directivos a convertir
              tecnología en crecimiento, eficiencia y ventaja competitiva.
            </p>

            <ul className="mt-8 space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.v}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all shadow-card"
              >
                <div className="size-11 rounded-xl bg-gradient-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="size-5 text-primary" />
                </div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-gradient-primary">
                  {s.k}
                </div>
                <div className="text-xs text-muted-foreground mt-2 leading-snug">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
