import React from 'react';
import { ArrowLeft, Euro, Shield, Clock, MessageCircle } from 'lucide-react';

interface ComparadorLandingProps {
  onBack: () => void;
  onChatOpen: (message?: string) => void;
}

const ComparadorLanding: React.FC<ComparadorLandingProps> = ({ onBack, onChatOpen }) => {
  const handleWhatsAppClick = () => {
    onChatOpen('Hola, quiero calcular mi ahorro en la factura de luz y gas');
  };

  const handleContactClick = () => {
    onChatOpen('Hola, quiero más información sobre el comparador de tarifas');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">L</span>
            </div>
            <span className="text-xl font-black text-gray-900">LUZIA</span>
          </div>
          
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Main Title */}
        <h1 className="text-3xl font-black text-gray-900 text-center mb-8 leading-tight">
          Ahorra en tu factura de luz y gas
        </h1>

        {/* Benefits */}
        <div className="space-y-6 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Euro className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <p className="text-lg text-gray-900 font-semibold leading-relaxed">
                Servicio gratuito con un ahorro medio de 487 € al año
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Shield className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <p className="text-lg text-gray-900 font-semibold leading-relaxed">
                Gestionamos el cambio con las comercializadoras por ti
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Clock className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <p className="text-lg text-gray-900 font-semibold leading-relaxed">
                Te revisamos cada 3 meses las mejores tarifas
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Calcular por WhatsApp</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={handleContactClick}
            className="w-full border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300"
          >
            Contáctanos
          </button>
        </div>

        {/* Bottom Image Placeholder */}
        <div className="mt-12">
          <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="h-8 w-8 text-white" />
              </div>
              <p className="text-gray-600 font-semibold">
                Ahorra hasta €487/año<br/>
                con nuestro comparador IA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparadorLanding;