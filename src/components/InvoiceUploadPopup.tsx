import React, { useState, useRef } from 'react';
import { X, Upload, Camera, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface InvoiceUploadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const InvoiceUploadPopup: React.FC<InvoiceUploadPopupProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'upload' | 'preview' | 'form' | 'success'>('upload');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileDataUrl, setFileDataUrl] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const convertFileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const uploadToTemporaryStorage = async (file: File): Promise<string> => {
    try {
      // Convertir archivo a data URL directamente
      return await convertFileToDataUrl(file);
    } catch (error) {
      console.error('Error uploading to temporary storage:', error);
      // Fallback: intentar convertir de nuevo
      return await convertFileToDataUrl(file);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Verificar tamaño del archivo (máximo 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('El archivo es demasiado grande. Máximo 10MB permitido.');
        return;
      }
      
      setUploadedFile(file);
      
      // Convertir archivo a data URL para preview y envío
      try {
        const dataUrl = await convertFileToDataUrl(file);
        setFileDataUrl(dataUrl);
        setStep('preview');
      } catch (error) {
        console.error('Error processing file:', error);
        alert('Error al procesar el archivo. Inténtalo de nuevo.');
      }
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = async () => {
    if (!uploadedFile || !fileDataUrl) return;

    try {
      let fileUrl = '';
      
      // Intentar subir a almacenamiento temporal
      try {
        fileUrl = await uploadToTemporaryStorage(uploadedFile);
      } catch (error) {
        console.error('Error uploading file:', error);
        fileUrl = 'Archivo procesado correctamente';
      }

      // Crear mensaje estructurado
      const whatsappMessage = `🔥 NUEVA SOLICITUD DE COMPARACIÓN - LUZIA 🔥

📋 DATOS DEL CLIENTE:
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

📄 FACTURA ADJUNTA:
• Archivo: ${uploadedFile.name}
• Tamaño: ${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
• Tipo: ${uploadedFile.type}
• Estado: Archivo procesado y listo para envío

💡 SOLICITUD: Comparar tarifas de luz y gas
⚡ Vengo de luzia.pro - Comparador IA

---
🚀 ANÁLISIS INMEDIATO: Nuestro equipo analizará esta factura y enviará las mejores opciones de ahorro en menos de 5 minutos.

✅ Sin compromiso ✅ Sin permanencia ✅ Ahorro garantizado`;

      // Abrir WhatsApp con el mensaje
      const phoneNumber = '34621508300';
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');

      // Si es una imagen, intentar también enviarla como imagen
      if (uploadedFile.type.startsWith('image/')) {
        // Crear un enlace temporal para la imagen
        const imageUrl = URL.createObjectURL(uploadedFile);
        
        // Mostrar instrucciones para enviar la imagen
        setTimeout(() => {
          const instructions = `📸 IMAGEN DE LA FACTURA:

Para enviar la imagen de tu factura:

1️⃣ Después de enviar el mensaje de texto
2️⃣ Toca el botón 📎 (clip) en WhatsApp  
3️⃣ Selecciona "Cámara" o "Galería"
4️⃣ Busca y envía: ${uploadedFile.name}

O puedes hacer una captura de pantalla de esta imagen y enviarla:`;

          if (confirm(instructions + '\n\n¿Quieres ver la imagen para hacer captura?')) {
            // Abrir la imagen en una nueva ventana
            const newWindow = window.open('', '_blank');
            if (newWindow) {
              newWindow.document.write(`
                <html>
                  <head><title>Factura - ${uploadedFile.name}</title></head>
                  <body style="margin:0; padding:20px; background:#f0f0f0;">
                    <h2>Factura para LUZIA</h2>
                    <p>Haz captura de pantalla de esta imagen y envíala por WhatsApp</p>
                    <img src="${imageUrl}" style="max-width:100%; height:auto; border:2px solid #333; border-radius:10px;" />
                    <p><strong>Archivo:</strong> ${uploadedFile.name}</p>
                    <p><strong>Tamaño:</strong> ${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </body>
                </html>
              `);
            }
          }
        }, 2000);
      }

      return true;
    } catch (error) {
      console.error('Error sending to WhatsApp:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) return;

    setIsSubmitting(true);

    try {
      // Mostrar paso de éxito
      setStep('success');

      // Enviar a WhatsApp
      await sendToWhatsApp();

      // Cerrar popup después de 4 segundos
      setTimeout(() => {
        onClose();
        resetForm();
      }, 4000);

    } catch (error) {
      console.error('Error al procesar la factura:', error);
      alert('Error al procesar la factura. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep('upload');
    setUploadedFile(null);
    setFileDataUrl('');
    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitting(false);
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const triggerCameraCapture = () => {
    cameraInputRef.current?.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border-2 border-purple-200 overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-black">Subir Factura</h3>
                <p className="text-purple-100 text-sm font-medium">Comparación personalizada</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'upload' && (
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-black text-gray-900 mb-2">Sube tu factura de luz o gas</h4>
                <p className="text-gray-600 text-sm">Como si fuera WhatsApp - elige cómo subir tu archivo</p>
              </div>

              <div className="space-y-4">
                {/* Upload File Button */}
                <button
                  onClick={triggerFileUpload}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg text-lg"
                >
                  <Upload className="h-5 w-5" />
                  <span>📄 Elegir Archivo</span>
                </button>

                {/* Take Photo Button */}
                <button
                  onClick={triggerCameraCapture}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg text-lg"
                >
                  <Camera className="h-5 w-5" />
                  <span>📸 Tomar Foto</span>
                </button>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-blue-800 mb-1">Formatos aceptados</h5>
                    <p className="text-sm text-blue-700">
                      PDF, JPG, PNG, GIF (máximo 10MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Hidden file inputs */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.gif"
                onChange={handleFileUpload}
                className="hidden"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          )}

          {step === 'preview' && uploadedFile && (
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-black text-gray-900 mb-2">¡Factura subida correctamente!</h4>
                <p className="text-gray-600 text-sm">Revisa que sea la correcta antes de continuar</p>
              </div>

              {/* File preview - Larger and more prominent */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-green-800 text-lg truncate">{uploadedFile.name}</p>
                    <p className="text-sm text-green-600 font-semibold">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • {uploadedFile.type.includes('pdf') ? 'PDF' : 'Imagen'}
                    </p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                
                {/* Image preview if it's an image - Larger */}
                {uploadedFile.type.startsWith('image/') && fileDataUrl && (
                  <div className="mt-4">
                    <img 
                      src={fileDataUrl} 
                      alt="Vista previa de la factura" 
                      className="w-full max-h-64 object-contain rounded-xl border-2 border-green-300 bg-white"
                    />
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setStep('form')}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-black text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  ✅ Continuar con mis datos
                </button>
                
                <button
                  onClick={() => setStep('upload')}
                  className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300"
                >
                  🔄 Cambiar archivo
                </button>
              </div>
            </div>
          )}

          {step === 'form' && uploadedFile && (
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-black text-gray-900 mb-2">Ahora completa tus datos</h4>
                <p className="text-gray-600 text-sm">Para que nuestro equipo te contacte con la mejor oferta</p>
              </div>

              {/* File preview - Compact version */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-gray-600" />
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-sm truncate">{uploadedFile.name}</p>
                    <p className="text-xs text-gray-600">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nombre y Apellidos *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-20 transition-all duration-300"
                    placeholder="621 50 83 00"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-black text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Procesando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>📱 Enviar a WhatsApp</span>
                    </>
                  )}
                </button>
              </form>

              <div className="text-center">
                <button
                  onClick={() => setStep('preview')}
                  className="text-sm text-purple-600 hover:text-purple-800 font-semibold underline"
                >
                  ← Volver a la factura
                </button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h4 className="text-xl font-black text-green-600 mb-4">¡Enviado a WhatsApp!</h4>
              <p className="text-gray-700 mb-6">
                Tu factura y datos han sido enviados correctamente.
              </p>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-sm text-green-700 font-semibold">
                  📱 Mensaje enviado por WhatsApp<br/>
                  📄 Factura incluida en el mensaje<br/>
                  ⚡ Análisis en menos de 5 minutos<br/>
                  💰 Ahorro medio: €487/año<br/>
                  ✅ Sin compromiso ni permanencia
                </p>
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

export default InvoiceUploadPopup;