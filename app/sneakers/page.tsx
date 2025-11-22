import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductCard from '../components/product/ProductionCard'
import WhatsAppButton from '../components/ui/WhatsAppButton'

const sneakersProducts = [
  {
    id: 1,
    name: 'AIR JORDAN 4 RETRO - BLACK CAT',
    category: 'Jordan',
    price: 1700.00,
    image: '/products/Air Jordan 4 Retro - Black Cat R1700.WEBP',
    isNew: true
  },
  {
    id: 2,
    name: 'NIKE DUNK LOW - BLACK & WHITE',
    category: 'Nike',
    price: 1500.00,
    image: '/products/Nike Dunk Low - Black & White R1500.JPG',
    isNew: false
  },
  {
    id: 3,
    name: 'ADIDAS SAMBA OG - BLACK & WHITE',
    category: 'Adidas',
    price: 1500.00,
    image: '/products/Adidas Samba OG - Black & White R1500.JPG',
    isNew: true
  },
  {
    id: 4,
    name: 'NEW BALANCE 550 - BLACK & WHITE',
    category: 'New Balance',
    price: 1500.00,
    image: '/products/New Balance 550 - Black & White R1500.JPG',
    isNew: false
  },
  {
    id: 5,
    name: 'AIR JORDAN 4 RETRO - BRED REIMAGINED',
    category: 'Jordan',
    price: 1700.00,
    image: '/products/Air Jordan 4 Retro - Bred Reimagined R1700.JPG',
    isNew: true
  },
  {
    id: 6,
    name: 'NIKE AIR FORCE 1 07 PANDA',
    category: 'Nike',
    price: 1600.00,
    image: '/products/Nike Air Force 1 07 Panda - Black & White R1600.jpg',
    isNew: false
  },
  {
    id: 7,
    name: 'ADIDAS GAZELLE BOLD PLATFORM - BLACK',
    category: 'Adidas',
    price: 1600.00,
    image: '/products/Adidas Gazelle Bold Platform - Black Suede R1600.jpg',
    isNew: true
  },
  {
    id: 8,
    name: 'NEW BALANCE 9060 - TRIPLE BLACK',
    category: 'New Balance',
    price: 1600.00,
    image: '/products/New Balane 9060 - Triple Black R1600.JPG',
    isNew: false
  },
  {
    id: 9,
    name: 'NIKE SHOX TL - WHITE METALLIC SILVER',
    category: 'Nike',
    price: 1800.00,
    image: '/products/Nike Shox TL - White Metalic Siver R1800.JPG',
    isNew: true
  },
  {
    id: 10,
    name: 'LACOSTE ELITE ACTIVE - BLACK & WHITE',
    category: 'Lacoste',
    price: 1700.00,
    image: '/products/Lacoste Elite Active - Black & White R1700.WEBP',
    isNew: false
  },
  {
    id: 11,
    name: 'AIR JORDAN 1 RETRO HIGH - UNIVERSITY BLUE',
    category: 'Jordan',
    price: 1700.00,
    image: '/products/Air Jordan 1 Retro High  - University Blue R1700.WEBP',
    isNew: true
  },
  {
    id: 12,
    name: 'PUMA SUEDE XL - BLACK & WHITE',
    category: 'Puma',
    price: 1600.00,
    image: '/products/Puma Suede XL - Black & White R1600.WEBP',
    isNew: false
  }
]

export default function SneakersPage() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              EXCLUSIVE <span className="text-primary-500">SNEAKERS</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Step into exclusivity with our premium sneaker collection. Limited drops, unlimited style.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  All Sneakers
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  New Arrivals
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Price: Low to High
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Showing {sneakersProducts.length} products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sneakersProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Size Guide Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Size Guide</h2>
            <p className="text-lg text-gray-600">Find your perfect fit with our sizing chart</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SA Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    US Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EU Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    UK Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Foot Length (cm)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">38</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23.5</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">39</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24.5</td></tr>
                <tr><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">40</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25.5</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">26.5</td></tr>
                <tr><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">43</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27.5</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">44</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28.5</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}