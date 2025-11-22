import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-2xl font-bold">
              XCLUSIVE<span className="text-primary-500">STEEZ</span>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              Elevating streetwear to exclusive fashion. Limited drops, premium quality.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              {['New Releases', 'Men', 'Women', 'Kids', 'Sale'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-white text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Help</h3>
            <ul className="mt-4 space-y-2">
              {['Contact Us', 'Shipping', 'Returns', 'Size Guide'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-white text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Stay Updated</h3>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="w-full mt-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Xclusive Steez. All rights reserved. Powered by Launchpad Digital.</p>
        </div>
      </div>
    </footer>
  )
}
