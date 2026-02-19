import { motion } from 'framer-motion'

const featureData = [
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
        title: 'Customization Studio',
        description: 'This spectacular event promises an unforgettable evening filled with digital installations, live style illuminated by infinite.',
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />,
        title: 'Virtual Marketplace',
        description: 'This spectacular event promises an unforgettable evening filled with digital installations, live style illuminated by infinite.',
        featured: true,
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
        title: 'Communication Hub',
        description: 'This spectacular event promises an unforgettable evening filled with digital installations, live style illuminated by infinite.',
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
        title: 'AI - Powered Virtual',
        description: 'This spectacular event promises an unforgettable evening filled with digital installations, live style illuminated by infinite.',
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: 'Crypto Celebration',
        description: 'This spectacular event promises an unforgettable evening filled with digital installations, live style illuminated by infinite.',
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: 'Adventure Quests',
        description: 'This spectacular event promises an unforgettable evening filled with digital installations, live style illuminated by infinite.',
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Features = () => {
    return (
        <section id="features" className="relative py-24 lg:py-32 bg-black">
            <div className="absolute inset-0 bg-mesh" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="section-subtitle">Main Feature</p>
                    <h2 className="section-title">
                        Utilize The <span className="accent-text">Functionality</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {featureData.map((f, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`glass-card p-6 group cursor-pointer ${f.featured ? 'border-accent/30' : ''}`}
                            style={f.featured ? { background: 'oklch(40.8% 0.153 2.432 / 0.06)' } : {}}
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white transition-transform duration-300 group-hover:scale-110 shadow-lg"
                                style={{ background: 'var(--accent)' }}
                            >
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">{f.icon}</svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-white">{f.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{f.description}</p>
                            <button className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 group-hover:brightness-125" style={{ color: 'var(--accent-light)' }}>
                                <span>Read More</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Features
