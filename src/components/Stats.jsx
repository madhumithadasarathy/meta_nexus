import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const statsData = [
    { value: 25000, label: 'Active Users', suffix: '+', prefix: '' },
    { value: 10, label: 'NFTs Created', suffix: 'K+', prefix: '' },
    { value: 5, label: 'Trading Volume', suffix: 'M+', prefix: '$' },
    { value: 99, label: 'Uptime', suffix: '%', prefix: '' },
]

const Counter = ({ target, prefix, suffix, inView }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!inView) return
        let start
        const dur = 2000
        const step = (ts) => {
            if (!start) start = ts
            const p = Math.min((ts - start) / dur, 1)
            setCount(Math.floor(target * (1 - Math.pow(1 - p, 3))))
            if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [inView, target])
    return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}

const Stats = () => {
    const [inView, setInView] = useState(false)

    return (
        <section className="relative py-20 bg-black">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(168, 85, 247, 0.05), transparent, rgba(236, 72, 153, 0.05))' }} />
            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                onViewportEnter={() => setInView(true)}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {statsData.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center glass-card p-6 sm:p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                        >
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold accent-text mb-2">
                                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={inView} />
                            </div>
                            <div className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Stats
