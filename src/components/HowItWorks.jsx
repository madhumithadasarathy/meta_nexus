import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
    { id: 'launched', label: 'Launched App' },
    { id: 'marketplace', label: 'Metaverse Marketplace' },
    { id: 'innovative', label: 'Innovative Approach' },
]

const tabContent = {
    launched: {
        title: 'Made A New App Where You Will Get Part Taste Of Metaverse World Like',
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the when on the four of unknown printer took a galley of type it make book.",
        points: ['Individuals Can Meet Friends', 'Virtual Economy Is Emerging', 'Breaking Geographical Barriers'],
        image: '/images/app.jpg',
    },
    marketplace: {
        title: 'Explore The Digital Marketplace For Exclusive NFTs And Virtual Assets',
        description: 'Discover a vast collection of digital assets, virtual properties, and unique NFTs. Trade, collect, and invest in the future of digital ownership.',
        points: ['Secure Blockchain Transactions', 'Rare Digital Collectibles', 'Instant Asset Transfers'],
        image: '/images/market.jpg',
    },
    innovative: {
        title: 'Revolutionary Technology That Bridges Reality And Virtual Worlds',
        description: 'Our cutting-edge approach combines AI, blockchain, and immersive 3D experiences to create a seamless bridge between the physical and virtual worlds.',
        points: ['AI-Powered Interactions', 'Cross-Platform Integration', 'Real-Time Synchronization'],
        image: '/images/technology.jpg',
    },
}

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState('marketplace')
    const content = tabContent[activeTab]

    return (
        <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden bg-black">
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(107, 33, 168, 0.5), transparent)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(107, 33, 168, 0.5), transparent)' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="section-subtitle">How It Work</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        The Intersection Of Real And<br />
                        <span className="accent-text">Metaverse Worlds</span>
                    </h2>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-colors ${activeTab === tab.id ? 'text-white' : 'text-gray-400 bg-white/5 border border-white/10 hover:text-white'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeTab === tab.id && (
                                <motion.span layoutId="activeTab" className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)' }} transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: 'rgba(168, 85, 247, 0.08)' }} />
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                                <img src={content.image} alt={content.title} className="w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Text */}
                        <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">{content.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">{content.description}</p>
                            <div className="space-y-4 mb-8">
                                {content.points.map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center gap-3 group cursor-pointer"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.15 }}
                                    >
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)' }}>
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-gray-300 text-sm sm:text-base font-medium group-hover:text-white transition-colors">{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.button
                                className="btn-secondary rounded-xl flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="font-medium">Read More</span>
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </motion.button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default HowItWorks
