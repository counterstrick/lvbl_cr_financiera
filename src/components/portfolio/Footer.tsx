const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
      <div>
        © {new Date().getFullYear()} Alex Rivera · Todos los derechos reservados.
      </div>
      <div className="flex gap-6">
        <a href="#inicio" className="hover:text-foreground transition-colors">Inicio</a>
        <a href="#proyectos" className="hover:text-foreground transition-colors">Proyectos</a>
        <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
      </div>
    </div>
  </footer>
);

export default Footer;
