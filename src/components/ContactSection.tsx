'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

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
                    <h2 className="font-display text-4xl md:text-5xl text-primary-900 mb-6">
                        Let's Create Magic Together
                    </h2>
                    <p className="text-lg text-primary-800 max-w-3xl mx-auto">
                        Ready to begin planning your dream wedding? Get in touch with us.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-primary-800 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-primary-800 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-primary-800 mb-2">
                                    Phone / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="eventType" className="block text-primary-800 mb-2">
                                    Event Type
                                </label>
                                <select
                                    id="eventType"
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                                    required
                                >
                                    <option value="">Select Event Type</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Destination Wedding">Destination Wedding</option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-primary-800 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-lg transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="font-display text-2xl text-primary-900 mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <EnvelopeIcon className="h-6 w-6 text-gold-600 mr-3" />
                                    <span className="text-primary-800">contact@wishingtree.com</span>
                                </div>
                                <div className="flex items-center">
                                    <PhoneIcon className="h-6 w-6 text-gold-600 mr-3" />
                                    <span className="text-primary-800">+91 98765 43210</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPinIcon className="h-6 w-6 text-gold-600 mr-3" />
                                    <span className="text-primary-800">
                                        123 Luxury Avenue, Delhi NCR, India
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display text-2xl text-primary-900 mb-6">Connect With Us</h3>
                            <div className="flex space-x-4">
                                {/* Add social media icons/links here */}
                            </div>
                        </div>

                        <div className="aspect-video relative rounded-lg overflow-hidden">
                            {/* Add map or image here */}
                            <div className="absolute inset-0 bg-primary-100" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection 