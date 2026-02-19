import { motion } from 'framer-motion'

const CTA = () => (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1492684223f-36515f164f73?w=1920&h=600&fit=crop" alt="Stage" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/85" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, oklch(40.8% 0.153 2.432 / 0.15), oklch(40.8% 0.153 2.432 / 0.15))' }} />
        </div>
        <motion.div
            className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'oklch(40.8% 0.153 2.432 / 0.1)', border: '1px solid oklch(40.8% 0.153 2.432 / 0.3)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent-light)' }} />
                <span className="text-sm" style={{ color: 'var(--accent-lighter)' }}>Join The Revolution</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready To Enter The<br /><span className="accent-text">Metaverse?</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of creators, investors, and explorers building the future.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <motion.button className="btn-primary rounded-xl font-semibold group flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <span>Get Started Now</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </motion.button>
                <motion.button className="btn-secondary rounded-xl font-semibold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Learn More
                </motion.button>
            </div>
        </motion.div>
    </section>
)

export default CTA
