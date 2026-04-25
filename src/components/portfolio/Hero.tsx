import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" aria-hidden="true" />

      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 text-xs font-medium text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-primary animate-glow-pulse" />
            Disponible para nuevos proyectos
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-gradient">Alex Rivera</span>
            <br />
            <span className="text-gradient-primary">Datos & Estrategia</span>
            <br />
            <span className="text-foreground">Digital.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
            Ingeniero en Sistemas y Telecomunicaciones · Líder en Soluciones de
            Datos y Digital.
          </p>

          <p className="mt-3 text-lg sm:text-xl text-foreground/90 max-w-xl">
            "Transformo datos y tecnología en{" "}
            <span className="text-gradient-primary font-semibold">
              decisiones estratégicas
            </span>{" "}
            y soluciones escalables."
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="hero">
              <a href="#proyectos">
                Ver Proyectos <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline-glow">
              <a href="#contacto">
                Contáctame <Download className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "+8", v: "Años exp." },
              { k: "+40", v: "Proyectos" },
              { k: "15+", v: "Clientes" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-gradient-primary">
                  {s.k}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-scale-in">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow-pulse" />
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur opacity-60" />
            <img
              src={profile}
              alt="Alex Rivera, Ingeniero en Sistemas y Líder Digital"
              width={520}
              height={620}
              className="relative rounded-3xl w-72 sm:w-80 lg:w-[420px] aspect-[4/5] object-cover shadow-elegant animate-float"
            />
            <div className="absolute -bottom-6 -left-6 glass border border-border/60 rounded-2xl p-4 shadow-card hidden sm:block">
              <div className="text-xs text-muted-foreground">Especialidad</div>
              <div className="font-semibold text-sm">Power BI · Azure</div>
            </div>
            <div className="absolute -top-6 -right-4 glass border border-border/60 rounded-2xl p-4 shadow-card hidden sm:block">
              <div className="text-xs text-muted-foreground">Enfoque</div>
              <div className="font-semibold text-sm">Data → Decisiones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
