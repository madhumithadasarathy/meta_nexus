import { useState } from 'react'
import { motion } from 'framer-motion'

const footerLinks = {
    Platform: ['Virtual Worlds', 'Marketplace', 'NFT Gallery', 'Gaming Hub'],
    Company: ['About Us', 'Careers', 'Blog', 'Press Kit'],
    Resources: ['Documentation', 'API Reference', 'Support', 'Community'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const Footer = () => {
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => { e.preventDefault(); alert(`Thanks for subscribing with ${email}!`); setEmail('') }

    return (
        <footer id="footer" className="relative pt-20 pb-8 border-t border-white/5 bg-black">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">Nirix</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Building the future of virtual experiences. Join our metaverse and explore limitless possibilities.
                        </p>
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required
                                className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                                onFocus={(e) => e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                            <button type="submit" className="btn-primary px-4 py-2.5 rounded-lg text-sm">Subscribe</button>
                        </form>
                    </div>

                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-white font-semibold mb-4 text-sm">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2026 Nirix. All rights reserved.</p>
                    <div className="flex gap-3">
                        {['Twitter', 'Discord', 'GitHub'].map((name) => (
                            <a key={name} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.25))'; e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)' }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                            >
                                <span className="text-xs font-bold">{name[0]}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
