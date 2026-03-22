import React, { useState, useEffect } from 'react';
import { ArrowLeft, Zap, Shield, CheckCircle, TrendingDown, FileText, CheckCircle as CheckCircleIcon, Phone } from 'lucide-react';

interface SubirFacturaLandingProps {
  onBack: () => void;
  onChatOpen: (message?: string) => void;
}

const SubirFacturaLanding: React.FC<SubirFacturaLandingProps> = ({ onBack, onChatOpen }) => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 4,
    hours: 23,
    minutes: 41,
    seconds: 36
  });

  useEffect(() => {
    const newParticles = Array.from({length: 12}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChatClick = () => {
    onChatOpen('📄 ¡Hola! Quiero subir mi factura y descubrir cuánto puedo ahorrar en mi factura de luz. ¿Me ayudas?');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-lime-400 to-green-500 rounded-full animate-ping opacity-40"
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-lime-400 to-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <div className="relative bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 transform hover:scale-110 group"
          >
            <ArrowLeft className="h-6 w-6 text-white group-hover:text-lime-300 transition-colors" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-lime-500 to-green-600 rounded-xl flex items-center justify-center shadow-2xl animate-pulse">
              <Zap className="h-6 w-6 text-white drop-shadow-lg" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-lime-200 to-green-200 bg-clip-text text-transparent">
              LUZIA
            </span>
          </div>

          <div className="w-10"></div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-8 space-y-8 relative">

        {/* Badge superior */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime-500/20 to-green-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-lime-300/30 shadow-2xl mb-6">
            <Zap className="h-4 w-4 text-lime-400 animate-pulse" />
            <span className="text-sm font-bold text-lime-200">
              Análisis gratuito en menos de 24h
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-black leading-tight mb-6">
            <span className="block text-white">
              ¿Estás pagando de más en tu
            </span>
            <span className="block bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
              factura de luz?
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Descúbrelo en menos de 24 horas. Sube tu factura y recibe un estudio gratuito sin compromiso.
          </p>

          {/* Box de ahorro */}
          <div className="bg-gradient-to-r from-lime-900/40 to-green-900/40 backdrop-blur-xl rounded-3xl p-6 border-2 border-lime-400/30 shadow-2xl mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <TrendingDown className="h-8 w-8 text-lime-400" />
                <div className="text-left">
                  <p className="text-3xl font-black text-lime-400">Ahorra hasta 450€/año</p>
                  <p className="text-sm text-lime-200 font-semibold">Solo con subir tu factura ahora</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <button
            onClick={handleChatClick}
            className="w-full bg-gradient-to-r from-green-500 via-lime-500 to-green-600 text-black py-6 px-8 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 hover:from-green-400 hover:via-lime-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-lime-300/50 animate-pulse"
          >
            <Phone className="h-6 w-6" />
            <span>Chatear con LuzIA →</span>
          </button>
        </div>

        {/* Badges de confianza */}
        <div className="flex justify-center items-center space-x-6 py-4">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
            <Shield className="h-5 w-5 text-lime-400" />
            <span className="text-sm text-white font-bold">100% Seguro</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="h-5 w-5 text-lime-400" />
            <span className="text-sm text-white font-bold">Sin compromiso</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20">
            <CheckCircleIcon className="h-5 w-5 text-lime-400" />
            <span className="text-sm text-white font-bold">Gratis</span>
          </div>
        </div>

        {/* ¿Por qué hacerlo AHORA? */}
        <div className="bg-gradient-to-r from-orange-900/60 to-red-900/60 backdrop-blur-xl rounded-3xl p-8 border-2 border-orange-400/40 shadow-2xl">
          <h2 className="text-2xl font-black text-white mb-4 text-center flex items-center justify-center space-x-2">
            <Zap className="h-7 w-7 text-orange-400" />
            <span>¿Por qué hacerlo AHORA?</span>
            <Zap className="h-7 w-7 text-orange-400" />
          </h2>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-orange-300/30">
              <p className="text-orange-300 font-bold mb-2">Estamos en el mejor momento del año</p>
              <p className="text-gray-200 text-sm">para cambiar de tarifa y cerrar contratos más baratos.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-orange-300/30">
              <p className="text-gray-200 text-sm">Las compañías eléctricas están lanzando ofertas agresivas. Cada día que esperas es dinero que pierdes.</p>
            </div>
          </div>
        </div>

        {/* La realidad que nadie te cuenta */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-2xl font-black text-center mb-6">
            <span className="text-white">La realidad que </span>
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">nadie te cuenta</span>
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 backdrop-blur-xl rounded-2xl p-6 border border-red-400/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <TrendingDown className="h-8 w-8 text-white" />
              </div>
              <p className="text-white font-semibold text-lg">Estás pagando más que otros consumiendo menos</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 backdrop-blur-xl rounded-2xl p-6 border border-yellow-400/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <p className="text-white font-semibold text-lg">No entiendes tu factura y estás pagando conceptos innecesarios</p>
            </div>

            <div className="bg-gradient-to-r from-orange-900/40 to-orange-800/40 backdrop-blur-xl rounded-2xl p-6 border border-orange-400/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <p className="text-white font-semibold text-lg">Estás en una tarifa antigua sin saberlo</p>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-gradient-to-r from-lime-900/40 to-green-900/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-lime-400/30 shadow-2xl">
          <h2 className="text-2xl font-black text-center mb-6">
            <span className="text-white">Somos una de las asesorías energéticas que </span>
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">más dinero ha ahorrado</span>
            <span className="text-white"> a españoles</span>
          </h2>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-semibold">Ahorro total generado</span>
              <span className="text-3xl font-black text-lime-400">7.500.000€</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-lime-400 to-green-500 h-full rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-lime-300/30 text-center">
              <div className="text-3xl font-black text-lime-400">+30.000</div>
              <div className="text-sm text-gray-200 font-semibold">Clientes satisfechos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-lime-300/30 text-center">
              <div className="text-3xl font-black text-lime-400">250€</div>
              <div className="text-sm text-gray-200 font-semibold">Ahorro medio anual</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-lime-300/30 text-center">
              <div className="text-3xl font-black text-lime-400">97%</div>
              <div className="text-sm text-gray-200 font-semibold">Tasa de satisfacción</div>
            </div>
          </div>
        </div>

        {/* Cómo funciona */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-2xl font-black text-center mb-4">
            <span className="text-white">Cómo </span>
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">funciona</span>
          </h2>
          <p className="text-gray-300 text-center mb-8">Solo 3 pasos simples para empezar a ahorrar</p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl flex items-center justify-center font-black text-black text-2xl shadow-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-lime-300/30">
                <h3 className="text-xl font-bold text-white mb-2">Subes tu factura</h3>
                <p className="text-gray-300 text-sm">Rellena el formulario y adjunta tu última factura de luz. Tarda menos de 2 minutos.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl flex items-center justify-center font-black text-black text-2xl shadow-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-lime-300/30">
                <h3 className="text-xl font-bold text-white mb-2">Analizamos tu contrato</h3>
                <p className="text-gray-300 text-sm">Nuestro equipo revisa cada detalle y compara con las mejores opciones del mercado.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl flex items-center justify-center font-black text-black text-2xl shadow-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1 bg-gradient-to-r from-lime-900/60 to-green-900/60 backdrop-blur-xl rounded-2xl p-4 border-2 border-lime-400/50">
                <h3 className="text-xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent mb-2">Te llamamos solo si podemos mejorarlo</h3>
                <p className="text-lime-100 text-sm font-semibold">Si no hay mejora, no te molestamos. Así de simple.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Banner sin compromiso */}
        <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 backdrop-blur-xl rounded-3xl p-6 border-2 border-red-400/40 shadow-2xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-xl">
              <div className="w-8 h-8 border-4 border-white rounded-full flex items-center justify-center">
                <div className="w-6 h-1 bg-white rotate-45 absolute"></div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-black text-white mb-2">Sin permanencia. Sin compromisos</h3>
          <p className="text-red-200 font-semibold">El análisis es 100% gratuito y no te compromete a nada</p>
        </div>

        {/* CTA Final */}
        <div className="text-center space-y-4">
          <button
            onClick={handleChatClick}
            className="w-full bg-gradient-to-r from-green-500 via-lime-500 to-green-600 text-black py-6 px-8 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 hover:from-green-400 hover:via-lime-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-lime-300/50 animate-pulse"
          >
            <Phone className="h-6 w-6" />
            <span>Chatear con LuzIA</span>
          </button>
          <p className="text-gray-400 text-sm">Respuesta en menos de 2 minutos</p>
        </div>
      </div>

      {/* Countdown fijo inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-lime-600 to-green-600 py-3 px-4 shadow-2xl border-t-2 border-lime-400/50 z-50">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <span className="text-black font-bold text-sm">Oferta termina en:</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-black/30 backdrop-blur-xl px-3 py-1 rounded-lg">
              <span className="text-lime-400 font-black text-lg">{String(countdown.days).padStart(2, '0')}</span>
              <span className="text-white text-xs ml-1">d</span>
            </div>
            <div className="bg-black/30 backdrop-blur-xl px-3 py-1 rounded-lg">
              <span className="text-lime-400 font-black text-lg">{String(countdown.hours).padStart(2, '0')}</span>
              <span className="text-white text-xs ml-1">h</span>
            </div>
            <div className="bg-black/30 backdrop-blur-xl px-3 py-1 rounded-lg">
              <span className="text-lime-400 font-black text-lg">{String(countdown.minutes).padStart(2, '0')}</span>
              <span className="text-white text-xs ml-1">m</span>
            </div>
            <div className="bg-black/30 backdrop-blur-xl px-3 py-1 rounded-lg">
              <span className="text-lime-400 font-black text-lg">{String(countdown.seconds).padStart(2, '0')}</span>
              <span className="text-white text-xs ml-1">s</span>
            </div>
          </div>
          <button
            onClick={handleChatClick}
            className="bg-black text-lime-400 px-4 py-2 rounded-xl font-black text-sm hover:bg-gray-900 transition-all duration-300"
          >
            Chatear ahora
          </button>
        </div>
      </div>

      {/* Espacio para el footer fijo */}
      <div className="h-20"></div>
    </div>
  );
};

export default SubirFacturaLanding;
