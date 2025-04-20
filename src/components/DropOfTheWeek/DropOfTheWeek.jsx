export default function DropOfTheWeek() {
    const dropItems = [
      { src: "/Drop-of-the-week-2_02_01.png", alt: "Weekly Drop 1" },
      { src: "/Drop-of-the-week-2_02_02.png", alt: "Weekly Drop 2" },
      { src: "/Drop-of-the-week-2_02_03.png", alt: "Weekly Drop 3" },
    ];
  
    return (
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold uppercase text-center mb-6 md:mb-8">
          drop of the week
        </h3>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {dropItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full   md:h-full  object-cover transform transition-transform duration-300 hover:scale-105"
              />
              
            </div>
          ))}
        </div>
      </section>
    );
  }
  