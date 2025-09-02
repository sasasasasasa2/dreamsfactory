'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Play, Zap, Rocket, Target } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
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
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-df-dark via-df-darker to-df-dark"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-df-accent to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                height: '100vh',
              }}
              animate={{
                y: ['-100vh', '100vh'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 border border-df-accent/30 rotate-45"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-40 right-20 w-16 h-16 bg-df-green/10 rounded-full"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-40 left-20 w-12 h-12 border-2 border-df-accent/20 rounded-full"
          style={{ animationDelay: '2s' }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-df-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-df-green/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 df-container text-center"
      >
        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-2 mb-6"
        >
          <Zap className="w-5 h-5 text-df-accent" />
          <span className="text-df-accent font-medium tracking-wider uppercase text-sm">
            Agencia Boutique de Alto Nivel
          </span>
          <Zap className="w-5 h-5 text-df-accent" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="df-heading mb-8 max-w-5xl mx-auto"
        >
          <span className="block">Transformamos clubes en</span>
          <span className="block df-gradient-text neon-glow">marcas globales.</span>
          <span className="block">Elevamos e-commerce de</span>
          <span className="block df-gradient-text neon-glow">5 cifras a 7.</span>
          <span className="block">Creamos software que</span>
          <span className="block df-gradient-text neon-glow">construye imperios.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="df-text max-w-3xl mx-auto mb-12"
        >
          No somos una agencia más. Somos el corazón tecnológico de un ecosistema que 
          transforma negocios medianos y grandes en líderes de su industria. Desde Al Nassr FC 
          hasta startups disruptivas, construimos el futuro digital.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
        >
          <div className="df-card text-center">
            <div className="text-3xl font-bold df-gradient-text mb-2">+380%</div>
            <div className="text-df-text-muted">Conversión Promedio</div>
          </div>
          <div className="df-card text-center">
            <div className="text-3xl font-bold df-gradient-text mb-2">€20K-30K</div>
            <div className="text-df-text-muted">Facturación Mensual</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold df-gradient-text mb-2">100%</div>
            <div className="text-df-text-muted">Proyectos Exitosos</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <Link href="/portfolio" className="df-button-primary group">
            Ver Transformaciones
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/contacto" className="df-button-secondary group">
            Solicitar Propuesta
            <Target className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-df-text-muted text-sm">Descubre nuestro poder</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-df-accent rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-df-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-df-dark to-transparent" />
    </section>
  );
};

export default Hero;

