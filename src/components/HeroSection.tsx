import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className="relative h-screen">
            <div className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg"
                    alt="Luxury Indian Wedding"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl mb-6"
                    >
                        Creating Timeless Moments
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl mb-8"
                    >
                        Premier Wedding Planning & Events
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full transition-colors"
                    >
                        Start Planning
                    </motion.button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection 