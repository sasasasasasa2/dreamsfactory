'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Cog, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Globe,
  Database,
  Shield,
  Rocket,
  Target
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const services = [
    {
      id: 'desarrollo-web',
      title: 'Desarrollo Web Avanzado',
      subtitle: 'Shopify, Headless, Next.js',
      icon: Code2,
      description: 'Construimos experiencias web que no solo impresionan, sino que convierten. Desde e-commerce de alto rendimiento hasta aplicaciones web complejas.',
      features: [
        'E-commerce Shopify Plus personalizado',
        'Arquitecturas Headless y JAMstack',
        'Aplicaciones Next.js optimizadas',
        'PWAs y experiencias móviles',
        'Integraciones API complejas',
        'Optimización Core Web Vitals'
      ],
      technologies: ['Next.js', 'React', 'Shopify Plus', 'Strapi', 'Vercel'],
      results: [
        { metric: 'Velocidad de carga', value: '< 1s' },
        { metric: 'Conversión promedio', value: '+380%' },
        { metric: 'SEO Score', value: '95+' }
      ],
      image: '/services/web-development.jpg'
    },
    {
      id: 'software-medida',
      title: 'Desarrollo de Software a Medida',
      subtitle: 'Dashboards, Apps, Integraciones',
      icon: Smartphone,
      description: 'Creamos software que se adapta perfectamente a tu negocio. Desde dashboards en tiempo real hasta aplicaciones móviles nativas.',
      features: [
        'Dashboards en tiempo real',
        'Aplicaciones móviles nativas',
        'Sistemas de gestión empresarial',
        'APIs y microservicios',
        'Automatizaciones complejas',
        'Integraciones con terceros'
      ],
      technologies: ['React Native', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
      results: [
        { metric: 'Tiempo de desarrollo', value: '-50%' },
        { metric: 'Eficiencia operativa', value: '+200%' },
        { metric: 'ROI promedio', value: '15x' }
      ],
      image: '/services/software-development.jpg'
    },
    {
      id: 'optimizacion',
      title: 'Optimización y CRO',
      subtitle: 'UX, CRO, Rendimiento, Conversión',
      icon: TrendingUp,
      description: 'Transformamos visitantes en clientes y clientes en evangelistas. Cada píxel, cada interacción, cada segundo cuenta.',
      features: [
        'Auditorías UX/UI completas',
        'A/B testing avanzado',
        'Optimización de conversión',
        'Análisis de comportamiento',
        'Optimización de rendimiento',
        'Estrategias de retención'
      ],
      technologies: ['Google Analytics', 'Hotjar', 'Optimizely', 'GTM', 'Lighthouse'],
      results: [
        { metric: 'Conversión media', value: '+420%' },
        { metric: 'Bounce rate', value: '-65%' },
        { metric: 'AOV', value: '+250%' }
      ],
      image: '/services/optimization.jpg'
    },
    {
      id: 'automatizaciones',
      title: 'Automatizaciones y Mantenimiento',
      subtitle: 'Automatizaciones, Mantenimiento, Integraciones',
      icon: Cog,
      description: 'Liberamos tu tiempo automatizando procesos y manteniendo tu infraestructura digital funcionando a la perfección.',
      features: [
        'Automatización de procesos',
        'Mantenimiento proactivo',
        'Monitoreo 24/7',
        'Backups automáticos',
        'Actualizaciones de seguridad',
        'Soporte técnico premium'
      ],
      technologies: ['Zapier', 'Make', 'GitHub Actions', 'Docker', 'Kubernetes'],
      results: [
        { metric: 'Uptime garantizado', value: '99.9%' },
        { metric: 'Tiempo ahorrado', value: '40h/sem' },
        { metric: 'Incidencias', value: '-90%' }
      ],
      image: '/services/automation.jpg'
    }
  ];

  return (
    <section ref={ref} className="df-section bg-df-dark">
      <div className="df-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-2 mb-6">
            <Rocket className="w-5 h-5 text-df-accent" />
            <span className="text-df-accent font-medium tracking-wider uppercase text-sm">
              Arsenal Tecnológico
            </span>
            <Rocket className="w-5 h-5 text-df-accent" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="df-heading mb-8">
            <span className="block">Servicios que</span>
            <span className="block df-gradient-text">construyen imperios</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="df-text max-w-3xl mx-auto">
            No ofrecemos servicios. Ofrecemos transformaciones. Cada línea de código, 
            cada diseño, cada optimización está pensada para llevarte al siguiente nivel.
          </motion.p>
        </motion.div>

        {/* Services Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                variants={itemVariants}
                onClick={() => setActiveService(index)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeService === index
                    ? 'border-df-accent bg-df-accent/10'
                    : 'border-df-light-gray hover:border-df-accent/50'
                }`}
              >
                <service.icon className={`w-8 h-8 mb-4 ${
                  activeService === index ? 'text-df-accent' : 'text-df-text-muted'
                }`} />
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-df-text-muted">{service.subtitle}</p>
              </motion.button>
            ))}
          </div>

          {/* Active Service Details */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Service Content */}
            <div className="space-y-8">
              <div>
                <h3 className="df-subheading mb-4">{services[activeService].title}</h3>
                <p className="df-text">{services[activeService].description}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-df-green mr-2" />
                  Lo que incluye
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-df-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-df-text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-df-accent mr-2" />
                  Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-df-accent/10 border border-df-accent/30 rounded-full text-sm text-df-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="w-5 h-5 text-df-green mr-2" />
                  Resultados Típicos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {services[activeService].results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold df-gradient-text mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-df-text-muted">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Image */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-2xl overflow-hidden df-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-df-accent/20 to-df-green/20 z-10" />
                <div className="w-full h-full bg-df-gray flex items-center justify-center">
                  <services[activeService].icon className="w-24 h-24 text-df-accent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="df-subheading text-center mb-12">
            Nuestro Proceso de Trabajo
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Análisis Brutal',
                description: 'Diseccionamos tu negocio, competencia y mercado sin piedad.',
                icon: Target
              },
              {
                step: '02',
                title: 'Estrategia Letal',
                description: 'Diseñamos una estrategia que aniquile a tu competencia.',
                icon: Zap
              },
              {
                step: '03',
                title: 'Ejecución Perfecta',
                description: 'Desarrollamos con precisión militar y atención obsesiva al detalle.',
                icon: Code2
              },
              {
                step: '04',
                title: 'Optimización Continua',
                description: 'Monitoreamos, optimizamos y escalamos sin descanso.',
                icon: TrendingUp
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-df-accent/10 border-2 border-df-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-df-accent/20 transition-colors">
                    <process.icon className="w-8 h-8 text-df-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-df-accent rounded-full flex items-center justify-center text-df-dark font-bold text-sm">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-df-accent transition-colors">
                  {process.title}
                </h4>
                <p className="text-df-text-muted">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <div className="df-card max-w-4xl mx-auto">
            <h3 className="df-subheading mb-4">
              ¿Listo para dominar tu mercado?
            </h3>
            <p className="df-text mb-8">
              No perdamos tiempo con charlas. Hablemos de cómo vamos a 
              destruir a tu competencia y construir tu imperio digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="df-button-primary group">
                Solicitar Propuesta Personalizada
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="df-button-secondary">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

