import React from 'react';
import { Scale, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

interface LegalNoticeProps {
  onBack: () => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack }) => {
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
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Aviso Legal</h1>
              <p className="text-gray-600 font-semibold">Última actualización: Enero 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Datos Identificativos</h2>
            <div className="bg-purple-50 rounded-2xl p-6 space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Denominación Social:</h3>
                <p className="text-gray-700">LUZIA - Comparador de Luz y Gas</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Domicilio Social:</h4>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
                    <span className="text-gray-700">Calle Andarella 2 pt 9<br/>España</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Contacto:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700">info@luzia.pro</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700">621 50 83 00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Objeto Social</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              LUZIA es una plataforma digital especializada en la comparación de tarifas de luz y gas 
              en el mercado español. Nuestro objetivo es ayudar a los consumidores a encontrar las 
              mejores ofertas energéticas adaptadas a sus necesidades específicas.
            </p>
            <div className="bg-cyan-50 rounded-2xl p-6">
              <h3 className="font-bold text-cyan-800 mb-3">Servicios principales:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Comparación gratuita de tarifas energéticas</li>
                <li>Análisis personalizado de consumo</li>
                <li>Asesoramiento energético especializado</li>
                <li>Gestión de cambios de compañía</li>
                <li>Atención al cliente y soporte técnico</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Condiciones de Uso del Sitio Web</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">3.1. Acceso y Navegación</h3>
                <p className="text-gray-600 leading-relaxed">
                  El acceso y uso de este sitio web es gratuito. Los usuarios pueden navegar, 
                  consultar información y utilizar nuestros servicios de comparación sin coste alguno.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">3.2. Uso Adecuado</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Los usuarios se comprometen a utilizar el sitio web de forma lícita y conforme a:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>La legislación vigente</li>
                  <li>Las buenas costumbres</li>
                  <li>El orden público</li>
                  <li>Los presentes términos y condiciones</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Propiedad Intelectual e Industrial</h2>
            <div className="bg-yellow-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Todos los contenidos del sitio web, incluyendo pero no limitándose a textos, fotografías, 
                gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos 
                fuente, constituyen una obra cuya propiedad pertenece a LUZIA.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Queda prohibida</strong> la reproducción, distribución, comunicación pública, 
                transformación o cualquier otra actividad que se pueda realizar con los contenidos 
                sin la autorización expresa de LUZIA.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Exclusión de Garantías y Responsabilidad</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">5.1. Disponibilidad del Servicio</h3>
                <p className="text-gray-600 leading-relaxed">
                  LUZIA no garantiza la disponibilidad y continuidad del funcionamiento del sitio web. 
                  Cuando sea razonablemente posible, se advertirá previamente de las interrupciones.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">5.2. Información de Terceros</h3>
                <p className="text-gray-600 leading-relaxed">
                  Las tarifas y condiciones mostradas provienen de las compañías energéticas. 
                  LUZIA no se responsabiliza de cambios posteriores en dichas condiciones.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Modificaciones</h2>
            <p className="text-gray-600 leading-relaxed">
              LUZIA se reserva el derecho de efectuar sin previo aviso las modificaciones que considere 
              oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y 
              servicios que se presten a través de la misma como la forma en la que éstos aparezcan 
              presentados o localizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Enlaces</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">7.1. Enlaces a Terceros</h3>
                <p className="text-gray-600 leading-relaxed">
                  El sitio web puede contener enlaces a otros sitios web. LUZIA no ejerce control 
                  alguno sobre dichos sitios y no es responsable de sus contenidos.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">7.2. Enlaces desde Terceros</h3>
                <p className="text-gray-600 leading-relaxed">
                  Si cualquier sitio web incluye un enlace hacia nuestro sitio web, deberá contactar 
                  con LUZIA para obtener autorización previa.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">8. Legislación Aplicable y Jurisdicción</h2>
            <div className="bg-purple-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Las presentes condiciones se rigen por la legislación española. Para la resolución 
                de cualquier controversia que pudiera derivarse del acceso o uso del sitio web, 
                LUZIA y el usuario se someten a los juzgados y tribunales de España.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En caso de que cualquier cláusula del presente aviso legal sea declarada nula, 
                las demás cláusulas seguirán vigentes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">9. Contacto</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Para cualquier consulta relacionada con este aviso legal, puede contactar con nosotros:
            </p>
            <div className="bg-purple-50 rounded-2xl p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-gray-800">info@luzia.pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-gray-800">621 50 83 00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-gray-800">Calle Andarella 2 pt 9</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;