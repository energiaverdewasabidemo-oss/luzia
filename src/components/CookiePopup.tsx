import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield } from 'lucide-react';

interface CookiePopupProps {
  onPageChange: (page: string) => void;
}

const CookiePopup: React.FC<CookiePopupProps> = ({ onPageChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    personalization: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('luzia-cookie-consent');
    if (!cookieConsent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('luzia-cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    
    // Here you would initialize your analytics, marketing tools, etc.
    console.log('All cookies accepted');
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('luzia-cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    
    console.log('Only necessary cookies accepted');
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('luzia-cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    
    console.log('Custom preferences saved:', consent);
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Cookie Popup */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-purple-200 overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Cookie className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-black">Configuración de Cookies</h3>
                <p className="text-purple-100 text-sm font-medium">Respetamos tu privacidad</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showSettings ? (
            // Simple View
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. 
                  Puedes aceptar todas las cookies o personalizar tus preferencias.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-purple-800 mb-1">Tu privacidad es importante</h4>
                    <p className="text-sm text-purple-700">
                      Solo utilizamos cookies esenciales para el funcionamiento básico. 
                      Las cookies analíticas y de marketing son opcionales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  ✅ Aceptar Todas
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-700 transition-all duration-300"
                >
                  ❌ Solo Necesarias
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Settings className="h-4 w-4" />
                  <span>Personalizar</span>
                </button>
              </div>

              <div className="text-center">
                <button
                  onClick={() => onPageChange('cookies')}
                  className="text-sm text-purple-600 hover:text-purple-800 font-semibold underline"
                >
                  Ver Política de Cookies Completa
                </button>
              </div>
            </div>
          ) : (
            // Settings View
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-black text-gray-900 mb-4">Personalizar Preferencias de Cookies</h4>
                <p className="text-gray-600 text-sm">
                  Puedes habilitar o deshabilitar diferentes tipos de cookies según tus preferencias.
                </p>
              </div>

              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900">🔧 Cookies Necesarias</h5>
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Esenciales para el funcionamiento básico del sitio web. No se pueden desactivar.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900">📊 Cookies Analíticas</h5>
                    <button
                      onClick={() => handlePreferenceChange('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 ${
                        preferences.analytics 
                          ? 'bg-green-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900">🎯 Cookies de Marketing</h5>
                    <button
                      onClick={() => handlePreferenceChange('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 ${
                        preferences.marketing 
                          ? 'bg-green-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Utilizadas para mostrar anuncios relevantes y medir la efectividad de las campañas.
                  </p>
                </div>

                {/* Personalization Cookies */}
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900">🎨 Cookies de Personalización</h5>
                    <button
                      onClick={() => handlePreferenceChange('personalization')}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 ${
                        preferences.personalization 
                          ? 'bg-green-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Recordamos tus preferencias para mejorar tu experiencia personalizada.
                  </p>
                </div>
              </div>

              {/* Settings Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  💾 Guardar Preferencias
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
                >
                  ← Volver
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CookiePopup;