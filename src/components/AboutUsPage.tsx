import React from 'react';
import { Users, Target, Award, Heart, ArrowLeft, Zap } from 'lucide-react';

interface AboutUsPageProps {
  onBack: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onBack }) => {
  const team = [
    {
      name: "CEO & Fundadora",
      role: "CEO & Fundadora",
      description: "15 años de experiencia en el sector energético. Experta en regulación y mercados.",
      image: "CEO"
    },
    {
      name: "Director Técnico",
      role: "CTO",
      description: "Ingeniero especializado en IA y machine learning aplicado al sector energético.",
      image: "CTO"
    },
    {
      name: "Directora Comercial",
      role: "Directora Comercial",
      description: "Especialista en atención al cliente y negociación con compañías energéticas.",
      image: "COM"
    },
    {
      name: "Analista Senior",
      role: "Analista Senior",
      description: "Experto en análisis de datos y optimización de tarifas energéticas.",
      image: "ANA"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Transparencia Total",
      description: "Sin letra pequeña, sin comisiones ocultas. Todo claro desde el primer momento."
    },
    {
      icon: Users,
      title: "Centrados en el Cliente",
      description: "Tu ahorro es nuestro éxito. Solo ganamos si tú ahorras realmente."
    },
    {
      icon: Target,
      title: "Precisión Máxima",
      description: "Tecnología de vanguardia para encontrar exactamente la mejor tarifa para ti."
    },
    {
      icon: Award,
      title: "Excelencia en Servicio",
      description: "Atención personalizada con expertos humanos disponibles 24/7."
    }
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
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                LUZIA
              </h1>
            </div>
            <p className="text-2xl text-gray-700 font-semibold max-w-4xl mx-auto">
              El comparador de luz y gas más avanzado de España, creado por expertos para ayudarte a ahorrar
            </p>
          </div>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center">
              <h2 className="text-4xl font-black mb-8">Nuestra Misión</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto font-medium">
                Democratizar el acceso a las mejores tarifas energéticas mediante inteligencia artificial, 
                eliminando la complejidad del mercado energético y garantizando que cada español pueda 
                ahorrar en su factura de luz y gas sin esfuerzo.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-purple-200">
            <h2 className="text-4xl font-black text-gray-900 mb-8 text-center">Nuestra Historia</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>LUZIA nació en 2023</strong> cuando nuestro equipo de ingenieros y expertos en energía 
                  se dio cuenta de que millones de españoles pagaban de más en sus facturas simplemente 
                  por no tener acceso a información clara y comparaciones precisas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Desarrollamos una <strong>inteligencia artificial especializada</strong> que analiza en tiempo real 
                  más de 1,000 tarifas de todas las compañías energéticas, considerando el consumo real 
                  de cada usuario para encontrar la opción más económica.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En menos de 2 años, hemos ayudado a <strong>más de 100,000 familias</strong> a ahorrar 
                  un total de <strong>25 millones de euros</strong> en sus facturas energéticas.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-purple-600 mb-2">100K+</div>
                    <div className="text-sm text-gray-700 font-semibold">Usuarios Satisfechos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-pink-600 mb-2">€25M</div>
                    <div className="text-sm text-gray-700 font-semibold">Ahorrados en Total</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-cyan-600 mb-2">1000+</div>
                    <div className="text-sm text-gray-700 font-semibold">Tarifas Analizadas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-green-600 mb-2">4.9/5</div>
                    <div className="text-sm text-gray-700 font-semibold">Valoración Media</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed font-medium">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-black text-xl">
                  {member.image}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{member.role}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section>
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-black mb-8 text-center">Tecnología de Vanguardia</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-black mb-4">Inteligencia Artificial</h3>
                <p className="text-gray-300">Algoritmos avanzados que aprenden de patrones de consumo para optimizar recomendaciones.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-black mb-4">Análisis en Tiempo Real</h3>
                <p className="text-gray-300">Monitorización continua de precios y condiciones del mercado energético.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-black mb-4">Seguridad Máxima</h3>
                <p className="text-gray-300">Encriptación bancaria y certificaciones ISO para proteger tus datos.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;