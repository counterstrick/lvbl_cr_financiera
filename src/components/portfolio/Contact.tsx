import { useState } from "react";
import { Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Completa todos los campos");
      return;
    }
    toast.success("¡Mensaje enviado! Te contactaré pronto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Contacto
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Agenda tu <span className="text-gradient-primary">diagnóstico financiero gratuito</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            30 minutos · Cero compromiso · Te digo exactamente qué está
            sangrando tu rentabilidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 p-8 rounded-2xl bg-card border border-border shadow-card space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-2 block">
                Nombre
              </label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                className="bg-background border-border h-12"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-2 block">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@email.com"
                className="bg-background border-border h-12"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">
                Mensaje
              </label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Cuéntame sobre tu empresa o tu situación financiera..."
                rows={5}
                className="bg-background border-border resize-none"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Enviar Mensaje <Send className="size-4" />
            </Button>
          </form>

          <div className="lg:col-span-2 space-y-4">
            <a
              href="https://wa.me/000000000"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all shadow-card"
            >
              <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <MessageCircle className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Respuesta inmediata</div>
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all shadow-card"
            >
              <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Linkedin className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-muted-foreground">/in/alexrivera</div>
              </div>
            </a>
            <a
              href="mailto:contacto@alexrivera.finance"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all shadow-card"
            >
              <div className="size-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Mail className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">contacto@alexrivera.finance</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
