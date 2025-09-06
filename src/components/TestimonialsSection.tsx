import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    company: "Boutique Luna",
    content: "José David transformó completamente mi negocio online. La página web que desarrolló aumentó mis ventas en un 200% en los primeros 3 meses. Su atención al detalle es excepcional.",
    rating: 5,
    role: "Propietaria"
  },
  {
    name: "Carlos Ramírez",
    company: "Industrias del Norte",
    content: "El sistema de automatización que implementó nos ahorra más de 20 horas semanales en procesos administrativos. ROI increíble y soporte técnico de primera.",
    rating: 5,
    role: "Gerente de Operaciones"
  },
  {
    name: "Ana Patricia Soto",
    company: "Colegio San Miguel",
    content: "La plataforma educativa que desarrolló facilitó enormemente la gestión de nuestros 500+ estudiantes. Los padres y profesores están encantados con la funcionalidad.",
    rating: 5,
    role: "Directora Académica"
  }
];

const benefits = [
  {
    number: "50+",
    label: "Proyectos completados",
    description: "Cada uno entregado a tiempo y superando expectativas"
  },
  {
    number: "100%",
    label: "Clientes satisfechos",
    description: "Testimonios reales de transformación empresarial"
  },
  {
    number: "3 años",
    label: "De experiencia",
    description: "Especializándome en soluciones web innovadoras"
  },
  {
    number: "24/7",
    label: "Soporte técnico",
    description: "Mantenimiento y actualizaciones constantes"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Benefits Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {benefit.number}
              </div>
              <div className="text-lg font-semibold mb-1">
                {benefit.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen mis <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de empresarios que han transformado su negocio 
            con mis soluciones tecnológicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-accent">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;