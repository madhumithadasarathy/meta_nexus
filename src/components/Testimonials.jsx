import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
    {
        name: 'Sarah Johnson', role: 'NFT Artist',
        avatar: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Sarah&backgroundColor=6366f1',
        quote: 'The metaverse platform has completely changed how I create and sell my digital art. The community is incredible.',
    },
    {
        name: 'Alex Chen', role: 'Crypto Investor',
        avatar: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Alex&backgroundColor=a855f7',
        quote: "I've been investing in metaverse projects for years, and Nirix stands out with its innovation and user experience.",
    },
    {
        name: 'Emily Rodriguez', role: 'Game Developer',
        avatar: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Emily&backgroundColor=ec4899',
        quote: 'Building virtual worlds on this platform is seamless. The SDK is powerful and the documentation is excellent.',
    },
]

const Testimonials = () => {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000)
        return () => clearInterval(t)
    }, [])

    return (
        <section className="relative py-24 lg:py-32 bg-black">
            <div className="absolute inset-0 bg-mesh" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <p className="section-subtitle">Testimonials</p>
                    <h2 className="section-title">What Our <span className="accent-text">Users Say</span></h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className={`glass-card p-6 cursor-pointer transition-all duration-500 ${active === i ? 'scale-[1.02]' : ''}`}
                            style={active === i ? { borderColor: 'rgba(168, 85, 247, 0.4)', boxShadow: '0 8px 30px rgba(168, 85, 247, 0.1)' } : {}}
                            onClick={() => setActive(i)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: 5 }, (_, j) => (
                                    <svg key={j} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                            <div className="flex items-center gap-3">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" style={{ borderColor: 'rgba(168, 85, 247, 0.3)', borderWidth: '2px' }} />
                                <div>
                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button key={i} onClick={() => setActive(i)} className={`h-2.5 rounded-full transition-all duration-300 ${active === i ? 'w-8' : 'w-2.5 bg-white/20 hover:bg-white/40'}`} style={active === i ? { background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)' } : {}} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
