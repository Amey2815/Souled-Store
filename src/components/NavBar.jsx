import { faMagnifyingGlass, faUser, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar() {
  const navItems = [
    "Winter'24", "Topwear", "Bottomwear", "Bestsellers", 
    "Footwear", "Accessories", "Special Prices", "Collections"
  ]
  
  const icons = [faMagnifyingGlass, faUser, faHeart, faBagShopping]

  return (
    <nav className="bg-white sticky top-0 z-50 px-7 md:px-8 flex justify-evenly items-center">
      <img src="/brandlogo.png" alt="logo" className="w-27 md:w-30 " />
      
      <div className="flex flex-wrap justify-center items-center gap-4  md:mt-0">
        <div className='hidden md:flex'>
        {navItems.map((item) => (
          <a 
            key={item}
            href="#" 
            className="text-gray-600 text-sm  font-semibold uppercase hover:text-[#ED2D2F] hover:border-b-2 hover:border-[#ED2D2F] px-2 py-1"
          >
            {item}
          </a>
        ))}
        </div>
        
        
        {icons.map((icon, index) => (
          <FontAwesomeIcon 
            key={index}
            icon={icon} 
            className="text-gray-600 text-lg ml-4 hover:text-[#ED2D2F] cursor-pointer" 
          />
        ))}
      </div>
    </nav>
  )
}