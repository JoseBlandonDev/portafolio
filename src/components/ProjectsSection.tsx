import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectWeb from "@/assets/project-web.jpg";
import projectAutomation from "@/assets/project-automation.jpg";
import projectCustom from "@/assets/project-custom.jpg";

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Plataforma de ventas online con sistema de pagos integrado, inventario automatizado y panel administrativo completo.",
    image: projectWeb,
    technologies: ["React", "PHP", "MySQL", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Sistema de Automatización",
    description: "Herramienta que automatiza procesos de facturación, envío de emails y generación de reportes para una empresa de servicios.",
    image: projectAutomation,
    technologies: ["PHP", "APIs", "Webhooks", "MySQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Plataforma Educativa",
    description: "Sistema de gestión escolar con módulos de estudiantes, profesores, calificaciones y comunicación con padres.",
    image: projectCustom,
    technologies: ["React", "PHP", "MySQL", "Charts.js"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proyectos <span className="gradient-text">destacados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada proyecto refleja mi compromiso con la calidad, la innovación 
            y las necesidades específicas de mis clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="btn-outline-hero">
            Ver todos los proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;