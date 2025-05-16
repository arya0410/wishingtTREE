'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <section className="py-20 bg-primary-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl text-primary-900 mb-6">About Us</h2>
                    <div className="max-w-4xl mx-auto space-y-6 text-primary-800 text-lg">
                        <p>
                            Wishing Tree is a premier wedding planning and events company renowned for its expertise in curating extraordinary celebrations.
                            With a legacy of orchestrating weddings across both national and international landscapes, Wishing Tree has established itself
                            as a leader in the industry, celebrated for turning dreams into reality.
                        </p>
                        <p>
                            For three consecutive years, Wishing Tree has proudly held the title of the Best Wedding Planning and MICE Company —
                            a testament to its dedication to excellence and innovation.
                        </p>
                        <p>
                            Our portfolio is adorned with weddings hosted in some of the most luxurious venues globally — including Emirates Palace,
                            JW Marriott, The Leela, Oberoi, and Taj.
                        </p>
                        <p className="font-display text-xl text-gold-800">
                            Our motto is simple: Imagine, Create, Impress. From intimate gatherings to lavish extravaganzas,
                            our bespoke approach ensures every celebration is as unique as the couple we design it for.
                        </p>
                    </div>
                    <Link
                        href="/team"
                        className="inline-block mt-8 bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full transition-colors duration-300"
                    >
                        Meet Our Team
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection 