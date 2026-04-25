import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/000000000"
    target="_blank"
    rel="noreferrer"
    aria-label="Chatea por WhatsApp"
    className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow hover:scale-110 transition-transform animate-float"
  >
    <MessageCircle className="size-6 text-primary-foreground" />
    <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
  </a>
);

export default WhatsAppFloat;
