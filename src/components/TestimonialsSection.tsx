import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Familia de 4 personas",
      content: "LUZIA me ayudó a ahorrar más de 400€ al año. El proceso fue súper fácil y el ahorro real. ¡100% recomendable!",
      rating: 5,
      savings: "€426/año"
    },
    {
      name: "Carlos Ruiz",
      role: "Propietario de negocio",
      content: "Como empresario, cada euro cuenta. LUZIA encontró una tarifa comercial que me ahorra 15% mensual en electricidad.",
      rating: 5,
      savings: "€1,240/año"
    },
    {
      name: "Ana Martín",
      role: "Jubilada",
      content: "Pensé que cambiar de compañía sería complicado, pero LUZIA lo hizo todo por mí. Ahora pago mucho menos cada mes.",
      rating: 5,
      savings: "€218/año"
    }
  ];

  const partners = [
    { name: "Iberdrola", logo: "IB" },
    { name: "Endesa", logo: "EN" },
    { name: "Naturgy", logo: "NT" },
    { name: "Repsol", logo: "RP" },
    { name: "TotalEnergies", logo: "TE" },
    { name: "Octopus Energy", logo: "OE" }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-2xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
            <span className="font-black text-purple-600">+100.000 españoles</span> ya confían en LUZIA para 
            <span className="font-black text-cyan-600"> ahorrar en su factura de luz y gas</span>
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-xl lg:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-3 hover:scale-105 border-2 border-purple-200 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl"></div>
              
              <div className="relative">
              <div className="flex items-center mb-3 lg:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-400 fill-current drop-shadow-lg" />
                ))}
              </div>
              
              <div className="mb-4 lg:mb-6">
                <Quote className="h-6 w-6 lg:h-8 lg:w-8 text-purple-500 mb-3 lg:mb-4" />
                <p className="text-gray-700 italic leading-relaxed text-base lg:text-lg font-medium">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t-2 border-purple-100 pt-4 lg:pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-black text-gray-900 text-base lg:text-lg">{testimonial.name}</h4>
                    <p className="text-xs lg:text-sm text-gray-600 font-semibold">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl lg:text-2xl font-black text-green-600">{testimonial.savings}</div>
                    <div className="text-xs text-gray-500 font-semibold">AHORRO ANUAL</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-8 lg:mb-10">
            Colaboramos con las <span className="text-purple-600">principales energéticas</span> de España
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 lg:gap-10">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-white to-purple-50 rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl flex items-center justify-center font-black text-gray-700 hover:shadow-xl lg:hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-2 border-purple-200 text-sm lg:text-base">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;