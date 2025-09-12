import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "621 50 83 00",
      description: "Lunes a Domingo, 8:00 - 22:00",
      action: "tel:+34621508300",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "621 50 83 00",
      description: "Respuesta inmediata 24/7",
      action: "https://wa.me/34621508300?text=Hola,%20vengo%20de%20luzia.pro",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@luzia.pro",
      description: "Respuesta en menos de 2 horas",
      action: "mailto:info@luzia.pro",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Oficina",
      value: "Calle Andarella 2 pt 9",
      description: "España",
      action: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda el proceso de cambio?",
      answer: "El cambio de compañía energética tarda entre 15-30 días. Durante este tiempo, tu suministro nunca se interrumpe y nosotros gestionamos todo el papeleo."
    },
    {
      question: "¿Hay algún coste por usar LUZIA?",
      answer: "LUZIA es completamente gratuito para los usuarios. Nos financiamos a través de comisiones que recibimos de las compañías energéticas cuando realizas un cambio."
    },
    {
      question: "¿Qué documentos necesito para cambiar de tarifa?",
      answer: "Solo necesitas tu última factura de luz y/o gas. Nosotros nos encargamos de todos los trámites y documentación necesaria."
    },
    {
      question: "¿Puedo cancelar el cambio si cambio de opinión?",
      answer: "Sí, tienes 14 días de derecho de desistimiento desde la contratación. Además, todas nuestras recomendaciones son sin permanencia."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

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
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Contacta</span> con Nosotros
            </h1>
            <p className="text-2xl text-gray-700 font-semibold max-w-4xl mx-auto">
              Estamos aquí para ayudarte a ahorrar en tu factura energética. ¡Hablemos!
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : '_self'}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{method.title}</h3>
                <p className="text-lg font-bold text-purple-600 mb-2">{method.value}</p>
                <p className="text-sm text-gray-600 font-medium">{method.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200">
            <h2 className="text-3xl font-black text-gray-900 mb-8">Envíanos un Mensaje</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-black text-green-600 mb-4">¡Mensaje Enviado!</h3>
                <p className="text-gray-700 font-medium">Te responderemos en menos de 2 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 transition-all duration-300"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Asunto *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 transition-all duration-300"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="comparar-tarifas">Comparar tarifas</option>
                      <option value="cambio-compania">Cambio de compañía</option>
                      <option value="soporte-tecnico">Soporte técnico</option>
                      <option value="consulta-general">Consulta general</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3"
                >
                  <Send className="h-5 w-5" />
                  <span>ENVIAR MENSAJE</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Horarios de Atención</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Lunes - Viernes</span>
                  <span className="text-purple-600 font-bold">8:00 - 22:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Sábados</span>
                  <span className="text-purple-600 font-bold">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-700">Domingos</span>
                  <span className="text-purple-600 font-bold">10:00 - 18:00</span>
                </div>
                <div className="border-t-2 border-purple-100 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">WhatsApp</span>
                    <span className="text-green-600 font-bold">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Respuesta Rápida</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-semibold">WhatsApp: Respuesta inmediata</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-semibold">Email: Menos de 2 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-semibold">Teléfono: Atención directa</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-3xl p-8 border-2 border-red-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">¿Urgencia Energética?</h3>
              <p className="text-gray-700 mb-4 font-medium">
                Si tienes un problema urgente con tu suministro eléctrico o de gas, contacta directamente:
              </p>
              <a
                href="https://wa.me/34621508300?text=URGENCIA:%20Tengo%20un%20problema%20con%20mi%20suministro"
                target="_blank"
                className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors inline-flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>CONTACTO URGENTE</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200">
                <h3 className="text-xl font-black text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;