import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const footerLinks = {
    producto: [
      { name: "Cómo funciona", href: "#como-funciona", scroll: true },
      { name: "Comparador", href: "#comparador", scroll: true },
      { name: "Testimonios", href: "#testimonios", scroll: true },
      { name: "Beneficios", href: "#beneficios", scroll: true }
    ],
    empresa: [
      { name: "Sobre nosotros", href: "#sobre-nosotros", page: "about" },
      { name: "Confianza", href: "#confianza", scroll: true, page: "trust" },
      { name: "Contacto", href: "#contacto", page: "contact" }
    ],
    soporte: [
      { name: "WhatsApp", href: "https://wa.me/34621508300?text=Hola,%20vengo%20de%20luzia.pro" },
      { name: "Email", href: "mailto:info@luzia.pro" },
      { name: "Teléfono", href: "tel:+34621508300" },
      { name: "Chat en vivo", action: "chat" }
    ],
    legal: [
      { name: "Política de privacidad", href: "#privacidad", page: "privacy" },
      { name: "Términos de uso", href: "#terminos", page: "terms" },
      { name: "Cookies", href: "#cookies", page: "cookies" },
      { name: "Aviso legal", href: "#legal", page: "legal" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="space-y-6 lg:space-y-8 relative text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3">
              <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-500 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl">
                <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-white drop-shadow-lg" />
              </div>
              <span className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                LUZIA
              </span>
            </div>
            
            <p className="text-purple-200 leading-relaxed max-w-lg text-base lg:text-lg font-medium mx-auto lg:mx-0">
              El comparador de luz y gas más avanzado de España. 
              <span className="font-black text-cyan-200">Inteligencia artificial</span> que encuentra la tarifa más barata, 
              respaldado por un equipo humano de <span className="font-black text-pink-200">expertos energéticos.</span>
            </p>
            
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-4 text-purple-200 hover:text-cyan-300 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="font-semibold text-sm lg:text-base">info@luzia.pro</span>
              </div>
              <div className="flex items-center space-x-4 text-purple-200 hover:text-cyan-300 transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-semibold text-sm lg:text-base">621 50 83 00</span>
              </div>
              <div className="flex items-center space-x-4 text-purple-200 hover:text-cyan-300 transition-colors">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold text-sm lg:text-base">Calle Andarella 2 pt 9, España</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 relative">
            <div>
              <h3 className="font-black text-white mb-4 lg:mb-6 text-base lg:text-lg">Producto</h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.producto.map((link, index) => (
                  <li key={index}>
                    {link.scroll ? (
                      <button
                        onClick={() => {
                          const element = document.getElementById(link.href.replace('#', ''));
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-purple-200 hover:text-cyan-300 transition-colors font-semibold text-left text-sm lg:text-base"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.href} className="text-purple-200 hover:text-cyan-300 transition-colors font-semibold text-sm lg:text-base">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-black text-white mb-4 lg:mb-6 text-base lg:text-lg">Empresa</h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    {link.page ? (
                      <button
                        onClick={() => onPageChange(link.page)}
                        className="text-purple-200 hover:text-cyan-300 transition-colors font-semibold text-left text-sm lg:text-base"
                      >
                        {link.name}
                      </button>
                    ) : link.scroll ? (
                      <button
                        onClick={() => {
                          const element = document.getElementById(link.href.replace('#', ''));
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-purple-200 hover:text-cyan-300 transition-colors font-semibold text-left text-sm lg:text-base"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.href} className="text-purple-200 hover:text-cyan-300 transition-colors font-semibold text-sm lg:text-base" target={link.href.startsWith('http') ? '_blank' : '_self'}>
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-black text-white mb-4 lg:mb-6 text-base lg:text-lg">Soporte</h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.soporte.map((link, index) => (
                  <li key={index}>
                    {link.action === 'chat' ? (
                      <button
                        onClick={() => onPageChange('chat')}
                        className="text-purple-200 hover:text-cyan-300 transition-colors font-semibold text-left text-sm lg:text-base"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.href} className="text-purple-200 hover:text-cyan-300 transition-colors font-semibold text-sm lg:text-base" target={link.href.startsWith('http') ? '_blank' : '_self'}>
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-black text-white mb-4 lg:mb-6 text-base lg:text-lg">Legal</h3>
              <ul className="space-y-2 lg:space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => onPageChange(link.page)}
                      className="text-purple-200 hover:text-cyan-300 transition-colors font-semibold text-left text-sm lg:text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-white/30 pt-6 lg:pt-10 relative">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-300 text-sm lg:text-lg font-semibold text-center md:text-left">
              © 2025 LUZIA. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-purple-300 text-sm lg:text-lg font-semibold">Síguenos:</span>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl rounded-xl lg:rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-cyan-500/40 transition-all duration-300 transform hover:scale-110 border border-white/20"
                  >
                    <span className="text-xs lg:text-xs font-black text-cyan-300">
                      {social.slice(0, 2)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;