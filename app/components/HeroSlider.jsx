'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const basePath = "/Rebuild-Naththandiya"
  
  // Hero images
  const slides = [
    `${basePath}/hero1.jpg`,
    `${basePath}/hero2.jpg`,
    `${basePath}/hero3.jpg`,
    `${basePath}/hero4.jpg`,
  ]

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide}
            alt={`Naththandiya community ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center text-white">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Rebuild Naththandiya
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-md font-light">
              Together, we can help restore hope and education to the children of Naththandiya. 
              Every child deserves the tools they need to learn, grow, and dream again.
            </p>

            {/* Optional: Call to action button */}
            <div className="mt-8">
              <a
                href="#donate"
                className="inline-block bg-primary hover:bg-opacity-90 text-white font-semibold 
                           px-8 py-4 rounded-lg text-lg transition-all shadow-lg 
                           hover:shadow-xl hover:scale-105"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all shadow-lg ${
              index === currentSlide 
                ? 'bg-primary w-12' 
                : 'bg-white bg-opacity-60 hover:bg-opacity-100 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          className="w-6 h-6 text-white opacity-75" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}