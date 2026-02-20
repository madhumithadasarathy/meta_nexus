import { motion } from 'framer-motion'

const gallery = [
    { src: '/images/showcase1.jpg', label: 'Virtual Reality' },
    { src: '/images/showcase2.jpg', label: 'Digital Art' },
    { src: '/images/showcase3.jpg', label: 'NFT Collection' },
    { src: '/images/showcase4.jpg', label: 'AI Integration' },
    { src: '/images/showcase5.jpg', label: 'Abstract Worlds' },
    { src: '/images/showcase6.jpg', label: 'Crypto Gaming' },
    { src: '/images/showcase8.jpg', label: 'Blockchain Assets' },
    { src: '/images/showcase8.jpg', label: 'Digital Fashion' },
]

const Showcase = () => (
    <section id="showcase" className="relative py-24 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1492684223f-36515f164f73?w=1920&h=800&fit=crop" alt="Stage lights" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
            >
                <p className="section-subtitle">Showcase</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Explore The <span className="accent-text">Virtual World</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                    Immerse yourself in breathtaking virtual environments and discover endless possibilities.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {gallery.map((item, i) => (
                    <motion.div
                        key={i}
                        className="relative rounded-2xl overflow-hidden group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img src={item.src} alt={item.label} className="w-full h-64 sm:h-56 lg:h-60 object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-white font-semibold text-sm">{item.label}</p>
                        </div>
                        <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/40 rounded-2xl transition-all duration-500" />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default Showcase
