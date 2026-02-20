import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black">
            {/* BG effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full blur-[150px] morph-bg" style={{ background: 'rgba(168, 85, 247, 0.15)' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] morph-bg" style={{ background: 'rgba(236, 72, 153, 0.1)', animationDelay: '4s' }} />
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full animate-pulse bg-purple-400" />
                            <span className="text-xs sm:text-sm text-gray-300">Welcome to the Metaverse</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                        >
                            Make Your{' '}
                            <span className="accent-text">Stunning</span>
                            <br />
                            New <span className="text-white">Metaverse</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                        >
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="flex flex-wrap gap-3 sm:gap-4"
                        >
                            <motion.button
                                className="btn-primary rounded-xl group flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Open App</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.button>
                            <motion.button
                                className="btn-secondary rounded-xl group flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Buy MNP Token</span>
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="flex gap-6 sm:gap-8 mt-10 sm:mt-12"
                        >
                            {[
                                { val: '25K+', label: 'Active Users' },
                                { val: '10K+', label: 'NFTs Created' },
                                { val: '$5M+', label: 'Trading Volume' },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center gap-6">
                                    <div>
                                        <div className="text-xl sm:text-2xl font-bold accent-text">{s.val}</div>
                                        <div className="text-xs sm:text-sm text-gray-500">{s.label}</div>
                                    </div>
                                    {i < 2 && <div className="w-px h-10 bg-white/10" />}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - VR Image */}
                    <motion.div
                        className="relative flex justify-center items-end self-end"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
                    >
                        {/* Glow rings behind image */}
                        <motion.div
                            className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[580px] lg:h-[580px] rounded-full border-2 bottom-[10%] left-1/2 -translate-x-1/2 shine-border"
                            style={{ borderColor: 'transparent' }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div
                            className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full border bottom-[10%] left-1/2 -translate-x-1/2"
                            style={{ borderColor: 'rgba(236, 72, 153, 0.15)' }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                        />
                        <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[540px] lg:h-[540px] rounded-full blur-[100px] bottom-[5%] left-1/2 -translate-x-1/2" style={{ background: 'rgba(168, 85, 247, 0.15)' }} />

                        {/* VR Person Image */}
                        <motion.img
                            src="/images/hero_img.png"
                            alt="VR Experience"
                            className="relative z-10  object-contain mb-0"
                            style={{ filter: 'brightness(0.85) saturate(1.4) contrast(1.3) drop-shadow(0 0 50px rgba(168, 85, 247, 0.35))' }}
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        {/* Floating badge top-right */}
                        <motion.div
                            className="absolute top-4 right-0 sm:right-4 lg:-right-4 glass-card px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-3 z-20"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-gray-400">Growth</div>
                                <div className="text-xs sm:text-sm font-bold text-green-400">+234%</div>
                            </div>
                        </motion.div>

                        {/* Floating badge bottom-left */}
                        <motion.div
                            className="absolute bottom-8 left-0 sm:left-4 lg:-left-4 glass-card px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-3 z-20"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-gray-400">Community</div>
                                <div className="text-xs sm:text-sm font-bold text-white">25,400+</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    )
}

export default Hero
