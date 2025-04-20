import React, { useState } from 'react'
import { images2 } from '../../data/sliderImages'



const WomenSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? images2.length - 1 : prev - 1))
    }
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === images2.length - 1 ? 0 : prev + 1))
    }
  
    return (
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images2.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`Slide ${index + 1}`}
              className=" w-[700px] md:w-full h-[500px] object-cover flex-shrink-0"
            />
          ))}
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 text-gray-600 p-3 rounded-full hover:bg-white/80"
        >
          ‹
        </button>
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 text-gray-600 p-3 rounded-full hover:bg-white/80"
        >
          ›
        </button>
      </div>
    )
}

export default WomenSlider
