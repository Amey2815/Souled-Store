export default function Categories() {
    const categoryImages = [
      { src: "/big_tles-_2nd_jan_2025.hoodies_o.png", alt: "Hoodies" },
      { src: "/big_tles-_2nd_jan_2025.ost_2I7WT.png", alt: "T-shirts" },
      { src: "/big_tles-_2nd_jan_2025.shirts_pR.png", alt: "Shirts" },
      { src: "/big_tles-_2nd_jan_2025.polo_V19t.png", alt: "Polo" },
      { src: "/big_tles-_2nd_jan_2025.ost_full.png", alt: "Oversized T-shirts" },
      { src: "/big_tles-_2nd_jan_2025.snakers_Z.png", alt: "Sneakers" },
      { src: "/big_tles-_2nd_jan_2025.pants_cVX.png", alt: "Pants" },
      { src: "/big_tles-_2nd_jan_2025.joggers_V.png", alt: "Joggers" },
      { src: "/big_tles-_2nd_jan_2025.jeans_Tfi.png", alt: "Jeans" },
      { src: "/big_tles-_2nd_jan_2025.jackets_0.png", alt: "Jackets" },
      { src: "/big_tles-_2nd_jan_2025.hoodie_ti.png", alt: "Hoodie" },
    ];
  
    return (
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold uppercase text-center mb-8">
          categories
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
          {categoryImages.map((image, index) => (
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
    );
  }