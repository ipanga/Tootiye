import { motion } from 'framer-motion'
import { Target, Eye, Heart, MapPin, User } from 'lucide-react'

const About = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  }

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To deliver cutting-edge mobile and web solutions that empower African businesses to thrive in the digital age, fostering innovation and sustainable growth.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become Africa\'s most trusted technology partner, recognized for excellence in digital innovation and transformative solutions that shape the continent\'s future.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Innovation, Excellence, Integrity, Customer Focus, and Commitment to Quality. We believe in building lasting relationships through exceptional service and reliable solutions.'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering digital transformation across Uganda and beyond
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mb-6">
                <value.icon className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-royal-blue mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CEO Profile and Company Info */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* CEO Profile */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-royal-blue to-blue-900 p-8 md:p-12 rounded-2xl shadow-2xl text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                <User size={40} className="text-royal-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Valery Kamoji Ipanga</h3>
                <p className="text-gold font-medium">Chief Executive Officer</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4">
              With a passion for technology and innovation, Valery leads Tootiye Enterprises
              with a vision to transform Africa's digital landscape. Under his leadership,
              the company has delivered numerous successful projects across mobile and web platforms.
            </p>
            <p className="text-blue-100 leading-relaxed">
              His commitment to excellence and customer satisfaction has established Tootiye
              as a trusted name in Uganda's technology sector.
            </p>
          </motion.div>

          {/* Company Information */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-royal-blue mb-6">
                Company Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-royal-blue mb-1">Location</h4>
                    <p className="text-gray-600">
                      Kalungu Road, Kampala Town<br />
                      Kampala Central, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-royal-blue text-xs font-bold">P</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-blue mb-1">Postal Address</h4>
                    <p className="text-gray-600">P.O. Box 191852, Kampala</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-royal-blue to-blue-800 rounded-lg text-white">
                  <p className="text-sm text-blue-200 mb-2">Registered Company</p>
                  <h4 className="text-2xl font-bold">TOOTIYE ENTERPRISES LTD</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
