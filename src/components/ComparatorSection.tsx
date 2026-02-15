import React, { useState } from 'react';
import { Filter, Zap, Flame, BarChart3, CheckCircle } from 'lucide-react';

interface ComparatorSectionProps {
  onChatOpen: (message?: string) => void;
}

const ComparatorSection: React.FC<ComparatorSectionProps> = ({ onChatOpen }) => {
  const [activeFilter, setActiveFilter] = useState('dual');
  const [consumption, setConsumption] = useState('medio');

  const getTariffs = () => [
    {
      company: "Compañía Verde",
      type: "Dual",
      price: "0,145 €/kWh",
      gasPrice: "0,052 €/kWh",
      monthlySavings: 32,
      features: ["Energía 100% renovable", "Sin permanencia", "Atención 24/7"],
      recommended: true
    },
    {
      company: "Energía Plus",
      type: "Solo Luz",
      price: "0,138 €/kWh",
      gasPrice: "-",
      monthlySavings: 28,
      features: ["Precio fijo 12 meses", "Descuento online", "App móvil"],
      recommended: false
    },
    {
      company: "Gas Natural Pro",
      type: "Dual",
      price: "0,152 €/kWh",
      gasPrice: "0,048 €/kWh",
      monthlySavings: 24,
      features: ["Tarifa indexada", "Sin coste de alta", "Programa puntos"],
      recommended: false
    }
  ];

  const filters = [
    { id: 'luz', label: 'Solo Luz', icon: Zap },
    { id: 'gas', label: 'Solo Gas', icon: Flame },
    { id: 'dual', label: 'Luz + Gas', icon: BarChart3 }
  ];

  return (
    <section id="comparador" className="py-20 bg-gradient-to-br from-white via-purple-50 to-cyan-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Comparador <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">inteligente</span> de tarifas
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
            Encuentra la mejor tarifa personalizada con <span className="font-black text-purple-600">inteligencia artificial</span> según tu consumo real en <span className="font-black text-cyan-600">tiempo real</span>
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 mb-8 lg:mb-12 border-2 border-purple-200 shadow-xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <label className="block text-base lg:text-lg font-black text-gray-800 mb-4 lg:mb-6">
                <Filter className="h-5 w-5 inline mr-3 text-purple-600" />
                Tipo de suministro
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 lg:space-x-3 transform hover:scale-105 ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-2xl'
                        : 'bg-white text-gray-700 hover:bg-purple-50 shadow-lg border-2 border-purple-200'
                    }`}
                  >
                    <filter.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span className="text-sm lg:text-base">{filter.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-base lg:text-lg font-black text-gray-800 mb-4 lg:mb-6">
                Consumo mensual
              </label>
              <select 
                value={consumption}
                onChange={(e) => setConsumption(e.target.value)}
                className="w-full p-3 lg:p-4 rounded-xl lg:rounded-2xl border-2 border-purple-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 bg-white shadow-lg font-semibold text-base lg:text-lg"
              >
                <option value="bajo">Bajo (&lt; 200 kWh)</option>
                <option value="medio">Medio (200-400 kWh)</option>
                <option value="alto">Alto (&gt; 400 kWh)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4 lg:space-y-6">
          {getTariffs().map((tariff, index) => (
            <div key={index} className={`bg-white/90 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 lg:border-3 transition-all duration-500 hover:shadow-xl lg:hover:shadow-2xl transform hover:-translate-y-1 lg:hover:-translate-y-2 ${
              tariff.recommended 
                ? 'border-purple-500 shadow-2xl shadow-purple-500/25 bg-gradient-to-r from-purple-50 to-cyan-50' 
                : 'border-purple-200 hover:border-purple-300'
            }`}>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mb-4">
                    <h3 className="text-xl lg:text-2xl font-black text-gray-900">{tariff.company}</h3>
                    {tariff.recommended && (
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-black shadow-lg animate-pulse inline-block">
                        🚀 RECOMENDADO POR LUZIA IA
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
                    <div>
                      <span className="text-xs lg:text-sm text-gray-600 font-semibold">Precio luz</span>
                      <div className="font-black text-gray-900 text-base lg:text-lg">{tariff.price}</div>
                    </div>
                    {tariff.gasPrice !== "-" && (
                      <div>
                        <span className="text-xs lg:text-sm text-gray-600 font-semibold">Precio gas</span>
                        <div className="font-black text-gray-900 text-base lg:text-lg">{tariff.gasPrice}</div>
                      </div>
                    )}
                    <div>
                      <span className="text-xs lg:text-sm text-gray-600 font-semibold">Ahorro mensual</span>
                      <div className="font-black text-green-600 text-lg lg:text-xl">€{tariff.monthlySavings}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {tariff.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm bg-purple-100 px-2 lg:px-3 py-1 lg:py-2 rounded-full font-semibold">
                        <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-500" />
                        <span className="text-purple-800">{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 lg:space-y-3 w-full lg:w-auto">
                  <button 
                    onClick={() => onChatOpen(`Quiero contratar la tarifa de ${tariff.company}`)}
                    className={`px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black text-base lg:text-lg transition-all duration-500 transform hover:scale-105 ${
                    tariff.recommended
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-500 hover:to-cyan-500 shadow-xl lg:shadow-2xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg lg:shadow-xl'
                  }`}
                  >
                    🚀 CONTRATAR AHORA
                  </button>
                  <button 
                    onClick={() => onChatOpen(`Quiero ver más detalles de la tarifa de ${tariff.company}`)}
                    className="text-gray-600 text-xs lg:text-sm hover:text-purple-600 transition-colors font-semibold text-center lg:text-left"
                  >
                    Ver detalles completos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <p className="text-gray-700 mb-4 lg:mb-6 text-lg lg:text-xl font-semibold">¿Quieres ver más opciones personalizadas para tu consumo?</p>
          <button 
            onClick={() => onChatOpen('Quiero una comparación personalizada para mi consumo')}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-2xl lg:rounded-3xl font-black text-lg lg:text-2xl hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-105 lg:hover:scale-110 shadow-xl lg:shadow-2xl hover:shadow-purple-500/50 border-2 lg:border-4 border-white/20"
          >
            💡 OBTENER COMPARACIÓN PERSONALIZADA
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparatorSection;