import { BarChart3, Cloud, Code2, Megaphone } from "lucide-react";

const groups = [
  {
    icon: BarChart3,
    title: "Data & BI",
    skills: [
      { name: "Power BI", level: 95 },
      { name: "SQL / Modelado", level: 90 },
      { name: "Reporting & KPIs", level: 92 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infraestructura",
    skills: [
      { name: "Microsoft Azure", level: 85 },
      { name: "Azure Virtual Desktop", level: 88 },
      { name: "Networking & Telecom", level: 90 },
    ],
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    skills: [
      { name: "WordPress / CMS", level: 92 },
      { name: "SEO Técnico", level: 85 },
      { name: "UX / Performance", level: 80 },
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth",
    skills: [
      { name: "Campañas digitales", level: 82 },
      { name: "Analytics & CRO", level: 85 },
      { name: "Automatización", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30 relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Skills & Expertise
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Stack que <span className="text-gradient-primary">resuelve problemas</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all shadow-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <g.icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground/90">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
