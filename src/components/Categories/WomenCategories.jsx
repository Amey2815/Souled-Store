import React from 'react'
import { Womencategory } from '../../data/sliderImages'
const WomenCategories = () => {
  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold uppercase text-center mb-8">
          categories
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
          {Womencategory.map((image, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-lg
                ${index < 3 ? "md:col-span-1 lg:row-span-2" : "md:col-span-1"}
                transition-transform duration-300 hover:scale-[1.02]
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            
            </div>
          ))}
        </div>
      </section>
  )
}

export default WomenCategories
