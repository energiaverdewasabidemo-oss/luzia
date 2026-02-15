import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import LuziaAvatar from './LuziaAvatar';

interface HeroSectionProps {
  onChatOpen: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onChatOpen }) => {
  const [particles, setParticles] = React.useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  React.useEffect(() => {
    // Reducir partículas para mejor performance
    const newParticles = Array.from({length: 8}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 via-blue-900 to-cyan-600 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Particles */}
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
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-purple-300/30 shadow-2xl">
              <Sparkles className="h-5 w-5 text-purple-300 animate-spin" />
              <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">COMPARADOR INTELIGENTE</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
              <span className="block">LUZIA:</span>
              <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                compara tarifas de luz y gas
              </span>
              <span className="block bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">y ahorra hasta €500/año</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-3xl text-purple-100 leading-relaxed font-medium">
              Inteligencia artificial que compara 
              <span className="font-black text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text"> +1,000 tarifas </span>
              de todas las compañías para encontrar
              <span className="font-black text-cyan-300"> la más barata para ti.</span>
            </p>
            
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <button 
                onClick={() => onChatOpen('Quiero comparar tarifas de luz y gas para ahorrar')}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-6 lg:px-10 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-lg lg:text-xl hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 transition-all duration-500 transform hover:scale-105 lg:hover:scale-110 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center space-x-2 lg:space-x-3 border-2 border-white/20"
              >
                <Sparkles className="h-5 w-5 lg:h-6 lg:w-6 animate-spin" />
                <span className="text-center">COMPARAR TARIFAS GRATIS</span>
                <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6 animate-pulse" />
              </button>
              
              <button 
                onClick={() => onChatOpen('¿Cómo funciona LUZIA?')}
                className="border-2 border-white/30 text-white px-6 lg:px-8 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-500 backdrop-blur-xl"
              >
                📊 Ver Cómo Funciona
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-4 lg:pt-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">+100K</div>
                <div className="text-xs lg:text-sm text-purple-200 font-semibold">Usuarios Activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">€487</div>
                <div className="text-xs lg:text-sm text-purple-200 font-semibold">Ahorro Medio Anual</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">99.9%</div>
                <div className="text-xs lg:text-sm text-purple-200 font-semibold">Precisión</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl px-3 lg:px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-300 font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl px-3 lg:px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-blue-300 font-semibold">GDPR</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl px-3 lg:px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-purple-300 font-semibold">SEGURO</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center relative mt-8 lg:mt-0">
            {/* Holographic Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <LuziaAvatar onChatOpen={onChatOpen} />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;