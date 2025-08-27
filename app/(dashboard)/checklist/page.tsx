'use client';

import { Button } from '@/components/ui/button';

export default function ChecklistPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Mide cada Formulario de tu Web: Si solo pudieras hacer una cosa hoy para transformar tu negocio, sería esta. Saber quién te contacta, qué productos le interesan o qué servicios solicitan te da el poder de optimizar tus campañas y cerrar más ventas. Es el corazón de la atribución.
      </h1>

      <p className="mt-4 text-lg text-gray-500">
        Recurso Exclusivo: Algo que puedes hacer ahora es ver este video en el que enseño cómo dominar la medición de formularios con Inteligencia Artificial y enviar esos datos a GA4/Facebook, sin necesidad de ser un programador. Es un método universal
        <br />
        <strong className="font-semibold">EL VIDEO:</strong> <a href="https://www.youtube.com/watch?v=aCUGtaGylOA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.youtube.com/watch?v=aCUGtaGylOA</a>
      </p>

      <p className="mt-8 text-lg text-gray-500">
        Video Adicional de COMPLEMENTO para enviar los datos a Facebook ADS:
        <br />
        <a href="https://www.youtube.com/watch?v=9KYsDgVETK8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.youtube.com/watch?v=9KYsDgVETK8</a>
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">FASE 0: LA MEDICIÓN MÍNIMA INDISPENSABLE</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <input type="checkbox" id="ga4-data" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="ga4-data" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">¿Estás Enviando Datos a Google Analytics 4 (GA4)?</strong> Parece obvio, pero muchos lo tienen mal configurado. Asegúrate de que tu etiqueta base de GA4 esté funcionando perfectamente y recogiendo cada visita. Sin esto, todo lo demás es en vano.
          </label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="page-views" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="page-views" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Midiendo las Vistas de Página Clave:</strong> No solo las vistas de cualquier página. Identifica tus páginas de producto/servicio, tu blog principal y tu página de contacto. Necesitas saber qué contenido realmente engancha a tu audiencia.
          </label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="strategic-clicks" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="strategic-clicks" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Rastreando Clics Estratégicos (Whatsapp, Email, Teléfono):</strong> Cada interacción es una oportunidad perdida si no la mides. ¿Están haciendo clic en tu botón de WhatsApp? ¿Te están llamando? Estos son tus clientes más interesados, ¡no los dejes escapar sin un rastro digital!
          </label>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">FASE 1: OPTIMIZACIÓN ESENCIAL - Convierte tus Datos Básicos en Inteligencia de Negocio</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <input type="checkbox" id="key-events" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="key-events" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Midiendo los Eventos Clave de Usuario:</strong> ¿Tu web es un e-commerce? Necesitas registrar eventos como view_item, add_to_cart, begin_checkout. ¿Es un servicio? view_service_page, schedule_demo. Estos te dicen el "qué" de las acciones de tus usuarios.
          </label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="meta-platforms" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="meta-platforms" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">¿Envías tus Datos de Eventos a Plataformas como Meta/Facebook?</strong> ¡No midas dos veces! Una vez configurado en GTM, el mismo evento puede potenciar tus campañas en Facebook, Instagram y otras redes. Evita el "pixel tracking" manual y optimiza tu presupuesto publicitario.
          </label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="utm-campaigns" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="utm-campaigns" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Implementación de UTMs Coherentes y Efectivas:</strong> Si no usas UTMs (Source, Medium, Campaign, Content, Term), estás adivinando de dónde vienen tus ventas. Define una estrategia clara y úsalas en cada enlace que compartas. ¡El tráfico es oro, pero la atribución es el mapa del tesoro!
          </label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="ga4-conversions" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="ga4-conversions" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Configuración de Conversiones en GA4:</strong> Una vista de página no es una venta. Un evento de botón no es un lead. Define claramente qué acciones son ÉXITO para tu negocio y márcalas como conversiones en GA4. Solo así podrás optimizar.
          </label>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">FASE 2: AVANZADA - Transforma tu Medición en una Máquina de Crecimiento Predecible</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <input type="checkbox" id="server-side" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="server-side" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Medición Lado Servidor (Server-Side Tracking) para Evitar el Bloqueo de Datos:</strong> Despídete de los "Ad Blockers" y las restricciones de privacidad. Mueve tus mediciones clave del navegador del usuario a tu propio servidor. Esto no solo te da datos más fiables, sino que alarga la vida de tus cookies y mejora la atribución. ¡Es el futuro de la analítica!
          </label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="audiences" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="audiences" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Construye Audiencias Altamente Segmentadas con Datos de Retención:</strong> No todos los que visitan son iguales. Identifica a los "visitantes fieles" vs. los "rebotadores". Crea públicos personalizados basados en su tiempo en la web, número de visitas o profundidad de navegación. ¡Luego impacta a cada uno con el mensaje perfecto en tus campañas publicitarias!
          </label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="ad-platforms" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="ad-platforms" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Envía Datos de Medición a TODAS las Plataformas Publicitarias Relevantes (TikTok, Facebook, Google Ads, etc.):</strong> Aunque no inviertas mucho en TikTok, enviar tus datos de conversión allí "alimenta" sus algoritmos. De esta forma, si algún día decides anunciarte, tendrás una base de datos de usuarios de alta calidad desde el primer día. ¡No dejes que el algoritmo te olvide!
          </label>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">FASE 3 SECRETOS: DE LA ANALÍTICA - La Verdadera Ventaja Competitiva</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <input type="checkbox" id="automation" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="automation" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Automatización de Eventos Clave con Webhooks y Bases de Datos (Google Sheets, CRM):</strong> Olvídate de la exportación manual. Cuando un usuario realiza una acción CRÍTICA (ej: compra, llena formulario de "solicitar presupuesto"), un "webhook" envía automáticamente esa información a tu Google Sheet de "Leads Calificados". y también webhooks para enviar datos a plataformas publicitarias y obtener la máxima atribución a través de la precisión.
          </label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="persistent-utms" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="persistent-utms" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">El Secreto de la Atribución: Implementando UTMs Persistentes:</strong> Un cliente hace clic en tu anuncio de Facebook (utm_source=facebook), navega por tu web, se va a pensar... y vuelve al día siguiente escribiendo tu URL directamente para comprar. ¿El resultado? Google Analytics le dará todo el crédito a la visita "Directa", y tu anuncio de Facebook, el verdadero héroe que trajo al cliente, aparecerá como un fracaso. ¿Estás tomando decisiones con datos incorrectos?
          </label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="consent-mode" className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500" />
          <label htmlFor="consent-mode" className="ml-3 text-lg text-gray-700">
            <strong className="font-semibold">Implementación de Consent Mode V2 de Google (y otras plataformas) con GTM:</strong> La privacidad es el nuevo oro. Asegúrate de que tu medición sea compliant con las últimas regulaciones (GDPR, CCPA) sin sacrificar datos. Configura el Consent Mode V2 para ajustar tus etiquetas según el consentimiento del usuario, manteniendo la fiabilidad de tus datos y evitando multas. ¡Transparencia y resultados de la mano! ¡Evita multas!
          </label>
        </div>
      </div>

      <p className="mt-12 text-lg text-gray-500">
        ¡Felicidades! Has revisado el checklist definitivo de Google Tag Manager. ¿Cuántos puntos pudiste marcar? Si te sentiste abrumado, si descubriste que estás perdiendo datos críticos, o si simplemente quieres llevar tu medición al siguiente nivel y desbloquear el verdadero potencial de crecimiento para tu negocio… ¡Es el momento de actuar! En Jeraoo, nuestra misión es convertir la complejidad de la analítica digital en soluciones claras y rentables para ti. ¿Estás listo para dejar de adivinar y empezar a DOMINAR tu medición?
      </p>

      <div className="mt-8 text-center">
        <Button size="lg" className="text-xl rounded-full bg-red-600 hover:bg-red-700 px-10 py-8" asChild>
          <a href="https://wa.me/51992748352?text=Hola%2C%20he%20revisado%20tu%20checklist%20y%20estoy%20interesado%2Fa%20en%20agendar%20una%20consulta%20estrat%C3%A9gica.%20Para%20ir%20avanzando%2C%20te%20comparto%20la%20URL%20de%20mi%20sitio%20web%3A%20" target="_blank" rel="noopener noreferrer" onClick={() => {
            if (typeof window.dataLayer !== 'undefined') {
              window.dataLayer.push({
                event: 'button_click',
                button_text: 'Agendar mi Consulta Estratégica',
                button_location: 'checklist_cta',
                button_url: 'https://wa.me/51992748352?text=Hola%2C%20he%20revisado%20tu%20checklist%20y%20estoy%20interesado%2Fa%20en%20agendar%20una%20consulta%20estrat%C3%A9gica.%20Para%20ir%20avanzando%2C%20te%20comparto%20la%20URL%20de%20mi%20sitio%20web%3A%20'
              });
            }
          }}>
            Agendar mi Consulta Estratégica
          </a>
        </Button>
      </div>
    </div>
  );
}