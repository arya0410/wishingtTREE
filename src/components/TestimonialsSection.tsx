'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
    {
        name: 'Priya Sharma',
        text: 'Wishing Tree made our wedding absolutely magical!',
    },
    {
        name: 'Arjun Mehta',
        text: "Professional, creative, and deeply personal - couldn't ask for more.",
    },
    {
        name: 'Sneha & Rajiv Kapoor',
        text: 'Our destination wedding in Udaipur was picture-perfect thanks to them.',
    },
    {
        name: 'Rhea Malhotra',
        text: 'Everything was seamless - from decor to hospitality.',
    },
    {
        name: 'Ankit Bansal',
        text: 'Guests still talk about how grand our wedding was!',
    },
    {
        name: 'Divya & Aman Khurana',
        text: 'Their team is just brilliant - no stress, only celebration.',
    },
    {
        name: 'Karan & Nidhi Jain',
        text: 'So many thoughtful touches throughout the event!',
    },
]

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl text-primary-900 mb-6">
                        What Our Couples Say
                    </h2>
                    <p className="text-lg text-primary-800 max-w-3xl mx-auto">
                        Read about the magical moments we've created for our cherished couples.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="pb-12"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary-50 p-6 rounded-lg h-full"
                            >
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} className="h-5 w-5 text-gold-500" />
                                    ))}
                                </div>
                                <p className="text-primary-800 mb-4 italic">"{testimonial.text}"</p>
                                <p className="text-gold-800 font-display">- {testimonial.name}</p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default TestimonialsSection 