'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Shield, 
  Rocket, 
  Brain, 
  Code, 
  TrendingUp,
  Users,
  Award,
  Clock
} from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Obsesión por Resultados',
      description: 'No medimos éxito en líneas de código, sino en impacto real en tu negocio. Cada decisión técnica está alineada con tus objetivos comerciales.'
    },
    {
      icon: Zap,
      title: 'Velocidad Brutal',
      description: 'Mientras otros planifican, nosotros ejecutamos. Nuestros sprints de desarrollo son legendarios por su velocidad sin comprometer calidad.'
    },
    {
      icon: Shield,
      title: 'Calidad Inquebrantable',
      description: 'Cero tolerancia a la mediocridad. Cada línea de código pasa por revisiones exhaustivas y testing automatizado antes de ver la luz.'
    },
    {
      icon: Brain,
      title: 'Innovación Constante',
      description: 'No seguimos tendencias, las creamos. Experimentamos con tecnologías emergentes para darte ventajas competitivas reales.'
    }
  ];

  const differentiators = [
    {
      title: 'No somos una agencia más',
      description: 'Somos el corazón tecnológico de un ecosistema que incluye inversión, consultoría estratégica y desarrollo de productos.',
      icon: Rocket
    },
    {
      title: 'Pensamos como founders',
      description: 'Entendemos el negocio porque hemos construido los nuestros. No solo desarrollamos, estrategizamos para el crecimiento.',
      icon: TrendingUp
    },
    {
      title: 'Equipo de élite',
      description: 'Cada miembro de nuestro equipo ha trabajado en startups unicornio o grandes corporaciones. Talento de primer nivel, sin excepciones.',
      icon: Users
    },
    {
      title: 'Garantía de resultados',
      description: 'Somos tan seguros de nuestro trabajo que ofrecemos garantías reales. Si no cumplimos, no cobras. Así de simple.',
      icon: Award
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Los Inicios',
      description: 'Fundamos DREAMSFACTORY con una visión clara: crear tecnología que transforme negocios, no solo los digitalice.'
    },
    {
      year: '2018',
      title: 'Primer Unicornio',
      description: 'Ayudamos a nuestra primera startup a alcanzar valoración de $1B. Aprendimos que la tecnología es solo el 30%, la estrategia es el 70%.'
    },
    {
      year: '2020',
      title: 'Expansión Global',
      description: 'Al Nassr FC nos elige para su transformación digital. Demostramos que podemos escalar a nivel mundial sin perder la esencia.'
    },
    {
      year: '2022',
      title: 'Ecosistema Completo',
      description: 'Lanzamos nuestro brazo de inversión y consultoría. Ya no solo desarrollamos, construimos imperios digitales completos.'
    },
    {
      year: '2024',
      title: 'El Futuro',
      description: 'Hoy somos el partner tecnológico de elección para marcas que quieren dominar, no solo competir en sus mercados.'
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
            <Brain className="w-5 h-5 text-df-accent" />
            <span className="text-df-accent font-medium tracking-wider uppercase text-sm">
              Nuestra Filosofía
            </span>
            <Brain className="w-5 h-5 text-df-accent" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="df-heading mb-8">
            <span className="block">No construimos webs,</span>
            <span className="block df-gradient-text">construimos imperios</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="df-text max-w-3xl mx-auto">
            DREAMSFACTORY nació de una frustración: ver cómo la mayoría de agencias 
            entregan proyectos técnicamente correctos pero estratégicamente vacíos. 
            Nosotros hacemos lo contrario.
          </motion.p>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="df-card group"
            >
              <value.icon className="w-12 h-12 text-df-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-df-accent transition-colors">
                {value.title}
              </h3>
              <p className="df-text">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* What Makes Us Different */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="df-subheading text-center mb-12">
            Por qué DREAMSFACTORY
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              {differentiators.map((diff, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-df-accent/10 border border-df-accent/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-df-accent/20 transition-colors">
                    <diff.icon className="w-6 h-6 text-df-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-df-accent transition-colors">
                      {diff.title}
                    </h4>
                    <p className="text-df-text-muted">{diff.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden df-glow">
                <div className="w-full h-full bg-gradient-to-br from-df-accent/20 to-df-green/20 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-24 h-24 text-df-accent mx-auto mb-4" />
                    <div className="text-2xl font-bold df-gradient-text">
                      8+ Años
                    </div>
                    <div className="text-df-text-muted">
                      Construyendo el futuro
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="df-subheading text-center mb-12">
            Nuestra Evolución
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-df-accent/30 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="w-16 h-16 bg-df-accent/10 border-4 border-df-accent rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <Clock className="w-6 h-6 text-df-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-2xl font-bold df-gradient-text">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                    </div>
                    <p className="df-text">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <div className="df-card max-w-4xl mx-auto bg-gradient-to-br from-df-accent/5 to-df-green/5 border-df-accent/20">
            <h3 className="df-subheading mb-6">
              Nuestra Promesa
            </h3>
            <p className="text-xl text-df-text mb-6 leading-relaxed">
              &ldquo;No te vendemos un proyecto, te vendemos una transformación. 
              No te entregamos código, te entregamos ventaja competitiva. 
              No somos tu proveedor, somos tu arma secreta.&rdquo;
            </p>
            <div className="text-df-accent font-bold text-lg">
              — Equipo DREAMSFACTORY
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

