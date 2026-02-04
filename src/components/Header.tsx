import React from 'react';
import { Zap, Sparkles, Brain } from 'lucide-react';

interface HeaderProps {
  onChatOpen: (message?: string) => void;
  onInvoiceUpload?: () => void;
  onPageChange?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onChatOpen, onPageChange, onInvoiceUpload }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-white/95 via-purple-50/95 to-cyan-50/95 backdrop-blur-xl border-b border-purple-200 z-50 shadow-lg">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 relative">
          <div className="flex items-center space-x-2 md:space-x-4 group">
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 border border-white/30 md:border-2">
                <Zap className="h-5 w-5 md:h-8 md:w-8 text-white drop-shadow-lg animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                LUZIA
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-xs font-bold text-purple-600 uppercase tracking-wider">COMPARADOR IA</span>
                <Sparkles className="h-2 w-2 md:h-3 md:w-3 text-cyan-500 animate-spin" />
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-10 relative">
            <a 
              href="#como-funciona" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative text-gray-800 hover:text-purple-600 font-black text-sm lg:text-lg transition-all duration-300 transform hover:scale-110 group cursor-pointer"
            >
              Cómo funciona
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </a>
            <a 
              href="#comparador" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('comparador')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative text-gray-800 hover:text-purple-600 font-black text-sm lg:text-lg transition-all duration-300 transform hover:scale-110 group cursor-pointer"
            >
              Comparar tarifas
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onPageChange?.('about');
              }}
              className="relative text-gray-800 hover:text-purple-600 font-black text-sm lg:text-lg transition-all duration-300 transform hover:scale-110 group cursor-pointer"
            >
              Sobre nosotros
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={onInvoiceUpload}
            className="hidden md:block relative bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white px-4 lg:px-10 py-2 lg:py-4 rounded-xl lg:rounded-2xl font-black text-sm lg:text-xl hover:from-purple-500 hover:via-pink-400 hover:to-cyan-400 transition-all duration-500 transform hover:scale-110 shadow-lg lg:shadow-2xl hover:shadow-purple-500/50 border border-white/30 lg:border-2 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative flex items-center space-x-1 lg:space-x-3">
              <Brain className="h-4 w-4 lg:h-6 lg:w-6 animate-pulse" />
              <span className="hidden lg:inline">FOTO/SUBIR FACTURA</span>
              <span className="lg:hidden">SUBIR FACTURA</span>
              <Sparkles className="h-3 w-3 lg:h-5 lg:w-5 animate-spin" />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-purple-200 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <a 
                href="#como-funciona" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-800 hover:text-purple-600 font-bold text-lg py-2 border-b border-purple-100"
              >
                Cómo funciona
              </a>
              <a 
                href="#comparador" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document.getElementById('comparador')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-800 hover:text-purple-600 font-bold text-lg py-2 border-b border-purple-100"
              >
                Comparar tarifas
              </a>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  onPageChange?.('about');
                }}
                className="block text-gray-800 hover:text-purple-600 font-bold text-lg py-2 border-b border-purple-100"
              >
                Sobre nosotros
              </a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onInvoiceUpload?.();
                }}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center space-x-3"
              >
                <Brain className="h-5 w-5 animate-pulse" />
                <span>FOTO/SUBIR FACTURA</span>
                <Sparkles className="h-4 w-4 animate-spin" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;