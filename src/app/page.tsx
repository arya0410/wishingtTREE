import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import AboutSection from '@/components/AboutSection'
import FounderSection from '@/components/FounderSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg"
                            alt="Luxury Indian Wedding"
                            fill
                            className="object-cover brightness-50"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                        <h1 className="font-display text-5xl md:text-7xl mb-4 tracking-wide">
                            Wishing Tree
                        </h1>
                        <p className="font-sans text-xl md:text-2xl mb-8 text-gold-300">
                            You Wish, We Accomplish
                        </p>
                        <p className="font-sans text-lg md:text-xl mb-12 opacity-90">
                            Luxury Indian Weddings, Crafted Globally
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/services"
                                className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full transition-colors duration-300"
                            >
                                Explore Our Services
                            </Link>
                            <Link
                                href="/contact"
                                className="border-2 border-white hover:bg-white hover:text-gold-900 text-white px-8 py-3 rounded-full transition-colors duration-300"
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </section>

                <AboutSection />
                <FounderSection />
                <ServicesSection />
                <TestimonialsSection />
                <ContactSection />
                <Footer />
            </main>
        </>
    )
} 