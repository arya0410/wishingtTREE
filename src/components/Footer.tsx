import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaPinterest, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo & About */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <h3 className="font-display text-2xl">Wishing Tree</h3>
                        </Link>
                        <p className="text-primary-200">
                            Crafting extraordinary celebrations that leave lasting impressions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-xl mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-primary-200 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-primary-200 hover:text-white transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-primary-200 hover:text-white transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-primary-200 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display text-xl mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/wedding-planning" className="text-primary-200 hover:text-white transition-colors">
                                    Wedding Planning
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/destination-weddings" className="text-primary-200 hover:text-white transition-colors">
                                    Destination Weddings
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/corporate-events" className="text-primary-200 hover:text-white transition-colors">
                                    Corporate Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/mice" className="text-primary-200 hover:text-white transition-colors">
                                    MICE
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="font-display text-xl mb-4">Connect With Us</h4>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-200 hover:text-white transition-colors"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-200 hover:text-white transition-colors"
                            >
                                <FaPinterest className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-200 hover:text-white transition-colors"
                            >
                                <FaLinkedinIn className="h-6 w-6" />
                            </a>
                        </div>
                        <div className="space-y-2 text-primary-200">
                            <p>contact@wishingtree.com</p>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-200">
                    <p>Copyright © {currentYear} Wishing Tree. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 