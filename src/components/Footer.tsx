import { Mail, MessageSquare, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: MessageSquare,
      href: "https://wa.me/573001234567",
      label: "WhatsApp",
      color: "hover:text-green-500"
    },
    {
      icon: Mail,
      href: "mailto:josedavid@ejemplo.com",
      label: "Email",
      color: "hover:text-blue-500"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/josedavidblanodn",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      href: "https://github.com/josedavidblanodn",
      label: "GitHub",
      color: "hover:text-gray-600"
    }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              José David <span className="text-accent">Blandon</span>
            </h3>
            <p className="text-background/80 mb-4">
              Desarrollador freelance especializado en crear soluciones web 
              que transforman negocios y optimizan procesos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-background/10 rounded-full flex items-center justify-center transition-colors duration-300 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/80">
              <li>Páginas Web Modernas</li>
              <li>Automatizaciones</li>
              <li>Software a Medida</li>
              <li>Mantenimiento Web</li>
              <li>Consultoría Técnica</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>WhatsApp: +57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>josedavid@ejemplo.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </span>
                <span>Colombia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center gap-1">
            © {currentYear} José David Blandon Aguirre. Hecho con{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
            para transformar negocios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;