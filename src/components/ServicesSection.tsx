'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface ServiceCategory {
    title: string
    items: string[]
}

const serviceCategories: ServiceCategory[] = [
    {
        title: 'Wedding Planning & Management',
        items: [
            'Full Wedding Planning',
            'Partial Wedding Planning',
            'Day-of Coordination',
            'Wedding Budget Planning',
            'Timeline Management',
        ],
    },
    {
        title: 'Design & Décor',
        items: [
            'Theme Conceptualization',
            'Venue Styling & Floral Design',
            'Lighting & Ambiance Design',
            'Mandap & Stage Setup',
            'Custom Installations',
        ],
    },
    {
        title: 'Destination Weddings',
        items: [
            'International & Domestic Destination Planning',
            'Travel & Hospitality Management',
            'Guest Management & Concierge Services',
            'Venue Sourcing (Palaces, Beaches, Luxury Resorts)',
        ],
    },
    {
        title: 'Vendor Coordination',
        items: [
            'Venue Booking',
            'Catering & Menu Curation',
            'Photography & Videography',
            'Makeup Artists & Stylists',
            'Entertainment & Artists',
        ],
    },
    {
        title: 'Hospitality & Guest Management',
        items: [
            'RSVP Management',
            'Guest Welcome Kits',
            'Airport Transfers & Accommodation',
            'Personalised Itineraries',
        ],
    },
    {
        title: 'Pre-Wedding Events',
        items: [
            'Engagement',
            'Mehendi',
            'Sangeet',
            'Haldi',
            'Cocktail',
            'Bachelor/Bachelorette',
        ],
    },
]

const ServicesSection = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

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
                    <h2 className="font-display text-4xl md:text-5xl text-primary-900 mb-6">Our Services</h2>
                    <p className="text-lg text-primary-800 max-w-3xl mx-auto">
                        From intimate gatherings to grand celebrations, we offer comprehensive wedding planning
                        services tailored to your unique vision.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {serviceCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setExpandedCategory(
                                    expandedCategory === category.title ? null : category.title
                                )}
                                className="w-full px-6 py-4 flex items-center justify-between text-left"
                            >
                                <h3 className="text-xl font-display text-primary-900">{category.title}</h3>
                                <ChevronDownIcon
                                    className={`w-6 h-6 text-gold-600 transition-transform duration-300 ${expandedCategory === category.title ? 'transform rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {expandedCategory === category.title && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-4"
                                    >
                                        <ul className="space-y-2 text-primary-700">
                                            {category.items.map((item) => (
                                                <li key={item} className="flex items-center">
                                                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full transition-colors duration-300">
                        Schedule a Discovery Call
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection 