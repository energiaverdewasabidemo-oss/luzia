import React from 'react';
import { FileText, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 mb-6 font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver</span>
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Términos de Uso</h1>
              <p className="text-gray-600 font-semibold">Última actualización: Enero 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Información de la Empresa</h2>
            <div className="bg-purple-50 rounded-2xl p-6 space-y-3">
              <p className="font-bold text-gray-800 text-lg">LUZIA - Comparador de Luz y Gas</p>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">Dirección: Calle Andarella 2 pt 9, España</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">Email: info@luzia.pro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">Teléfono: 621 50 83 00</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Objeto y Ámbito de Aplicación</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Los presentes términos y condiciones regulan el uso del servicio de comparación de 
              tarifas de luz y gas ofrecido por LUZIA a través de su plataforma web y aplicaciones móviles.
            </p>
            <p className="text-gray-600 leading-relaxed">
              El uso de nuestros servicios implica la aceptación plena de estos términos y condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Servicios Ofrecidos</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Comparación gratuita de tarifas de luz y gas</li>
              <li>Análisis personalizado de consumo energético</li>
              <li>Recomendaciones de tarifas más económicas</li>
              <li>Gestión del cambio de compañía energética</li>
              <li>Asesoramiento y atención al cliente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Obligaciones del Usuario</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">El usuario se compromete a:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Usar el servicio de forma responsable y legal</li>
                  <li>No interferir con el funcionamiento de la plataforma</li>
                  <li>Respetar los derechos de propiedad intelectual</li>
                  <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Gratuidad del Servicio</h2>
            <div className="bg-green-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>LUZIA es completamente gratuito para los usuarios.</strong> Nuestros ingresos 
                provienen de comisiones que recibimos de las compañías energéticas cuando un usuario 
                realiza un cambio de tarifa, sin coste adicional para el cliente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              LUZIA actúa como intermediario entre el usuario y las compañías energéticas. No somos 
              responsables de:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Cambios en las tarifas por parte de las compañías</li>
              <li>Interrupciones del suministro energético</li>
              <li>Disputas entre el usuario y la compañía energética</li>
              <li>Fallos técnicos ajenos a nuestro control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Propiedad Intelectual</h2>
            <p className="text-gray-600 leading-relaxed">
              Todos los contenidos, marcas, logos, diseños y tecnología de LUZIA están protegidos 
              por derechos de propiedad intelectual. Queda prohibida su reproducción, distribución 
              o modificación sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">8. Modificaciones</h2>
            <p className="text-gray-600 leading-relaxed">
              LUZIA se reserva el derecho a modificar estos términos y condiciones en cualquier momento. 
              Los cambios serán notificados a los usuarios y entrarán en vigor tras su publicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">9. Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-600 leading-relaxed">
              Estos términos se rigen por la legislación española. Para cualquier controversia, 
              las partes se someten a los juzgados y tribunales de España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">10. Contacto</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Para cualquier consulta sobre estos términos de uso:
            </p>
            <div className="bg-purple-50 rounded-2xl p-4">
              <p className="font-semibold text-gray-800">
                Email: info@luzia.pro<br/>
                Teléfono: 621 50 83 00<br/>
                Dirección: Calle Andarella 2 pt 9, España
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;