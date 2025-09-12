import React from 'react';
import { Brain, Users, Shield, Zap, TrendingUp, Clock } from 'lucide-react';

interface BenefitsSectionProps {
  onChatOpen: (message?: string) => void;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onChatOpen }) => {
  const benefits = [
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Nuestra IA analiza +1000 tarifas de luz y gas en tiempo real, considerando tu consumo real para encontrar la tarifa más barata.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Ahorro Garantizado",
      description: "Solo recomendamos cambios cuando garantizamos ahorro real. Media de €287/año por usuario con seguimiento continuo de tu tarifa.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Proceso Instantáneo",
      description: "Comparación en 30 segundos, cambio de compañía en 1 clic. Nosotros gestionamos todo el papeleo mientras tú empiezas a ahorrar.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Encriptación bancaria, certificación ISO 27001 y cumplimiento GDPR. Tus datos están más seguros que en tu banco.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Soporte Humano 24/7",
      description: "Equipo de 20+ expertos en energía disponibles por chat, teléfono o email. Respuesta media en menos de 2 minutos.",
      color: "from-emerald-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Comparación Completa",
      description: "Comparamos todas las compañías de España: Iberdrola, Endesa, Naturgy, Repsol y más de 30 empresas energéticas.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-2xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Por qué LUZIA es el mejor <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">comparador</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
            Combinamos <span className="font-black text-purple-600">inteligencia artificial</span> y 
            <span className="font-black text-cyan-600"> atención humana</span> para conseguirte el mejor precio de luz y gas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-xl lg:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-3 lg:hover:-translate-y-6 border-2 border-gradient-to-r from-purple-200 to-cyan-200 relative overflow-hidden">
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl lg:rounded-3xl`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl lg:rounded-3xl`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${benefit.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl lg:shadow-2xl`}>
                    <benefit.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white drop-shadow-lg" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-4 lg:mb-6 group-hover:text-purple-800 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg group-hover:text-gray-800 transition-colors">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Premium corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br ${benefit.color} opacity-5 rounded-bl-full transform translate-x-12 lg:translate-x-16 -translate-y-12 lg:-translate-y-16 group-hover:scale-150 group-hover:opacity-15 transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white shadow-xl lg:shadow-2xl border-2 lg:border-4 border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 animate-pulse"></div>
            <div className="relative">
              <h3 className="text-2xl lg:text-4xl font-black mb-4 lg:mb-6">¿Listo para ahorrar en tu factura?</h3>
              <p className="text-purple-100 mb-6 lg:mb-8 max-w-3xl mx-auto text-base lg:text-xl font-medium">
                Únete a los +100.000 usuarios que ya ahorran con LUZIA comparando tarifas de luz y gas automáticamente
              </p>
              <button 
                onClick={() => onChatOpen('Quiero empezar a ahorrar en mi factura')}
                className="bg-white text-purple-800 px-8 lg:px-12 py-4 lg:py-6 rounded-xl lg:rounded-2xl font-black text-lg lg:text-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 lg:hover:scale-110 shadow-xl lg:shadow-2xl border-2 lg:border-4 border-purple-200"
              >
                💡 COMPARAR TARIFAS GRATIS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;