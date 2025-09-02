'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
      { name: 'Software a Medida', href: '/servicios/software-medida' },
      { name: 'Optimización CRO', href: '/servicios/optimizacion' },
      { name: 'Automatizaciones', href: '/servicios/automatizaciones' }
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Clientes', href: '/clientes' },
      { name: 'Blog', href: '/blog' }
    ],
    recursos: [
      { name: 'Casos de Estudio', href: '/casos-estudio' },
      { name: 'Recursos Gratuitos', href: '/recursos' },
      { name: 'Documentación', href: '/docs' },
      { name: 'API', href: '/api' }
    ],
    legal: [
      { name: 'Política de Privacidad', href: '/privacidad' },
      { name: 'Términos de Servicio', href: '/terminos' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/dreamsfactory' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/dreamsfactory' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/dreamsfactory' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/dreamsfactory' }
  ];

  return (
    <footer className="bg-df-darker border-t border-df-light-gray">
      <div className="df-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="DREAMSFACTORY"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold df-gradient-text">
                  DREAMSFACTORY
                </span>
              </Link>

              <p className="text-df-text-muted mb-6 leading-relaxed">
                Transformamos clubes en marcas globales. Elevamos e-commerce de 5 cifras a 7. 
                Creamos software que construye imperios.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-df-accent" />
                  <span>hello@dreamsfactory.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-df-accent" />
                  <span>+34 900 123 456</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-df-accent" />
                  <span>Madrid, España</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-df-gray border border-df-light-gray rounded-lg flex items-center justify-center hover:border-df-accent/50 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-df-text-muted hover:text-df-accent transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="font-bold mb-4">Servicios</h4>
                  <ul className="space-y-2">
                    {footerLinks.servicios.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-df-text-muted hover:text-df-accent transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Empresa</h4>
                  <ul className="space-y-2">
                    {footerLinks.empresa.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-df-text-muted hover:text-df-accent transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Recursos</h4>
                  <ul className="space-y-2">
                    {footerLinks.recursos.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-df-text-muted hover:text-df-accent transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-df-text-muted hover:text-df-accent transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-df-light-gray">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">
                Mantente al día con las últimas tendencias
              </h4>
              <p className="text-df-text-muted">
                Recibe insights exclusivos sobre desarrollo web, estrategias digitales y casos de éxito.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-df-gray border border-df-light-gray rounded-lg focus:border-df-accent focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="df-button-primary group"
              >
                Suscribirse
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-df-light-gray">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-df-text-muted">
              © {currentYear} DREAMSFACTORY. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-df-text-muted">
              <span>Hecho con 💙 en Madrid</span>
              <span>•</span>
              <span>Powered by Next.js & Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

