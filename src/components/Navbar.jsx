import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ scrollY }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('Home')
    const links = ['Home', 'About', 'Pages', 'News', 'Contact Us']
    const scrolled = scrollY > 50

    const handleNavClick = (link) => {
        setActiveLink(link)
        setIsOpen(false)
        const map = { Home: 'hero', About: 'features', Pages: 'how-it-works', News: 'showcase', 'Contact Us': 'footer' }
        document.getElementById(map[link])?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => handleNavClick('Home')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)' }}>
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Nirix</span>
                    </motion.div>

                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <motion.button
                                key={link}
                                onClick={() => handleNavClick(link)}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${activeLink === link ? 'text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeLink === link && (
                                    <motion.span layoutId="activeNav" className="absolute inset-0 rounded-lg shine-bg" />
                                )}
                                <span className="relative z-10">{link}</span>
                                {link === 'Pages' && (
                                    <svg className="inline-block w-3 h-3 ml-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                )}
                            </motion.button>
                        ))}
                    </div>

                    <motion.button
                        className="hidden md:block btn-primary text-sm px-6 py-2.5 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Join Now
                    </motion.button>

                    <button className="md:hidden w-10 h-10 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                        <div className="flex flex-col gap-1.5">
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden mt-4"
                        >
                            <div className="glass-card p-4 space-y-1">
                                {links.map((link, i) => (
                                    <motion.button
                                        key={link}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => handleNavClick(link)}
                                        className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeLink === link ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link}
                                    </motion.button>
                                ))}
                                <div className="pt-3">
                                    <button className="btn-primary w-full text-sm py-2.5 rounded-full">Join Now</button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navbar
