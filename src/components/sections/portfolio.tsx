'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ExternalLink, TrendingUp, Zap, Users, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

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
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const projects = [
    {
      id: 'al-nassr',
      title: 'Al Nassr FC',
      subtitle: 'Transformación Digital Completa',
      description: 'Desarrollamos un ecosistema digital completo para uno de los clubes más importantes de Arabia Saudí, incluyendo e-commerce personalizado, app móvil, y sistema de gestión de socios.',
      metrics: [
        { label: 'Aumento en ventas', value: '+420%', icon: TrendingUp },
        { label: 'Usuarios activos', value: '2.3M', icon: Users },
        { label: 'Países alcanzados', value: '85+', icon: Globe },
      ],
      technologies: ['Next.js', 'React Native', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/projects/al-nassr.jpg',
      link: 'https://alnassr.com',
      featured: true,
    },
    {
      id: 'forflex',
      title: 'Forflex',
      subtitle: 'Plataforma SaaS Avanzada',
      description: 'Creamos una plataforma SaaS completa para gestión empresarial con dashboards en tiempo real, automatizaciones y integraciones complejas.',
      metrics: [
        { label: 'Tiempo de carga', value: '0.8s', icon: Zap },
        { label: 'Uptime', value: '99.9%', icon: TrendingUp },
        { label: 'Empresas activas', value: '500+', icon: Users },
      ],
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
      image: '/projects/forflex.jpg',
      link: 'https://forflex.com',
      featured: true,
    },
    {
      id: 'ecommerce-luxury',
      title: 'Luxury Brand E-commerce',
      subtitle: 'Experiencia Premium',
      description: 'E-commerce de lujo con experiencias inmersivas, configurador 3D de productos y checkout optimizado para conversiones máximas.',
      metrics: [
        { label: 'Conversión', value: '+380%', icon: TrendingUp },
        { label: 'AOV', value: '+250%', icon: TrendingUp },
        { label: 'Retorno', value: '15x ROI', icon: Zap },
      ],
      technologies: ['Shopify Plus', 'Three.js', 'GSAP', 'Klaviyo'],
      image: '/projects/luxury-ecommerce.jpg',
      link: '#',
      featured: false,
    },
  ];

  return (
    <section ref={ref} className="df-section bg-gradient-to-b from-df-dark to-df-darker">
      <div className="df-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-2 mb-6">
            <Zap className="w-5 h-5 text-df-accent" />
            <span className="text-df-accent font-medium tracking-wider uppercase text-sm">
              Portfolio de Impacto
            </span>
            <Zap className="w-5 h-5 text-df-accent" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="df-heading mb-8">
            <span className="block">Transformaciones que</span>
            <span className="block df-gradient-text">cambian industrias</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="df-text max-w-3xl mx-auto">
            Cada proyecto es una declaración de guerra contra la mediocridad. 
            Estos son algunos de los imperios digitales que hemos construido.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-24 mb-16"
        >
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video rounded-2xl overflow-hidden df-glow"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-df-accent/20 to-df-green/20 z-10" />
                  <div className="w-full h-full bg-df-gray flex items-center justify-center">
                    <span className="text-df-text-muted text-lg">
                      {project.title} Preview
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="df-subheading mb-2">{project.title}</h3>
                  <p className="text-df-accent font-medium mb-4">{project.subtitle}</p>
                  <p className="df-text">{project.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="df-card text-center"
                    >
                      <metric.icon className="w-6 h-6 text-df-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold df-gradient-text mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-df-text-muted">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-df-accent/10 border border-df-accent/30 rounded-full text-sm text-df-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="df-button-primary group"
                  >
                    Ver Caso de Estudio
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  {project.link !== '#' && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="df-button-secondary group"
                    >
                      Visitar Sitio
                      <ExternalLink className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="df-subheading text-center mb-12">
            Más Transformaciones
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="df-card group cursor-pointer"
              >
                <div className="aspect-video bg-df-light-gray rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-df-text-muted">
                      {project.title}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-2 group-hover:text-df-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-df-accent text-sm mb-3">{project.subtitle}</p>
                <p className="df-text text-sm mb-4">{project.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold df-gradient-text">
                        {metric.value}
                      </div>
                      <div className="text-xs text-df-text-muted">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${project.id}`}
                  className="text-df-accent hover:text-df-accent-hover transition-colors text-sm font-medium flex items-center"
                >
                  Ver más
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
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
              ¿Listo para ser el siguiente?
            </h3>
            <p className="df-text mb-8">
              Cada proyecto que ves aquí empezó con una conversación. 
              Tu transformación digital está a una llamada de distancia.
            </p>
            <Link href="/contacto" className="df-button-primary">
              Iniciar Mi Transformación
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

