import { CheckCircle2, PiggyBank, Receipt, ShieldCheck, TrendingUp } from "lucide-react";

const problems = [
  "Empresarios que no saben si están ganando o perdiendo dinero realmente.",
  "Pagos de impuestos excesivos por falta de planeación fiscal.",
  "Contabilidad atrasada, desordenada y sin valor para tomar decisiones.",
  "Flujo de caja apretado mientras el Estado de Resultados muestra utilidad.",
];

const stats = [
  { icon: PiggyBank, k: "$8M+", v: "Ahorro fiscal generado a clientes" },
  { icon: TrendingUp, k: "+34%", v: "Margen neto promedio recuperado" },
  { icon: Receipt, k: "100%", v: "Cumplimiento tributario garantizado" },
  { icon: ShieldCheck, k: "0", v: "Sanciones tributarias en 12 años" },
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
              No vendo balances. <br />
              <span className="text-gradient-primary">Protejo tu dinero.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Acompaño a empresas, emprendedores y profesionales a tener
              claridad financiera, pagar lo justo en impuestos y construir
              negocios verdaderamente rentables.
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
