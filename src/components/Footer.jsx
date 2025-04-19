export default function Footer() {
  return (
    <footer className="mt-16">
      {/* Part 1 - Branding Section */}
      <div className="bg-[#E71318] text-white">
        <div className="py-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            HOMEGROWN INDIAN BRAND
          </h2>
        </div>
        <div className="bg-white py-6">
          <p className="text-3xl md:text-4xl text-center text-gray-800 font-bold">
            Over 6 Million Happy Customers
          </p>
        </div>
      </div>

      {/* Part 2 - Links Section */}
      <div className="bg-gray-100 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Need Help Column */}
          <div className="space-y-3">
            <h5 className="text-[#ED2E30] text-lg font-bold mb-4">NEED HELP</h5>
            {['Contact Us', 'Track Order', 'Returns & Refunds', 'FAQs', 'My Account'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-600 hover:text-[#ED2D2F] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h5 className="text-[#ED2E30] text-lg font-bold mb-4">COMPANY</h5>
            {['About Us', 'Careers', 'Gift Vouchers', 'Community Initiatives', 'Souled Army'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-600 hover:text-[#ED2D2F] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* More Info Column */}
          <div className="space-y-3">
            <h5 className="text-[#ED2E30] text-lg font-bold mb-4">MORE INFO</h5>
            {['T&C', 'Privacy Policy', 'Sitemap', 'Blogs'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-600 hover:text-[#ED2D2F] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Store Near Me Column */}
          <div className="space-y-3">
            <h5 className="text-[#ED2E30] text-lg font-bold mb-4">STORE NEAR ME</h5>
            {['Mumbai', 'Pune', 'Indore', 'Bengaluru'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-600 hover:text-[#ED2D2F] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-2xl text-white py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} The Souled Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}