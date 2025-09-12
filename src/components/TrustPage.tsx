import React, { useState } from 'react';
import { Shield, Award, Users, CheckCircle, Star, ArrowLeft, Lock, Eye, Heart } from 'lucide-react';

interface TrustPageProps {
  onBack: () => void;
}

const TrustPage: React.FC<TrustPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('security');

  const certifications = [
    {
      name: "ISO 27001",
      description: "Certificación internacional de seguridad de la información",
      icon: "🏆",
      status: "Certificado"
    },
    {
      name: "GDPR Compliant",
      description: "Cumplimiento total del Reglamento General de Protección de Datos",
      icon: "🛡️",
      status: "Verificado"
    },
    {
      name: "SSL Encryption",
      description: "Encriptación de grado bancario para todas las comunicaciones",
      icon: "🔒",
      status: "Activo"
    },
    {
      name: "PCI DSS",
      description: "Estándar de seguridad para el manejo de datos de tarjetas",
      icon: "💳",
      status: "Certificado"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Cliente desde 2023",
      rating: 5,
      comment: "LUZIA me ayudó a ahorrar €450 al año. El proceso fue transparente y sin sorpresas. Recomiendo 100%.",
      savings: "€450/año"
    },
    {
      name: "Carlos Ruiz",
      role: "Empresario",
      rating: 5,
      comment: "Como propietario de negocio, necesitaba confianza total. LUZIA superó mis expectativas en transparencia y ahorro.",
      savings: "€1,200/año"
    },
    {
      name: "Ana Martín",
      role: "Familia numerosa",
      rating: 5,
      comment: "Con 4 hijos, cada euro cuenta. LUZIA encontró una tarifa que nos ahorra significativamente cada mes.",
      savings: "€380/año"
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Garantía de Ahorro",
      description: "Solo recomendamos cambios cuando garantizamos ahorro real. Si no ahorras, no cobramos."
    },
    {
      icon: Eye,
      title: "Transparencia Total",
      description: "Sin letra pequeña, sin comisiones ocultas. Todo claro desde el primer momento."
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Equipo humano disponible 24/7 para resolver cualquier duda o problema."
    },
    {
      icon: Lock,
      title: "Datos Seguros",
      description: "Tus datos están protegidos con los más altos estándares de seguridad internacional."
    }
  ];

  const tabs = [
    { id: 'security', label: 'Seguridad', icon: Shield },
    { id: 'testimonials', label: 'Testimonios', icon: Users },
    { id: 'guarantees', label: 'Garantías', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 mb-8 font-semibold transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver al inicio</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-6xl font-black text-gray-900 mb-6">
              Tu <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Confianza</span> es Nuestra Prioridad
            </h1>
            <p className="text-2xl text-gray-700 font-semibold max-w-4xl mx-auto">
              Más de 100,000 usuarios confían en LUZIA para ahorrar en sus facturas energéticas
            </p>
          </div>
        </div>

        {/* Trust Stats */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black mb-2">100K+</div>
                <div className="text-purple-100 font-semibold">Usuarios Satisfechos</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">€25M</div>
                <div className="text-purple-100 font-semibold">Ahorrados en Total</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">4.9/5</div>
                <div className="text-purple-100 font-semibold">Valoración Media</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">99.9%</div>
                <div className="text-purple-100 font-semibold">Satisfacción Cliente</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-2xl'
                    : 'bg-white text-gray-700 hover:bg-purple-50 shadow-lg border-2 border-purple-200'
                }`}
              >
                <tab.icon className="h-6 w-6" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'security' && (
          <section className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Máxima Seguridad Garantizada</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Tus datos están protegidos con los más altos estándares de seguridad internacional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl">{cert.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-black text-gray-900">{cert.name}</h3>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-black mb-8 text-center">Medidas de Seguridad Adicionales</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lock className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-black mb-4">Encriptación End-to-End</h4>
                  <p className="text-gray-300">Todas las comunicaciones están encriptadas desde tu dispositivo hasta nuestros servidores.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-black mb-4">Monitorización 24/7</h4>
                  <p className="text-gray-300">Supervisión continua de nuestros sistemas para detectar cualquier anomalía.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-black mb-4">Auditorías Regulares</h4>
                  <p className="text-gray-300">Auditorías de seguridad independientes para garantizar el cumplimiento normativo.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'testimonials' && (
          <section className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Lo Que Dicen Nuestros Usuarios</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Testimonios reales de familias y empresas que confían en LUZIA
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic leading-relaxed mb-6 text-lg">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="border-t-2 border-purple-100 pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-black text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 font-semibold">{testimonial.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-green-600">{testimonial.savings}</div>
                        <div className="text-xs text-gray-500 font-semibold">AHORRO ANUAL</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-12 border-2 border-green-200">
              <div className="text-center">
                <h3 className="text-3xl font-black text-gray-900 mb-6">Valoraciones Verificadas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-black text-green-600 mb-2">4.9/5</div>
                    <div className="text-gray-700 font-semibold">Google Reviews</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-green-600 mb-2">4.8/5</div>
                    <div className="text-gray-700 font-semibold">Trustpilot</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-green-600 mb-2">98%</div>
                    <div className="text-gray-700 font-semibold">Recomendarían LUZIA</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'guarantees' && (
          <section className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Nuestras Garantías</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Compromisos firmes que demuestran nuestra confianza en el servicio que ofrecemos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <guarantee.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-4">{guarantee.title}</h3>
                      <p className="text-gray-700 leading-relaxed font-medium">{guarantee.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="text-center">
                <h3 className="text-4xl font-black mb-8">Garantía de Satisfacción Total</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h4 className="text-xl font-black mb-4">30 Días de Garantía</h4>
                    <p className="text-purple-100">Si no estás satisfecho en los primeros 30 días, te ayudamos a volver a tu tarifa anterior sin coste.</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h4 className="text-xl font-black mb-4">Soporte Gratuito</h4>
                    <p className="text-purple-100">Atención personalizada gratuita durante todo el proceso y después del cambio de tarifa.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TrustPage;