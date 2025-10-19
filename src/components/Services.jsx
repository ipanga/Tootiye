import { motion } from 'framer-motion'
import { Smartphone, Globe, Lightbulb, Code, Layers, Zap } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      subtitle: 'iOS & Android',
      description: 'Native and cross-platform mobile applications built with cutting-edge technology. We create intuitive, high-performance apps that deliver exceptional user experiences on both iOS and Android platforms.',
      features: ['Native iOS Development', 'Android Development', 'Cross-platform Solutions', 'App Store Optimization']
    },
    {
      icon: Globe,
      title: 'Website Development',
      subtitle: 'Modern & Responsive',
      description: 'Beautiful, fast, and responsive websites that captivate your audience. From corporate sites to e-commerce platforms, we build web solutions that drive business growth and engage users.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization']
    },
    {
      icon: Lightbulb,
      title: 'Software Consulting',
      subtitle: 'Strategic Guidance',
      description: 'Expert technology consulting to guide your digital transformation. We help businesses make informed decisions about technology investments, architecture, and implementation strategies.',
      features: ['Technology Strategy', 'System Architecture', 'Process Optimization', 'Technical Audits']
    }
  ]

  const stats = [
    { icon: Code, number: '50+', label: 'Projects Delivered' },
    { icon: Layers, number: '30+', label: 'Active Clients' },
    { icon: Zap, number: '5+', label: 'Years Experience' }
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-gold" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-royal-blue mb-2">
                {service.title}
              </h3>
              
              <p className="text-gold font-semibold mb-4">
                {service.subtitle}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-gold" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-royal-blue mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
