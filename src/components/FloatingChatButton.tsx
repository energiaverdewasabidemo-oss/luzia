import React from 'react';
import { MessageCircle, Zap, Sparkles } from 'lucide-react';

interface FloatingChatButtonProps {
  onClick: () => void;
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 group"
      aria-label="Abrir chat con LUZIA"
    >
      {/* Main Button */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        
        {/* Button Container */}
        <div className="relative w-16 h-16 md:w-18 md:h-18 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 border-2 border-white/30 group-hover:rotate-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8 text-white drop-shadow-lg relative z-10" />
          
          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-bounce">
            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden md:block">
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white px-4 py-3 rounded-xl shadow-2xl border-2 border-white/30 whitespace-nowrap relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-xl animate-pulse"></div>
          <div className="relative flex items-center space-x-2">
            <Zap className="h-4 w-4 animate-pulse" />
            <span className="font-bold text-base">¡Compara tarifas!</span>
            <Sparkles className="h-3 w-3 animate-spin" />
          </div>
          {/* Arrow */}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-6 border-r-0 border-t-6 border-b-6 border-l-purple-600 border-t-transparent border-b-transparent"></div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-60 animate-ping"
          style={{
            top: `${20 + Math.sin(i * 120) * 15}%`,
            right: `${20 + Math.cos(i * 120) * 15}%`,
            animationDelay: `${i * 500}ms`,
            animationDuration: '2s'
          }}
        />
      ))}
    </button>
  );
};

export default FloatingChatButton;