'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, BarChart, CheckCircle, GanttChartSquare, Search, Settings2, ShieldCheck, Download, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: '¿Cuánto tiempo se tarda en ver resultados?',
    answer: 'Una vez implementado el seguimiento, empezarás a recoger datos fiables inmediatamente. Los insights y mejoras en el rendimiento de tus campañas suelen ser visibles en las primeras semanas, a medida que acumulamos suficiente información para tomar decisiones.',
  },
  {
    question: 'Ya tengo GA4, ¿por qué necesito GTM?',
    answer: 'Google Analytics 4 es la herramienta de análisis, pero Google Tag Manager es el centro de control que te permite implementar y gestionar todos tus códigos de seguimiento (no solo los de Google) de forma ágil y sin depender de un programador para cada cambio. Te da autonomía y poder.',
  },
  {
    question: '¿Mi sitio web es demasiado pequeño/grande para esto?',
    answer: 'La analítica bien hecha es crucial para cualquier tamaño de negocio. Para los pequeños, significa no malgastar un presupuesto limitado. Para los grandes, significa optimizar a gran escala. Adapto mi estrategia a tus necesidades y tu tamaño.',
  },
  {
    question: '¿Cómo sabré lo que estás haciendo realmente?',
    answer: 'La transparencia es fundamental en mi forma de trabajar. Aunque yo me encargo de la complejidad técnica, tú siempre tendrás el control y la visibilidad. Recibirás un informe claros y concisos, lo que se hizo y como lo puedes usar.',
  },
  {
    question: '¿La analítica digital me trae leads más cualificados?',
    answer: 'Sí, rotundamente. El objetivo es enseñarle a los algoritmos de tus anuncios (Facebook, Google, etc.) a diferenciar entre un curioso y un cliente ideal. Les enviamos señales de las acciones de alto valor que ocurren en tu web, para que dejen de gastar tu dinero en leads de baja calidad y se enfoquen en encontrar a quienes están realmente listos para comprar. Esto es especialmente potente con el tracking del lado del servidor (Server-Side), que hace la señal mucho más fiable. Se nota muchísimo en infoproductores, e-commerce y venta de servicios, porque es un trabajo que se hace una sola vez y desde ese momento, tu algoritmo se alimenta y mejora constantemente para atraer mejores clientes de forma automática.',
  },
];

function FaqItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left font-semibold text-lg text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.question}
        <ChevronDown className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

function LeadMagnetForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you could add logic to save the name and email
    router.push('/checklist');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col gap-4">
      <Input type="text" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} required />
      <Input type="email" placeholder="Tu mejor correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Button type="submit" size="lg" className="bg-red-600 hover:bg-red-700">¡Lo quiero!</Button>
    </form>
  );
}

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
            ¿Tus datos de analítica son un caos?
            <span className="block text-red-600">Yo te ayudo a convertirlos en ventas.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Deja de perder dinero con campañas que no funcionan. Te ofrezco un sistema de medición claro y preciso con <strong>Google Tag Manager</strong> y <strong>GA4</strong> para que sepas exactamente qué funciona y cómo optimizar tu inversión.
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-xl rounded-full bg-red-600 hover:bg-red-700 px-10 py-8">
              Solicitar Auditoría Gratis
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-lg font-semibold text-gray-600">He ayudado a empresas como estas a tomar el control de sus datos</h3>
          <div className="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-8">
            <div className="flex flex-col items-center">
              <img src="https://i.imgur.com/qX9Q1Nw.png" alt="Client Logo 1" className="h-24 w-auto" />
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.imgur.com/EuhTICu.png" alt="Client Logo 2" className="h-24 w-auto" />
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.imgur.com/XRlvVBA.png" alt="Client Logo 3" className="h-24 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Mis Servicios</h2>
            <p className="mt-4 text-lg text-gray-500">Soluciones completas para tu ecosistema de datos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-4 border-black py-4">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <GanttChartSquare className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="mt-4">Implementación GTM Web</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Medimos cada interacción en tu sitio: clics, formularios, vídeos y más. Enviamos datos precisos a Google Analytics y a tus plataformas de anuncios (Meta, TikTok, Google Ads) para potenciar tus campañas.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-4 border-black py-4">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Search className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="mt-4">Implementación GTM Server-Side</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Eleva la precisión de tu tracking. Implementamos GTM del lado del servidor para superar ad-blockers y restricciones, asegurando datos más fiables. Además, automatizamos tus leads en Google Sheets.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-4 border-black py-4">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <BarChart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="mt-4">Tracking Avanzado con Webhooks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">La solución definitiva para una medición a prueba de fallos. Combinamos GTM Server-Side con Webhooks para enviar tus conversiones más críticas (compras, leads) en tiempo real y con la máxima fiabilidad.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-4 border-black py-4">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Settings2 className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="mt-4">Tracking Avanzado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Llevamos tu análisis al siguiente nivel. Medimos con precisión eventos clave, desde el rendimiento de tu e-commerce hasta la conversión más detallada. Implementamos un sistema de UTMs persistentes y una nomenclatura de etiquetas unificada.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section id="lead-magnet" className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Download className="h-12 w-12 text-red-600 mx-auto mb-4"/>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Descarga mi Checklist Gratuito</h2>
            <p className="mt-4 text-xl text-gray-500">"Los 5 errores de GTM que están haciéndote perder dinero (y cómo solucionarlos)".</p>
            <LeadMagnetForm />
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <ShieldCheck className="h-16 w-16 text-green-500 mx-auto mb-4"/>
                <h2 className="text-2xl font-bold text-gray-900">Mi Garantía de Satisfacción</h2>
                <p className="mt-4 text-lg text-gray-600">Estoy tan seguro de que mi trabajo te aportará claridad y resultados, que si después de la implementación de mi plan de medición no estás satisfecho con la calidad del trabajo, revisaré y ajustaré todo el planteamiento sin coste adicional hasta que lo estés. Tu confianza es mi prioridad.</p>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <FaqItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-800">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            ¿Sigues teniendo dudas?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Es normal. Hablemos 15 minutos sin compromiso y resolveré todas tus preguntas. El peor caso es que te lleves un par de consejos gratis. El mejor, que empecemos a transformar tu negocio.
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-lg rounded-full bg-red-600 hover:bg-red-700">
              Agendar Consulta Estratégica
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sticky bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 border-t border-gray-200 shadow-lg md:hidden">
        <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
            Auditoría Gratis
        </Button>
      </div>
    </main>
  );
}