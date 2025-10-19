import { motion } from 'framer-motion'
import { ExternalLink, Smartphone } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      name: 'FootRDC',
      description: 'A comprehensive football news and updates application for the Democratic Republic of Congo. Features live scores, team statistics, player profiles, and breaking news from the Congolese football scene.',
      category: 'Sports & News',
      platform: 'Android',
      link: 'https://play.google.com/store/apps/details?id=com.tootiyesolutions.footrdc',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      name: 'SportRDC',
      description: 'Your go-to destination for all sports news and updates in DR Congo. Covering football, basketball, athletics, and more with real-time updates and comprehensive coverage of local and international sports.',
      category: 'Sports Media',
      platform: 'Android',
      link: 'https://play.google.com/store/apps/details?id=com.tootiyesolutions.sportrdc',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'ActuRDC',
      description: 'Stay informed with the latest news from DR Congo. Breaking news, politics, economy, culture, and entertainment. A trusted source for Congolese current affairs with real-time notifications.',
      category: 'News & Media',
      platform: 'Android',
      link: 'https://play.google.com/store/apps/details?id=com.tootiyesolutions.acturdc',
      gradient: 'from-red-500 to-orange-600'
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
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
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing our successful mobile applications reaching thousands of users
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              {/* Project Header with Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-between`}>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {project.category}
                  </p>
                </div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Smartphone className="text-white" size={24} />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-royal-blue text-xs font-semibold rounded-full">
                    {project.platform}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 min-h-[120px]">
                  {project.description}
                </p>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-royal-blue text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors group-hover:bg-gold group-hover:text-royal-blue"
                >
                  View on Play Store
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-royal-blue to-blue-800 p-12 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's bring your ideas to life. Contact us today to discuss your next mobile app or web project.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gold text-royal-blue font-bold rounded-full hover:bg-yellow-400 transition-colors"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
