'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="relative z-50">
                        <h1 className={`font-display text-2xl ${isScrolled ? 'text-primary-900' : 'text-white'
                            }`}>
                            Wishing Tree
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/about"
                            className={`${isScrolled ? 'text-primary-800' : 'text-white'
                                } hover:text-gold-500 transition-colors`}
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className={`${isScrolled ? 'text-primary-800' : 'text-white'
                                } hover:text-gold-500 transition-colors`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/portfolio"
                            className={`${isScrolled ? 'text-primary-800' : 'text-white'
                                } hover:text-gold-500 transition-colors`}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-2 rounded-full transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative z-50"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'
                                }`} />
                        ) : (
                            <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'
                                }`} />
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-white z-40 md:hidden"
                        >
                            <div className="flex flex-col items-center justify-center h-full space-y-8">
                                <Link
                                    href="/about"
                                    className="text-primary-900 text-xl hover:text-gold-500 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/services"
                                    className="text-primary-900 text-xl hover:text-gold-500 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="text-primary-900 text-xl hover:text-gold-500 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header 