import React from 'react';
import { Shield, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900">Política de Privacidad</h1>
              <p className="text-gray-600 font-semibold">Última actualización: Enero 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">1. Información del Responsable</h2>
            <div className="bg-purple-50 rounded-2xl p-6 space-y-3">
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
            <h2 className="text-2xl font-black text-gray-900 mb-4">2. Datos que Recopilamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Datos de Contacto:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Nombre y apellidos</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Dirección postal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Datos de Consumo Energético:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Facturas de luz y gas</li>
                  <li>Consumo histórico</li>
                  <li>Potencia contratada</li>
                  <li>Tarifa actual</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">3. Finalidad del Tratamiento</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Comparar tarifas de luz y gas</li>
              <li>Proporcionar recomendaciones personalizadas</li>
              <li>Gestionar el cambio de compañía energética</li>
              <li>Atención al cliente y soporte técnico</li>
              <li>Envío de comunicaciones comerciales (con consentimiento)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">4. Base Legal</h2>
            <p className="text-gray-600 leading-relaxed">
              El tratamiento de sus datos se basa en el consentimiento del interesado y en la ejecución 
              de un contrato o medidas precontractuales adoptadas a petición del interesado, conforme 
              al Reglamento General de Protección de Datos (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5. Conservación de Datos</h2>
            <p className="text-gray-600 leading-relaxed">
              Los datos personales se conservarán durante el tiempo necesario para cumplir con la 
              finalidad para la que se recabaron y para determinar las posibles responsabilidades 
              que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">6. Sus Derechos</h2>
            <div className="bg-cyan-50 rounded-2xl p-6">
              <p className="text-gray-700 mb-4 font-semibold">Usted tiene derecho a:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Suprimir sus datos</li>
                <li>Limitar el tratamiento</li>
                <li>Portabilidad de datos</li>
                <li>Oponerse al tratamiento</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Para ejercer estos derechos, contacte con nosotros en: <strong>info@luzia.pro</strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">7. Seguridad</h2>
            <p className="text-gray-600 leading-relaxed">
              Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos 
              personales contra el tratamiento no autorizado o ilícito y contra su pérdida, 
              destrucción o daño accidental.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">8. Contacto</h2>
            <p className="text-gray-600 leading-relaxed">
              Para cualquier consulta sobre esta política de privacidad, puede contactarnos en:
            </p>
            <div className="bg-purple-50 rounded-2xl p-4 mt-4">
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

export default PrivacyPolicy;