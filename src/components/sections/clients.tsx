'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Star, Quote, Zap, Trophy, Users, Globe } from 'lucide-react';

const Clients = () => {
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
        staggerChildren: 0.1,
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
        ease: "easeOut" as const,
      },
    },
  };

  const clients = [
    { name: 'Al Nassr FC', logo: '/clients/al-nassr.svg', category: 'Sports' },
    { name: 'Forflex', logo: '/clients/forflex.svg', category: 'SaaS' },
    { name: 'Luxury Brand', logo: '/clients/luxury.svg', category: 'E-commerce' },
    { name: 'Tech Startup', logo: '/clients/startup.svg', category: 'Technology' },
    { name: 'Government', logo: '/clients/government.svg', category: 'Public' },
    { name: 'Healthcare', logo: '/clients/healthcare.svg', category: 'Medical' },
    { name: 'Finance Corp', logo: '/clients/finance.svg', category: 'Financial' },
    { name: 'Education', logo: '/clients/education.svg', category: 'Academic' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      position: 'Director Digital, Al Nassr FC',
      company: 'Al Nassr FC',
      content: 'DREAMSFACTORY no solo construyó nuestra plataforma digital, crearon un ecosistema que transformó completamente cómo nos conectamos con nuestros fans globalmente. Los resultados superaron todas nuestras expectativas.',
      rating: 5,
      metrics: { sales: '+420%', users: '2.3M', countries: '85+' }
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      position: 'CEO',
      company: 'Forflex',
      content: 'Trabajar con DREAMSFACTORY fue como tener un CTO de clase mundial. Su visión técnica y ejecución impecable llevaron nuestra startup de 0 a 500 empresas clientes en 8 meses.',
      rating: 5,
      metrics: { growth: '+1200%', uptime: '99.9%', satisfaction: '98%' }
    },
    {
      id: 3,
      name: 'Marcus Chen',
      position: 'Head of Digital',
      company: 'Luxury Brand',
      content: 'Necesitábamos una experiencia de e-commerce que reflejara el lujo de nuestra marca. DREAMSFACTORY creó algo que va más allá de una tienda online - es una obra de arte funcional.',
      rating: 5,
      metrics: { conversion: '+380%', aov: '+250%', retention: '+180%' }
    }
  ];

  const stats = [
    { icon: Trophy, label: 'Proyectos Exitosos', value: '100%' },
    { icon: Users, label: 'Clientes Satisfechos', value: '50+' },
    { icon: Globe, label: 'Países Impactados', value: '25+' },
    { icon: Zap, label: 'Años de Experiencia', value: '8+' }
  ];

  return (
    <section ref={ref} className="df-section bg-gradient-to-b from-df-darker to-df-dark">
      <div className="df-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-2 mb-6">
            <Trophy className="w-5 h-5 text-df-accent" />
            <span className="text-df-accent font-medium tracking-wider uppercase text-sm">
              Nos Eligen Los Mejores
            </span>
            <Trophy className="w-5 h-5 text-df-accent" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="df-heading mb-8">
            <span className="block">Nos eligen por</span>
            <span className="block df-gradient-text">resultados, no promesas</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="df-text max-w-3xl mx-auto">
            Desde clubes deportivos de élite hasta startups disruptivas, 
            las marcas más ambiciosas confían en nosotros para construir su futuro digital.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-df-accent/10 border-2 border-df-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-df-accent/20 transition-colors">
                <stat.icon className="w-8 h-8 text-df-accent" />
              </div>
              <div className="text-3xl font-bold df-gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-df-text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-12">
            Marcas que confían en nosotros
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="group cursor-pointer"
              >
                <div className="w-20 h-20 bg-df-gray border border-df-light-gray rounded-xl flex items-center justify-center mx-auto group-hover:border-df-accent/50 transition-colors">
                  <span className="text-df-text-muted text-xs font-medium text-center">
                    {client.name}
                  </span>
                </div>
                <div className="text-xs text-df-text-muted text-center mt-2">
                  {client.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="df-subheading text-center mb-12">
            Lo que dicen nuestros clientes
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="df-card group relative"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-df-accent/30 mb-4" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-df-accent fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="df-text mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-df-light-gray rounded-lg">
                  {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold df-gradient-text">
                        {value}
                      </div>
                      <div className="text-xs text-df-text-muted capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-df-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-df-accent font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-df-text-muted">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-df-accent">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-df-accent/30 rounded-xl transition-colors pointer-events-none" />
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
              ¿Listo para unirte a los líderes?
            </h3>
            <p className="df-text mb-8">
              Las marcas más exitosas no llegaron ahí por casualidad. 
              Tuvieron el coraje de apostar por la excelencia. ¿Y tú?
            </p>
            <button className="df-button-primary">
              Solicitar Reunión Estratégica
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

