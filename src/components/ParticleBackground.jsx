import { useMemo } from 'react'

const ParticleBackground = () => {
    const particles = useMemo(() =>
        Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 15,
            duration: 10 + Math.random() * 20,
            size: 2 + Math.random() * 3,
            opacity: 0.2 + Math.random() * 0.3,
        })),
        [])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: i % 2 === 0 ? `rgba(168, 85, 247, ${p.opacity})` : `rgba(236, 72, 153, ${p.opacity})`,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                    }}
                />
            ))}
        </div>
    )
}

export default ParticleBackground
