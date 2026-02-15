import React, { useState, useEffect } from 'react';
import { ArrowLeft, Euro, Shield, Clock, MessageCircle, Zap, Sparkles, TrendingUp, Brain, Star } from 'lucide-react';

interface ComparadorLandingProps {
  onBack: () => void;
  onChatOpen: (message?: string) => void;
}

const ComparadorLanding: React.FC<ComparadorLandingProps> = ({ onBack, onChatOpen }) => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Crear partículas flotantes
    const newParticles = Array.from({length: 12}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);

    // Animación de entrada
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleWhatsAppClick = () => {
    onChatOpen('🚀 ¡Hola! Vengo del COMPARADOR IA de LUZIA y quiero calcular mi ahorro en la factura de luz y gas. ¿Me ayudas a encontrar la mejor tarifa? ⚡💰');
  };

  const handleContactClick = () => {
    onChatOpen('💡 Hola, quiero más información sobre el comparador IA de LUZIA para ahorrar en mi factura energética');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 via-pink-900 to-cyan-600 relative overflow-hidden">
      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-ping opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${4 + particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <div className="relative bg-black/20 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 transform hover:scale-110 group"
          >
            <ArrowLeft className="h-6 w-6 text-white group-hover:text-cyan-300 transition-colors" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-2xl animate-pulse">
              <Zap className="h-6 w-6 text-white drop-shadow-lg" />
            </div>
            <div className="text-center">
              <span className="text-2xl font-black bg-gradient-to-r from-purple-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">
                LUZIA
              </span>
              <div className="flex items-center space-x-1">
                <Brain className="h-3 w-3 text-cyan-300 animate-pulse" />
                <span className="text-xs font-bold text-purple-200 uppercase tracking-wider">COMPARADOR IA</span>
                <Sparkles className="h-3 w-3 text-pink-300 animate-spin" />
              </div>
            </div>
          </div>
          
          <div className="w-10"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className={`max-w-md mx-auto px-6 py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Badge superior */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-purple-300/30 shadow-2xl animate-bounce">
            <Star className="h-4 w-4 text-yellow-400 animate-spin" />
            <span className="text-sm font-bold bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
              #1 COMPARADOR IA DE ESPAÑA
            </span>
            <TrendingUp className="h-4 w-4 text-green-400 animate-pulse" />
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl font-black text-center mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent animate-pulse">
            Ahorra en tu factura
          </span>
          <span className="block bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            de luz y gas
          </span>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-ping"></div>
            <span className="text-lg bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-black">
              CON INTELIGENCIA ARTIFICIAL
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
        </h1>

        {/* Beneficios con animaciones */}
        <div className="space-y-6 mb-12">
          {[
            {
              icon: Euro,
              text: "Servicio gratuito con un ahorro medio de 487 € al año",
              color: "from-green-400 to-emerald-500",
              delay: "0s"
            },
            {
              icon: Shield,
              text: "Gestionamos el cambio con las comercializadoras por ti",
              color: "from-blue-400 to-cyan-500",
              delay: "0.2s"
            },
            {
              icon: Clock,
              text: "Te revisamos cada 3 meses las mejores tarifas",
              color: "from-purple-400 to-pink-500",
              delay: "0.4s"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 transform hover:scale-105 transition-all duration-500 animate-slideInLeft"
              style={{animationDelay: benefit.delay}}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl hover:rotate-12 transition-all duration-500 border-2 border-white/30`}>
                <benefit.icon className="h-7 w-7 text-white drop-shadow-lg" />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-lg text-white font-bold leading-relaxed drop-shadow-lg">
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones CTA súper guays */}
        <div className="space-y-4 mb-12">
          {/* Botón WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white py-5 px-6 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:from-green-400 hover:via-green-500 hover:to-emerald-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-green-500/50 border-2 border-white/30 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <MessageCircle className="h-6 w-6 animate-bounce relative z-10" />
            <span className="relative z-10">CALCULAR POR WHATSAPP</span>
            <div className="w-3 h-3 bg-white rounded-full animate-ping relative z-10"></div>
          </button>

          {/* Botón Contacto */}
          <button
            onClick={handleContactClick}
            className="w-full border-2 border-white/50 text-white py-5 px-6 rounded-2xl font-black text-lg hover:bg-white/20 transition-all duration-500 transform hover:scale-105 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">💬 CONTÁCTANOS</span>
          </button>
        </div>

        {/* Sección inferior con estadísticas */}
        <div className="bg-gradient-to-r from-black/40 via-purple-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl animate-pulse">
              <Brain className="h-10 w-10 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-xl font-black bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent mb-2">
              INTELIGENCIA ARTIFICIAL AVANZADA
            </h3>
            <p className="text-purple-200 font-semibold text-sm">
              Ahorra hasta €487/año con nuestro comparador IA
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { number: "100K+", label: "Usuarios" },
              { number: "€25M", label: "Ahorrados" },
              { number: "4.9★", label: "Valoración" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-pulse">
                  {stat.number}
                </div>
                <div className="text-xs text-purple-200 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de confianza */}
        <div className="flex justify-center items-center space-x-6 mt-8 opacity-80">
          {['SSL', 'GDPR', 'ISO'].map((cert, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-purple-200 font-bold">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ComparadorLanding;