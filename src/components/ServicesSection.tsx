import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web Modernas",
    description: "Desarrollo de sitios web responsivos y atractivos para negocios y emprendedores. Desde landing pages hasta plataformas completas.",
    features: ["Diseño responsive", "SEO optimizado", "Carga rápida", "Fácil administración"]
  },
  {
    icon: Zap,
    title: "Automatizaciones Inteligentes",
    description: "Optimizo procesos empresariales con automatizaciones que ahorran tiempo y reducen errores, aumentando la productividad.",
    features: ["Procesos automáticos", "Integración APIs", "Notificaciones smart", "Reportes automatizados"]
  },
  {
    icon: Settings,
    title: "Software a Medida",
    description: "Desarrollo sistemas personalizados como inventarios, plataformas de monitoreo, gestión escolar y soluciones empresariales.",
    features: ["Soluciones únicas", "Escalable", "Mantenimiento incluido", "Capacitación del equipo"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios que <span className="gradient-text">transforman</span> tu negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrezco soluciones tecnológicas completas que impulsan el crecimiento 
            y la eficiencia de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;