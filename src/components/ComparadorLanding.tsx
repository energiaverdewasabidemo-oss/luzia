import React, { useState, useEffect } from 'react';
import { ArrowLeft, Euro, Shield, Clock, MessageCircle, Zap, Sparkles, TrendingUp, Brain, Star, CheckCircle, Users, Award, Target, BarChart3, Lightbulb, Phone, Mail } from 'lucide-react';

interface ComparadorLandingProps {
  onBack: () => void;
  onChatOpen: (message?: string) => void;
}

const ComparadorLanding: React.FC<ComparadorLandingProps> = ({ onBack, onChatOpen }) => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Crear partículas flotantes
    const newParticles = Array.from({length: 15}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);

    // Animación de entrada
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Rotar testimonios automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    onChatOpen('🚀 ¡Hola! Vengo del COMPARADOR IA de LUZIA y quiero calcular mi ahorro en la factura de luz y gas. ¿Me ayudas a encontrar la mejor tarifa? ⚡💰');
  };

  const handleContactClick = () => {
    onChatOpen('💡 Hola, quiero más información sobre el comparador IA de LUZIA para ahorrar en mi factura energética');
  };

  const benefits = [
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
  ];

  const features = [
    {
      icon: Brain,
      title: "Inteligencia Artificial Avanzada",
      description: "Algoritmos de machine learning que analizan +1000 tarifas en tiempo real",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Análisis Personalizado",
      description: "Estudiamos tu consumo histórico para encontrar la tarifa perfecta",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Precisión Máxima",
      description: "99.9% de precisión en nuestras recomendaciones de ahorro",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Users,
      title: "Soporte Experto",
      description: "Equipo de 20+ especialistas en energía disponibles 24/7",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Familia de 4 personas",
      text: "LUZIA me ayudó a ahorrar más de 450€ al año. El proceso fue súper fácil y transparente.",
      rating: 5,
      savings: "€456/año",
      avatar: "MG"
    },
    {
      name: "Carlos Ruiz",
      role: "Empresario",
      text: "Como propietario de negocio, cada euro cuenta. LUZIA encontró una tarifa que me ahorra 15% mensual.",
      rating: 5,
      savings: "€1,240/año",
      avatar: "CR"
    },
    {
      name: "Ana Martín",
      role: "Jubilada",
      text: "Pensé que cambiar sería complicado, pero LUZIA lo hizo todo por mí. Ahora pago mucho menos.",
      rating: 5,
      savings: "€218/año",
      avatar: "AM"
    }
  ];

  const companies = [
    { name: "Iberdrola", short: "IB", color: "from-green-500 to-green-600" },
    { name: "Endesa", short: "EN", color: "from-blue-500 to-blue-600" },
    { name: "Naturgy", short: "NT", color: "from-orange-500 to-orange-600" },
    { name: "Repsol", short: "RP", color: "from-red-500 to-red-600" },
    { name: "TotalEnergies", short: "TE", color: "from-purple-500 to-purple-600" },
    { name: "Octopus", short: "OE", color: "from-pink-500 to-pink-600" }
  ];

  const steps = [
    {
      number: "1",
      title: "Sube tu factura",
      description: "Fotografía o sube tu última factura en 10 segundos",
      icon: "📄"
    },
    {
      number: "2", 
      title: "IA analiza",
      description: "Nuestra IA compara +1000 tarifas automáticamente",
      icon: "🤖"
    },
    {
      number: "3",
      title: "Elige y ahorra",
      description: "Selecciona la mejor opción y nosotros gestionamos todo",
      icon: "💰"
    }
  ];

  const faqs = [
    {
      question: "¿Es realmente gratis?",
      answer: "Sí, 100% gratuito. Solo ganamos si tú ahorras."
    },
    {
      question: "¿Cuánto puedo ahorrar?",
      answer: "El ahorro medio es de €487/año, pero puede ser mucho más."
    },
    {
      question: "¿Cuánto tarda el cambio?",
      answer: "15-30 días. Tu luz nunca se corta durante el proceso."
    }
  ];

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

      <div className="max-w-md mx-auto px-6 py-8 space-y-12">
        
        {/* Hero Section */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-purple-300/30 shadow-2xl animate-bounce mb-6">
            <Star className="h-4 w-4 text-yellow-400 animate-spin" />
            <span className="text-sm font-bold bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
              #1 COMPARADOR IA DE ESPAÑA
            </span>
            <TrendingUp className="h-4 w-4 text-green-400 animate-pulse" />
          </div>

          <h1 className="text-4xl font-black leading-tight mb-8">
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
        </div>

        {/* CTA Flotante después del Hero */}
        <div className="sticky top-4 z-30 mb-8">
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white py-4 px-6 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:from-green-400 hover:via-green-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white/30 animate-pulse"
          >
            <MessageCircle className="h-6 w-6 animate-bounce" />
            <span>💬 CALCULAR AHORRO WHATSAPP</span>
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
          </button>
        </div>

        {/* Beneficios principales */}
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
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

        {/* Características avanzadas */}
        <div className="bg-gradient-to-r from-black/40 via-purple-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-2xl font-black text-center bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent mb-8">
            🚀 TECNOLOGÍA AVANZADA
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-xl`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-xs text-purple-200 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cómo funciona */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-2xl font-black text-center text-white mb-8">
            ⚡ CÓMO FUNCIONA
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-black text-white text-lg shadow-xl">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-purple-200 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonios */}
        <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-xl rounded-3xl p-8 border border-green-300/20 shadow-2xl">
          <h2 className="text-2xl font-black text-center text-white mb-8">
            💬 LO QUE DICEN NUESTROS USUARIOS
          </h2>
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ${index === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'}`}
              >
                <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white mr-4">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-purple-200 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-green-400">{testimonial.savings}</div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA después de testimonios */}
        <div className="text-center">
          <p className="text-white font-bold mb-4">💬 Únete a +100K usuarios satisfechos</p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-12 py-6 rounded-3xl font-black text-2xl hover:from-green-400 hover:via-green-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-110 shadow-2xl border-3 border-white/40 flex items-center justify-center space-x-4 mx-auto animate-pulse"
          >
            <span>🚀</span>
            <span>QUIERO AHORRAR YA</span>
            <span>💰</span>
          </button>
        </div>

        {/* Compañías */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            🏢 COMPARAMOS TODAS LAS COMPAÑÍAS
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {companies.map((company, index) => (
              <div key={index} className={`bg-gradient-to-r ${company.color} rounded-xl p-4 text-center shadow-xl hover:scale-105 transition-all duration-300`}>
                <div className="font-black text-white text-lg">{company.short}</div>
                <div className="text-xs text-white/80">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-xl rounded-3xl p-8 border border-blue-300/20 shadow-2xl">
          <h2 className="text-2xl font-black text-center text-white mb-8">
            ❓ PREGUNTAS FRECUENTES
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                <h4 className="font-bold text-white mb-2">{faq.question}</h4>
                <p className="text-purple-200 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA después de FAQ */}
        <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 backdrop-blur-xl rounded-3xl p-8 border border-green-300/40 shadow-2xl text-center">
          <h3 className="text-2xl font-black text-white mb-4">🎯 ¿Tienes más dudas?</h3>
          <p className="text-green-200 mb-6">Nuestros expertos te ayudan por WhatsApp</p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3 mx-auto"
          >
            <MessageCircle className="h-6 w-6 animate-bounce" />
            <span>RESOLVER DUDAS</span>
          </button>
        </div>

        {/* Contacto directo */}
        <div className="bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center">
          <h3 className="text-xl font-bold text-white mb-6">📞 CONTACTO DIRECTO</h3>
          <div className="space-y-4">
            <a href="tel:+34621508300" className="flex items-center justify-center space-x-3 text-white hover:text-cyan-300 transition-colors">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">621 50 83 00</span>
            </a>
            <a href="mailto:info@luzia.pro" className="flex items-center justify-center space-x-3 text-white hover:text-cyan-300 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">info@luzia.pro</span>
            </a>
          </div>
        </div>

        {/* Sección final con estadísticas */}
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
        <div className="flex justify-center items-center space-x-6 opacity-80">
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

      {/* Botón flotante fijo en la parte inferior */}
      <div className="fixed bottom-4 left-4 right-4 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white py-4 px-6 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:from-green-400 hover:via-green-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white/30 animate-pulse"
        >
          <MessageCircle className="h-6 w-6 animate-bounce" />
          <span>💬 CALCULAR AHORRO</span>
          <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
        </button>
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