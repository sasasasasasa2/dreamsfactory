'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Rocket
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    project: '',
    message: ''
  });

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
        ease: "easeOut" as const,
      },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@dreamsfactory.com',
      description: 'Respuesta en menos de 2 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 900 123 456',
      description: 'Lun-Vie 9:00-18:00 CET'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Madrid, España',
      description: 'Trabajamos globalmente'
    },
    {
      icon: Calendar,
      title: 'Reunión',
      value: 'Calendly',
      description: 'Agenda una llamada estratégica'
    }
  ];

  const budgetRanges = [
    '€10K - €25K',
    '€25K - €50K',
    '€50K - €100K',
    '€100K - €250K',
    '€250K+'
  ];

  const projectTypes = [
    'E-commerce / Shopify',
    'Aplicación Web',
    'Aplicación Móvil',
    'Software a Medida',
    'Optimización/CRO',
    'Consultoría Estratégica'
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
            <Rocket className="w-5 h-5 text-df-accent" />
            <span className="text-df-accent font-medium tracking-wider uppercase text-sm">
              Inicia Tu Transformación
            </span>
            <Rocket className="w-5 h-5 text-df-accent" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="df-heading mb-8">
            <span className="block">Hablemos de tu</span>
            <span className="block df-gradient-text">dominación digital</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="df-text max-w-3xl mx-auto">
            No perdamos tiempo con charlas vacías. Si estás listo para transformar 
            tu negocio y aniquilar a tu competencia, hablemos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants} className="df-card">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="w-6 h-6 text-df-accent mr-2" />
                Solicitar Propuesta Personalizada
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-df-light-gray border border-df-light-gray rounded-lg focus:border-df-accent focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-df-light-gray border border-df-light-gray rounded-lg focus:border-df-accent focus:outline-none transition-colors"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-df-light-gray border border-df-light-gray rounded-lg focus:border-df-accent focus:outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Presupuesto *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-df-light-gray border border-df-light-gray rounded-lg focus:border-df-accent focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona rango</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tipo de Proyecto *
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-df-light-gray border border-df-light-gray rounded-lg focus:border-df-accent focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona tipo</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cuéntanos tu visión *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-df-light-gray border border-df-light-gray rounded-lg focus:border-df-accent focus:outline-none transition-colors resize-none"
                    placeholder="Describe tu proyecto, objetivos y cómo quieres dominar tu mercado..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full df-button-primary group"
                >
                  Enviar Propuesta
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <div className="flex items-center space-x-2 text-sm text-df-text-muted">
                  <CheckCircle className="w-4 h-4 text-df-green" />
                  <span>Respuesta garantizada en menos de 24 horas</span>
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="w-6 h-6 text-df-accent mr-2" />
                Información de Contacto
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-df-gray rounded-lg border border-df-light-gray hover:border-df-accent/50 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-df-accent/10 border border-df-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-df-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-df-accent font-medium">{info.value}</p>
                      <p className="text-sm text-df-text-muted">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process Timeline */}
            <motion.div variants={itemVariants} className="df-card">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Clock className="w-5 h-5 text-df-accent mr-2" />
                Qué Pasa Después
              </h4>

              <div className="space-y-4">
                {[
                  { step: '1', title: 'Análisis Inicial', time: '24h', description: 'Revisamos tu propuesta y preparamos preguntas estratégicas' },
                  { step: '2', title: 'Llamada Estratégica', time: '48h', description: 'Sesión de 60min para entender tu visión y objetivos' },
                  { step: '3', title: 'Propuesta Detallada', time: '72h', description: 'Plan completo con timeline, presupuesto y estrategia' },
                  { step: '4', title: 'Inicio del Proyecto', time: '1 semana', description: 'Kickoff y primeros sprints de desarrollo' }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-df-accent rounded-full flex items-center justify-center text-df-dark font-bold text-sm flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold">{phase.title}</h5>
                        <span className="text-sm text-df-accent">{phase.time}</span>
                      </div>
                      <p className="text-sm text-df-text-muted">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div variants={itemVariants} className="df-card bg-gradient-to-br from-df-accent/10 to-df-green/10 border-df-accent/30">
              <h4 className="text-xl font-bold mb-4">
                ¿Prefieres una llamada directa?
              </h4>
              <p className="text-df-text-muted mb-6">
                Agenda una llamada estratégica de 30 minutos. 
                Sin compromisos, solo valor puro.
              </p>
              <button className="df-button-secondary w-full group">
                Agendar Llamada Estratégica
                <Calendar className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Final Brutal CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-16"
        >
          <div className="df-card max-w-4xl mx-auto bg-gradient-to-br from-df-accent/5 to-df-green/5 border-df-accent/20">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="block">Tu competencia no va a</span>
              <span className="block df-gradient-text">esperarte</span>
            </h3>
            <p className="text-xl text-df-text mb-8 leading-relaxed">
              Cada día que pasa sin actuar es una oportunidad que le das a tu competencia. 
              Los líderes de mercado no llegaron ahí esperando. Actuaron.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="df-button-primary text-lg px-12 py-4 group">
                Iniciar Mi Dominación Digital
                <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

