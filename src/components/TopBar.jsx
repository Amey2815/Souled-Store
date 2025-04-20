import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function TopBar() {

  const [selected, setSelected] = useState('Men'); // Default selected

  const categories = ['Women', 'Men', 'Kids'];

  return (
    <div className="bg-[#E11B23] h-12 flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
      {/* <div className="flex order-1 md:order-2 md:ml-40 ml-0 ">
        {['Women', 'Men', 'Kids'].map((item, index) => (
          <div 
            key={item}
            className={`h-12 px-5 flex items-center justify-center 
              ${index === 1 ? 'bg-white' : 'bg-[#ed2d2f]'} 
              border border-black`}
          >
            <a href="#" className={`text-sm font-bold uppercase 
              ${index === 1 ? 'text-black' : 'text-white'}`}>
              {item}
            </a>
          </div>
        ))}
      </div> */}

      <div className="flex order-1 md:order-2 md:ml-40 ml-0">
        {categories.map((item) => (
          <div
            key={item}
            onClick={() => setSelected(item)}
            className={`h-12 px-5 flex items-center justify-center cursor-pointer
      ${selected === item ? 'bg-white' : 'bg-[#ed2d2f]'}
      border border-black transition-colors duration-200`}
          >
            <Link
              to={`/${item.toLowerCase()}`}
              className={`text-sm font-bold uppercase 
        ${selected === item ? 'text-black' : 'text-white'}`}
            >
              {item}
            </Link>
          </div>
        ))}

      </div>

      <div className="flex items-center space-x-4 order-1 md:order-2 mb-2 md:mb-0">
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faLocationDot} className="text-white" />
          <a href="#" className="text-white text-sm font-semibold">india</a>
        </div>
        {['track order', 'contact us', 'download app'].map((item) => (
          <a key={item} href="#" className="text-white text-xs uppercase hidden md:block">
            {item}
          </a>
        ))}
      </div>
    </div>
  )
}