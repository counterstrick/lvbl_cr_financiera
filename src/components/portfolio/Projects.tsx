import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Rescate Fiscal · Restaurante en quiebra técnica",
    desc: "Reestructuración tributaria y acuerdo de pago que evitó cierre. Ahorro de $120K en multas e intereses.",
    tech: ["Planeación Fiscal", "DIAN", "Negociación"],
    tag: "Tributario",
  },
  {
    title: "CFO Externo · Startup SaaS Serie A",
    desc: "Modelo financiero, board reports y due diligence. Cerraron ronda de USD $2.4M en 5 meses.",
    tech: ["Modelado", "Forecasting", "Inversión"],
    tag: "CFO",
  },
  {
    title: "Migración Contable a la Nube",
    desc: "Implementación de Alegra + Power BI para constructora. Cierre mensual pasó de 18 a 3 días.",
    tech: ["Alegra", "Power BI", "Automatización"],
    tag: "Tech Contable",
  },
  {
    title: "Tablero Financiero en Tiempo Real",
    desc: "Dashboard ejecutivo con P&L, cartera y flujo de caja. Decisiones que antes tardaban semanas hoy son del día.",
    tech: ["Power BI", "Excel", "DAX"],
    tag: "Reporting",
  },
  {
    title: "Optimización Fiscal · Grupo Empresarial",
    desc: "Reorganización societaria legal que redujo carga tributaria efectiva del 33% al 21%.",
    tech: ["Holding", "Precios de Transferencia", "NIIF"],
    tag: "Estrategia",
  },
  {
    title: "Educación Financiera para Founders",
    desc: "Programa de mentoría 1:1 para 35 emprendedores. Aprenden a leer sus números y dejar de improvisar.",
    tech: ["Mentoring", "Workshops", "Coaching"],
    tag: "Formación",
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Casos de Éxito
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Proyectos donde los <span className="text-gradient-primary">números salvaron el negocio</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Una selección de casos reales donde contabilidad, estrategia fiscal
            y finanzas se tradujeron en rentabilidad y tranquilidad para mis
            clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden shadow-card"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="absolute -top-20 -right-20 size-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {p.tag}
                  </span>
                  <span className="font-display text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gradient-primary transition-all">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button variant="ghost-glow" size="sm" className="w-full justify-between">
                  Ver Caso <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
