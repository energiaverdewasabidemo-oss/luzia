import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

interface FinalCTASectionProps {
  onChatOpen: (message?: string) => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onChatOpen }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 via-pink-900 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 lg:space-x-3 bg-white/20 backdrop-blur-xl px-4 lg:px-6 py-2 lg:py-3 rounded-full mb-6 lg:mb-8 border border-white/30 shadow-xl lg:shadow-2xl">
            <Sparkles className="h-5 w-5 text-purple-300 animate-spin" />
            <span className="text-white font-black text-sm lg:text-lg">ÚNETE A +100K USUARIOS QUE AHORRAN</span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight">
            El mejor comparador de luz y gas ya está aquí:{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
              LUZIA
            </span>
          </h2>
          
          <p className="text-lg lg:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed font-medium">
            No esperes más para ahorrar en tu factura de luz y gas. 
            <span className="font-black text-cyan-200"> Inteligencia artificial </span>
            que encuentra la tarifa más barata, respaldada por 
            <span className="font-black text-pink-200"> atención humana.</span>
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-12 lg:mb-16">
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/30 shadow-xl lg:shadow-2xl transform hover:scale-105 lg:hover:scale-110 transition-all duration-500">
            <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-2 lg:mb-3">+100K</div>
            <div className="text-purple-100 font-semibold text-base lg:text-lg">Usuarios Ahorrando</div>
          </div>
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/30 shadow-xl lg:shadow-2xl transform hover:scale-105 lg:hover:scale-110 transition-all duration-500">
            <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent mb-2 lg:mb-3">€25M</div>
            <div className="text-purple-100 font-semibold text-base lg:text-lg">Ahorrados en Total</div>
          </div>
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/30 shadow-xl lg:shadow-2xl transform hover:scale-105 lg:hover:scale-110 transition-all duration-500">
            <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-2 lg:mb-3">4.98/5</div>
            <div className="text-purple-100 font-semibold text-base lg:text-lg">Valoración Media</div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="space-y-4 lg:space-y-6">
          <button 
            onClick={() => onChatOpen('Quiero empezar a comparar tarifas ahora mismo')}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-8 lg:px-16 py-4 lg:py-8 rounded-2xl lg:rounded-3xl font-black text-xl lg:text-3xl hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 transition-all duration-500 transform hover:scale-105 lg:hover:scale-115 shadow-xl lg:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center space-x-2 lg:space-x-4 mx-auto border-2 lg:border-4 border-white/30"
          >
            <Sparkles className="h-6 w-6 lg:h-8 lg:w-8 animate-spin" />
            <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 animate-pulse" />
            <span>COMPARAR TARIFAS GRATIS</span>
            <ArrowRight className="h-6 w-6 lg:h-8 lg:w-8 animate-pulse" />
          </button>
          
          <p className="text-purple-200 text-sm lg:text-lg font-semibold">
            ✓ Comparación gratuita en 30 segundos  ✓ Sin compromiso  ✓ Ahorro garantizado  ✓ Todas las compañías
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 lg:mt-16 pt-8 lg:pt-10 border-t-2 border-white/30">
          <p className="text-purple-200 text-base lg:text-lg mb-4 lg:mb-6 font-semibold">Proceso 100% seguro y certificado</p>
          <div className="flex justify-center items-center space-x-6 lg:space-x-10 opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xs lg:text-sm text-purple-200 font-semibold">SSL SEGURO</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xs lg:text-sm text-purple-200 font-semibold">GDPR</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-400 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xs lg:text-sm text-purple-200 font-semibold">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;