import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              XCLUSIVE<span className="text-green-500">STEEZ</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted destination for authentic sneakers and premium iPhones in South Africa. 
              From exclusive Jordan releases to the latest iPhone models - we've got your style covered.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/27725789343" target="_blank" rel="noopener noreferrer" 
                 className="text-green-400 hover:text-green-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.496"/>
                </svg>
              </a>
              <a href="mailto:info@xclusivesteez.com" 
                 className="text-blue-400 hover:text-blue-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/sneakers" className="text-gray-300 hover:text-white text-sm">Sneakers</Link></li>
              <li><Link href="/iphones" className="text-gray-300 hover:text-white text-sm">iPhones</Link></li>
              <li><Link href="/new-arrivals" className="text-gray-300 hover:text-white text-sm">New Arrivals</Link></li>
              <li><Link href="/kids-shoes" className="text-gray-300 hover:text-white text-sm">Kids Shoes</Link></li>
              <li><Link href="/accessories" className="text-gray-300 hover:text-white text-sm">Accessories</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://wa.me/27725789343" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-white text-sm">
                  WhatsApp Support
                </a>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Authentication</a></li>
            </ul>
          </div>
        </div>
        
        {/* Contact Info Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-2">Contact</h4>
              <p className="text-gray-300 text-sm">Phone: +27 72 578 9343</p>
              <p className="text-gray-300 text-sm">Email: info@xclusivesteez.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-2">Location</h4>
              <p className="text-gray-300 text-sm">Based in South Africa</p>
              <p className="text-gray-300 text-sm">Nationwide Delivery</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-2">Guarantee</h4>
              <p className="text-gray-300 text-sm">100% Authentic Products</p>
              <p className="text-gray-300 text-sm">6 Month Warranty</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Xclusive Steez. All rights reserved. Authentic sneakers & premium devices since 2025.</p>
          <p className="mt-2">Built with care for sneakerheads and tech enthusiasts in South Africa</p>
        </div>
      </div>
    </footer>
  )
}
