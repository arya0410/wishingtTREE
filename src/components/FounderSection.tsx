'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const FounderSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative aspect-square">
                        <Image
                            src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg"
                            alt="Vikas Arora - CEO of Wishing Tree"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <h2 className="font-display text-4xl text-primary-900 mb-4">
                            Meet Our Founder
                        </h2>
                        <h3 className="text-xl text-gold-800 mb-6">
                            Vikas Arora
                            <span className="block text-lg text-primary-600 mt-1">
                                CEO of Wishing Tree & Core Connect Technologies
                            </span>
                        </h3>
                        <div className="space-y-4 text-primary-800">
                            <p>
                                With over two decades of experience in the luxury events industry,
                                Vikas Arora has established himself as a visionary leader in wedding planning
                                and corporate events.
                            </p>
                            <p>
                                His innovative approach to event management and deep understanding of both
                                traditional and contemporary elements has earned Wishing Tree its reputation
                                as one of India's most prestigious event planning companies.
                            </p>
                            <p>
                                Under his leadership, Wishing Tree has successfully orchestrated over 500
                                high-profile weddings and events across the globe, setting new standards
                                in luxury celebrations.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default FounderSection 