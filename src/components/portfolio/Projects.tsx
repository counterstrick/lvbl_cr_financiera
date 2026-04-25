import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dashboard Ejecutivo BI",
    desc: "Plataforma de reportes en tiempo real que redujo el tiempo de toma de decisiones en un 60%.",
    tech: ["Power BI", "SQL", "Azure"],
    tag: "Data & BI",
  },
  {
    title: "Migración a Azure Virtual Desktop",
    desc: "Implementación cloud para 200+ usuarios con ahorro del 35% en infraestructura.",
    tech: ["Azure", "AVD", "Networking"],
    tag: "Cloud",
  },
  {
    title: "E-commerce Premium",
    desc: "Tienda online optimizada para conversión, +180% en ventas durante el primer trimestre.",
    tech: ["WordPress", "WooCommerce", "SEO"],
    tag: "Web",
  },
  {
    title: "Automatización de Reportes",
    desc: "Pipeline de datos automatizado que ahorra 40 horas mensuales al equipo financiero.",
    tech: ["Power Automate", "SQL", "Excel"],
    tag: "Data",
  },
  {
    title: "Estrategia SEO Corporativa",
    desc: "Crecimiento orgánico del 220% en 6 meses para empresa B2B del sector industrial.",
    tech: ["SEO", "Analytics", "Content"],
    tag: "Growth",
  },
  {
    title: "Plataforma Web Institucional",
    desc: "Rediseño completo con foco en UX y performance, Lighthouse score 98/100.",
    tech: ["React", "Tailwind", "CMS"],
    tag: "Web",
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Portafolio
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Proyectos con <span className="text-gradient-primary">impacto medible</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Una selección de soluciones donde tecnología, datos y estrategia
            generaron resultados reales para el negocio.
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
                  Ver Proyecto <ArrowUpRight className="size-4" />
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
