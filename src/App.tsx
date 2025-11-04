import { Plane, Ship, Truck, Container, MapPin, CheckCircle, Clock, Shield, Menu, X, Globe, FileCheck, Package, ArrowRight, TrendingUp, Users, Award, Wrench, Lock, Lightbulb, Eye, Heart, Building, Package2Icon, PackageMinus, PackageCheck, DoorOpen, Home } from 'lucide-react';
import { useState } from 'react';
//--Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// @ts-ignore
import MexicoMap from "./components/mapa_republica_mexicana";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const clients = [
    { name: "Bergstrom", image: "https://media.licdn.com/dms/image/v2/C4E0BAQEcHFpBxy89iA/company-logo_200_200/company-logo_200_200/0/1670554198567?e=2147483647&v=beta&t=21YXENZ-Xho_PhRQzEyMTqDIUbsRyYhza12NHJ5lE8o" },
    { name: "Cirque Du Soleil", image: "https://www.quantum.com/globalassets/customer-success/customer-logo-png/cirque-du-soleil-logo-resized.jpg" },
    { name: "Liverpool", image: "data:image/png;base64,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" },
    { name: "Krispy Kreme", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRvBVHffojcG0uQ-ukupKHQtgZymhF4XIDA&s" },
    { name: "McCormick", image: "https://cdn.worldvectorlogo.com/logos/mccormick-2.svg" },
    { name: "Froztec", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSh-mmcff9Ak4y9hFdA-g2vULBmbOOe-9qg&s" },
    { name: "Samsung", image: "https://images.seeklogo.com/logo-png/12/1/samsung-logo-png_seeklogo-122023.png" },
    { name: "Pinol", image: "https://images.seeklogo.com/logo-png/23/1/pinol-logo-png_seeklogo-238479.png" },
  ];

  const services = [
    {
      icon: <Container className="w-12 h-12" />,
      title: "Despacho Aduanal",
      description: "Nos encargamos de todo el proceso y formalidad que tu mercancía necesita cumplir ante la autoridad aduanal para importar o exportar."
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Transporte LTL & FTL",
      description: "Sabemos lo importante que es tu mercancía para ti y es por eso que APG cuida hasta el último detalle de tu cargamento, asegurándonos de que llegue en perfecto estado a su destino final y Justo a tiempo con nuestra política JUST TIME."
    },
    {
      icon: <PackageCheck className="w-12 h-12" />,
      title: "Liberación Paquetería Retenida",
      description: "Conocemos las dificultades que se presentan al querer importar desde cualquier parte del mundo debido a las barreras culturales, legales y regulativas qué hay en México por lo que APG te brinda opciones para liberar tu paquetería retenida."
    },
    {
      icon: <ArrowRight className="w-12 h-12" />,
      title: "Import Express Duty Free",
      description: "Elimina los riesgos en tus inversiones, permite que nuestra experiencia se encargue de las gestiones aduanales y de transportación por ti, APG presta especial atención al mercado del E-commerce a pequeñas empresas con necesidades especiales de logística."
    },
    {
      icon: <ArrowRight className="w-12 h-12" />,
      title: "Import Zero by CBM",
      description: "Envías tu mercancía a nuestro almacén ubicado en la ciudad de GUANGZHOU-CHINA y DONGGUANG a partir de ahí nosotros nos hacemos cargo de todo hasta entregarte en uno de nuestros CEDIS."
    },
    {
      icon: <ArrowRight className="w-12 h-12" />,
      title: "We - Buy",
      description: "Envías tu mercancía a nuestro almacén ubicado en la ciudad de GUANGZHOU-CHINA y DONGGUANG a partir de ahí nosotros nos hacemos cargo de todo hasta entregarte en uno de nuestros CEDIS."
    },
    {
      icon: <ArrowRight className="w-12 h-12" />,
      title: "Comercializadora",
      description: "Servicio de importación para personas morales y físicas desde cualquier lugar del mundo, sin necesidad de contar con padrón de importadores."
    },
    {
      icon: <ArrowRight className="w-12 h-12" />,
      title: "Trámites Aduanales",
      description: "Brindamos distintas soluciones, realizando un análisis profundo de las necesidades de nuestros clientes, de los distintos sectores. \nNuestros servicios aduanales te facilitará un soporte adaptado a ti. \nCuando requieras cumplir una regulación no arancelaria, contamos con asesores personalizados que te guiaran para facilitar la liberación de tu mercancía cumpliendo con la normatividad aplicable."
    },
    {
      icon: <ArrowRight className="w-12 h-12" />,
      title: "Seguro de Mercancías",
      description: "Ofrecemos soluciones que contribuyan a que tu carga llegue hasta su destino final, con tecnología, y seguridad para la prevención de riesgos en el transporte de mercancías."
    },
    {
      icon: <ArrowRight className="w-12 h-12" />,
      title: "Paquetería Express",
      description: "Paquetería y mensajería nacional e internacional, contamos con tarifas competitivas de las paqueterías más importantes y con un sistema de podrás generar, administrar y rastrear tus guías para una ágil distribución de tus productos."
    },
    {
      icon: <ArrowRight className="w-12 h-12" />,
      title: "Auditorías y Previos en Origen",
      description: "Nos encargamos de verificar que los proveedores cumplan con los estándares de calidad necesaria. \nTe ayudamos a supervisar que los productos o mercancías sean las que realmente estás comprando y verifica que cumplan con las regulaciones para su importación a México."
    }
  ];

  const aboutUsSections = [
    {
      icon: <Globe className="w-12 h-12 text-[#ffbe00]" />,
      title: "Nuestra Misión",
      description:
        "Ser líderes en nuestro ramo proporcionando un servicio rápido, eficaz, confiable y oportuno, ofreciendo soluciones logísticas, innovadoras, seguras e integradas a nuestros clientes; preparando a nuestros empleados constantemente y creando un clima de estabilidad y satisfacción laboral.",
    },
    {
      icon: <Eye className="w-12 h-12 text-[#ffbe00]" />,
      title: "Nuestra Visión",
      description:
        "Distinguirnos por ser una empresa seria, responsable, con el mejor servicio y a la vanguardia, obteniendo como resultado la calidad en todo lo que hacemos. Ser aliado estratégico en soluciones integrales que apoyen e impulsen los servicios de nuestros clientes.",
    },
    {
      icon: <Heart className="w-12 h-12 text-[#ffbe00]" />,
      title: "Nuestros Valores",
      description:
        "Integridad, responsabilidad, honestidad, compromiso, servicio, proactividad, innovación, cooperación, auto crítica.",
    },
    {
      icon: <Building className="w-12 h-12 text-[#ffbe00]" />,
      title: "Sectores en que nos especializamos",
      description: [
        "Manufacturas y maquinaria",
        "Tecnología y promocionales",
        "Metrología y pesaje",
        "Luminaria y electrónica",
        "Commodities y perecederos"
      ],
    },
  ];

  const ports = [
    { name: "CDMX", type: "Aéreo" },
    { name: "Mexicali", type: "Terrestre" },
    { name: "Ensenada", type: "Marítimo" },
    { name: "Pantaco", type: "Terrestre" },
    { name: "Veracruz", type: "Marítimo" },
    { name: "NL - Colombia", type: "Terrestre" },
    { name: "Lázaro Cárdenas", type: "Marítimo" },
    { name: "Nuevo Laredo", type: "Marítimo" }
  ];

  const benefits = [
    { icon: <CheckCircle className="w-8 h-8" />, title: "Experiencia", text: "Más de 10 Años de experiencia, personal capacitado, honesto y conintegridad probada." },
    { icon: <Shield className="w-8 h-8" />, title: "Integración", text: "De tecnología en todos nuestros procesos, continua actualización de equipo para estar a la vanguardia." },
    { icon: <Globe className="w-8 h-8" />, title: "Presencia", text: "En México y sus principales puerto, Aduanas y ciudades industriales Asia, china continental, Estados Unidos, Canada, Italia, Francia, Unión Europea, Brasil y Colombia." },
    { icon: <Wrench className="w-8 h-8" />, title: "Soluciones", text: "A la medida para cada cliente, plan de negocios acuerdo a sus necesidades especificas." },
    { icon: <Lock className="w-8 h-8" />, title: "Seguridad", text: "Garantía de ofrecer la seguridad aduanera, administrativa y fiscal en sus operaciones." },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Innovación", text: "Constante al ser una extensión importante del cliente en sus procesos de producción." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img
                src="/src/assets/logo_black.png"
                alt="Logo Asia Pacific Group"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
              <span className="text-2xl font-bold">
                <span className="text-white"></span>
                <span className="text-white">ASIA PACIFIC GROUP</span>
                {/*<span className="text-[#ffbe00]">ASIA PACIFIC GROUP</span>*/}
              </span>
          </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="hover:text-[#ffbe00] transition-colors duration-300">Inicio</a>
              <a href="#sobre_nosotros" className="hover:text-[#ffbe00] transition-colors duration-300">Sobre Nosotros</a>
              <a href="#servicios" className="hover:text-[#ffbe00] transition-colors duration-300">Servicios</a>
              <a href="#puertos" className="hover:text-[#ffbe00] transition-colors duration-300">Puertos</a>
              <a href="#contacto" className="hover:text-[#ffbe00] transition-colors duration-300">Contacto</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-[#ffbe00]">
            <div className="px-4 py-4 space-y-3">
              <a href="#inicio" className="block hover:text-[#ffbe00] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Inicio</a>
              <a href="#servicios" className="block hover:text-[#ffbe00] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Servicios</a>
              <a href="#puertos" className="block hover:text-[#ffbe00] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Puertos</a>
              <a href="#contacto" className="block hover:text-[#ffbe00] transition-colors duration-300" onClick={() => setMenuOpen(false)}>Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div
          className="relative bg-cover bg-no-repeat bg-[center_top_30%] py-24 lg:py-32"
          style={{ backgroundImage: "url('/src/assets/mapa_mundial.jpg')" }}
        >
          {/* Overlay (opcional para mejorar contraste) */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Contenido principal */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
              <div className="space-y-8 text-white">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  CONECTANDO CON
                  <span className="text-[#ffbe00] inline"> EL MUNDO</span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed text-justify">
                  En <b>ASIA PACIFIC GROUP</b> transformamos la logística en una ventaja competitiva. Somos especialistas en comercio exterior, aduanas y legislación internacional, ofreciendo soluciones inteligentes y personalizadas para cada eslabón de la cadena de suministro.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed text-justify">
                  Más que un socio logístico, somos su aliado estratégico para conectar su empresa con el mundo, asegurando que cada movimiento de su mercancía se traduzca en crecimiento, confianza y éxito global.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#servicios"
                    className="bg-[#ffbe00] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6ab00] transition-all duration-300 text-center shadow-lg shadow-[#ffbe00]/30"
                  >
                    Conocer Servicios
                  </a>
                  <a
                    href="#contacto"
                    className="border-2 border-[#ffbe00] text-[#ffbe00] px-8 py-4 rounded-lg font-semibold hover:bg-[#ffbe00] hover:text-black transition-all duration-300 text-center"
                  >
                    Contactar Ahora
                  </a>
                </div>
              </div>

              {/* Tarjetas de transporte */}
              {/*<div className="relative grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#ffbe00] to-[#e6ab00] p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300 shadow-xl">
                  <Plane className="w-16 h-16 text-black mb-4" />
                  <p className="text-black font-semibold text-lg">Aéreo</p>
                </div>
                <div className="bg-white p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300 shadow-xl mt-8">
                  <Ship className="w-16 h-16 text-black mb-4" />
                  <p className="text-black font-semibold text-lg">Marítimo</p>
                </div>
                <div className="bg-white p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300 shadow-xl -mt-8">
                  <Truck className="w-16 h-16 text-black mb-4" />
                  <p className="text-black font-semibold text-lg">Terrestre</p>
                </div>
                <div className="bg-gradient-to-br from-[#ffbe00] to-[#e6ab00] p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300 shadow-xl">
                  <Container className="w-16 h-16 text-black mb-4" />
                  <p className="text-black font-semibold text-lg">Carga</p>
                </div>
              </div>*/}
            </div>
          </div>
        </div>

        {/* Benefits Bar */}
        <div className="bg-[#ffbe00] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
            {/* Título principal */}
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                ¿Por qué elegirnos?
              </h2>
              <h2 className="text-1xl md:text-1xl text-center mb-8">
                Nos distinguimos por nuestro profesionalismo, disciplina y compromiso absoluto con la excelencia, combinando conocimiento técnico, innovación y estrategia legal para que cada operación fluya sin contratiempos.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 text-black">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{benefit.title}</h3>
                    <p className="text-sm">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section id="sobre_nosotros" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Sobre <span className="text-[#ffbe00]">Nosotros</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones integrales de comercio exterior adaptadas a las necesidades de tu empresa
            </p>
          </div>

          {/* Grid de secciones */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {aboutUsSections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl shadow-lg border-t-4 border-[#ffbe00] group hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-start items-center text-center"
              >
                {/* Icono */}
                <div className="mb-6">{section.icon}</div>

                {/* Título */}
                <h3 className="text-xl font-bold text-[#ffbe00] mb-4">{section.title}</h3>

                {/* Contenido */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {Array.isArray(section.description) ? (
                    <ul className="list-disc list-inside space-y-1 text-left">
                      {section.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    section.description
                  )}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Nuestros <span className="text-[#ffbe00]">Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones integrales de comercio exterior adaptadas a las necesidades de tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#ffbe00] group hover:-translate-y-2"
              >
                <div className="text-white group-hover:text-[#ffbe00] transition-colors duration-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#ffbe00] mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Nuestros <span className="text-[#ffbe00]">Clientes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empresas que confían en nuestras soluciones logísticas
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-32 h-32 object-contain mb-4"
                  />
                  <h3 className="text-lg font-bold text-[#ffbe00]">{client.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Process Section */}
      {/*<section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Nuestro <span className="text-[#ffbe00]">Proceso</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplificamos cada paso de tu operación aduanal
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#ffbe00] hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ffbe00] text-black rounded-full font-bold text-2xl mb-6">
                  1
                </div>
                <FileCheck className="w-10 h-10 text-[#ffbe00] mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Documentación</h3>
                <p className="text-gray-600">Revisamos y preparamos toda la documentación necesaria</p>
              </div>
              <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-[#ffbe00] transform -translate-y-1/2" />
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#ffbe00] hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ffbe00] text-black rounded-full font-bold text-2xl mb-6">
                  2
                </div>
                <Package className="w-10 h-10 text-[#ffbe00] mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Clasificación</h3>
                <p className="text-gray-600">Clasificamos tu mercancía bajo la fracción arancelaria correcta</p>
              </div>
              <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-[#ffbe00] transform -translate-y-1/2" />
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#ffbe00] hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ffbe00] text-black rounded-full font-bold text-2xl mb-6">
                  3
                </div>
                <Shield className="w-10 h-10 text-[#ffbe00] mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Validación</h3>
                <p className="text-gray-600">Tramitamos permisos y validaciones ante las autoridades</p>
              </div>
              <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-[#ffbe00] transform -translate-y-1/2" />
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#ffbe00] hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ffbe00] text-black rounded-full font-bold text-2xl mb-6">
                  4
                </div>
                <CheckCircle className="w-10 h-10 text-[#ffbe00] mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">Despacho</h3>
                <p className="text-gray-600">Tu mercancía lista para entrega en tiempo récord</p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Ports Section with Map */}
      <section id="puertos" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Puertos <span className="text-[#ffbe00]">Autorizados</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aduanas donde tenemos presencia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map Illustration */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-[#ffbe00]/30">
              <div className="aspect-[4/3] relative">
                {/* Mexico Map SVG */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <MexicoMap />
                </div>
                {/* Port Markers with accurate positions */}
              </div>

              <div className="mt-6 text-center">
                <Globe className="w-8 h-8 text-[#ffbe00] mx-auto mb-2" />
                <p className="text-sm text-gray-400 font-semibold">Cobertura Nacional Completa • República Mexicana</p>
              </div>
            </div>

            {/* Ports List */}
            <div className="grid gap-4">
              {ports.map((port, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border-l-4 border-[#ffbe00] hover:border-[#ffbe00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ffbe00]/20 hover:translate-x-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-[#ffbe00]" />
                      <div>
                        <h3 className="text-lg font-semibold">{port.name}</h3>
                        <span className="inline-block bg-[#ffbe00]/20 text-[#ffbe00] px-3 py-1 rounded-full text-xs font-medium mt-1">
                          {port.type}
                        </span>
                      </div>
                    </div>
                    {port.type === 'Marítimo' && <Ship className="w-6 h-6 text-[#ffbe00]/50" />}
                    {port.type === 'Aéreo' && <Plane className="w-6 h-6 text-[#ffbe00]/50" />}
                    {port.type === 'Terrestre' && <Truck className="w-6 h-6 text-[#ffbe00]/50" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-[#ffbe00] via-[#e6ab00] to-[#ffbe00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            ¿Listo para Simplificar tus Operaciones?
          </h2>
          <p className="text-xl text-black/80 mb-10 leading-relaxed">
            Contáctanos hoy y descubre cómo podemos optimizar tus procesos aduanales con eficiencia y profesionalismo
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:contacto@aduanapro.com" className="bg-black text-white px-10 py-5 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-xl text-lg">
              Enviar Correo
            </a>
            <a href="tel:+525512345678" className="bg-white text-black px-10 py-5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg">
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/src/assets/logo_black.png"
                  alt="Logo Asia Pacific Group"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
                <span className="text-xl font-bold">
                  <span className="text-white"></span>
                  <span className="text-[#ffbe00]"> ASIA PACIFIC GROUP</span>
                </span>
              </div>
              <p className="text-gray-400">
                Tu socio confiable en comercio exterior y gestión aduanal.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#ffbe00]">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicios" className="hover:text-[#ffbe00] transition-colors">Servicios</a></li>
                <li><a href="#puertos" className="hover:text-[#ffbe00] transition-colors">Puertos</a></li>
                <li><a href="#contacto" className="hover:text-[#ffbe00] transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#ffbe00]">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:direccion@asiapacific-group.com" className="hover:text-[#ffbe00] transition-colors">
                    direccion@asiapacific-group.com
                  </a>
                </li>
                <li>
                  <a href="mailto:csanchez.comercial@asiapacific-group.com" className="hover:text-[#ffbe00] transition-colors">
                    csanchez.comercial@asiapacific-group.com
                  </a>
                </li>
                <li>
                  <a href="mailto:f.salazar@asiapacific-group.com" className="hover:text-[#ffbe00] transition-colors">
                    f.salazar@asiapacific-group.com
                  </a>
                </li>
                <li>
                  <a href="mailto:miguelpoo@asiapacific-group.com" className="hover:text-[#ffbe00] transition-colors">
                    miguelpoo@asiapacific-group.com
                  </a>
                </li>
                <li>
                  <a href="tel:+525592978493" className="hover:text-[#ffbe00] transition-colors">
                    +52 5592978493
                  </a>
                </li>
                <li>
                  <a href="tel:+525592978492" className="hover:text-[#ffbe00] transition-colors">
                    +52 5592978492
                  </a>
                </li>
                <li>Ciudad de México, México</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Asia Pacific Group. Todos los derechos reservados.</p>
          </div>
          <div className="pt-1 text-center text-gray-400">
            <p className="text-sm text-gray-400 mt-4 text-center">
              Powered by{" "}<a href="https://www.enrubyx.com" target="_blank" rel="noopener noreferrer" className="text-[#ffbe00] hover:underline font-bold">
                Enrubyx
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
