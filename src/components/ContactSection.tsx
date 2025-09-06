import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Linkedin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission with Supabase
    toast({
      title: "Mensaje enviado",
      description: "Gracias por tu interés. Te contactaré pronto.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      action: "Escribir ahora",
      href: "https://wa.me/573001234567?text=Hola José David, me interesa tu trabajo",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "josedavid@ejemplo.com",
      action: "Enviar email",
      href: "mailto:josedavid@ejemplo.com",
      color: "text-blue-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Conectemos profesionalmente",
      action: "Ver perfil",
      href: "https://linkedin.com/in/josedavidblanodn",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="gradient-text">transformar</span> tu negocio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conversemos sobre tu proyecto. Te ayudo a encontrar la solución tecnológica 
            perfecta para hacer crecer tu empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Cuéntame sobre tu proyecto</CardTitle>
              <CardDescription>
                Completa el formulario y te contactaré en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Describe tu proyecto</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame qué necesitas: página web, automatización, sistema personalizado..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Otras formas de contacto
              </h3>
              <p className="text-muted-foreground">
                Elige la opción que prefieras para comenzar nuestra conversación
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${method.color} bg-current/10 rounded-xl flex items-center justify-center`}>
                        <method.icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(method.href, '_blank')}
                      >
                        {method.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-2">¿Prefieres hablar directamente?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Agenda una llamada gratuita de 30 minutos para discutir tu proyecto
                </p>
                <Button className="btn-hero">
                  Agendar llamada
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;