import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola José David, me interesa conocer más sobre tus servicios de desarrollo web");
    const whatsappUrl = `https://wa.me/573001234567?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Hablemos por WhatsApp!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-foreground"></div>
      </div>
    </button>
  );
};

export default WhatsAppFloat;