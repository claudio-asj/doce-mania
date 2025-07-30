import { Headset } from "lucide-react";

export function SacButton() {
  // --- DADOS PARA O WHATSAPP ---
  const phoneNumber = "5521979317341"; // Use o mesmo número ou um específico para SAC
  const message = "Olá! Preciso de ajuda e gostaria de falar com o suporte.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed           
        bottom-6        
        left-6          
        z-50            
        flex            
        h-12            
        w-12            
        items-center    
        justify-center  
        rounded-full    
        bg-green-500    
        text-white      
        shadow-lg       
        transition-all
        duration-300
        hover:bg-green-600
        hover:scale-110
      "
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Headset size={24} />
    </a>
  );
}
