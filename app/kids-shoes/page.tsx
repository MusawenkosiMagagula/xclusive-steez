import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductCard from '../components/product/ProductionCard'
import WhatsAppButton from '../components/ui/WhatsAppButton'

const kidsProducts = [
  {
    id: 11,
    name: 'MINI STAR SNEAKERS',
    category: 'Kids Shoes',
    price: 899.99,
    image: '/products/mini-star-sneakers.jpg',
    isNew: true
  },
  {
    id: 12,
    name: 'RAINBOW RUNNERS',
    category: 'Kids Shoes',
    price: 799.99,
    image: '/products/rainbow-runners.jpg',
    isNew: false
  },
  {
    id: 13,
    name: 'VELCRO CHAMPIONS',
    category: 'Kids Shoes',
    price: 699.99,
    image: '/products/velcro-champions.jpg',
    isNew: true
  },
  {
    id: 14,
    name: 'LITTLE EXPLORER BOOTS',
    category: 'Kids Shoes',
    price: 1199.99,
    image: '/products/little-explorer-boots.jpg',
    isNew: false
  },
  {
    id: 15,
    name: 'PLAYGROUND PROS',
    category: 'Kids Shoes',
    price: 849.99,
    image: '/products/playground-pros.jpg',
    isNew: true
  },
  {
    id: 16,
    name: 'TINY ATHLETES',
    category: 'Kids Shoes',
    price: 749.99,
    image: '/products/tiny-athletes.jpg',
    isNew: false
  }
]

const ageGroups = [
  { name: 'Toddlers (1-3 years)', sizes: 'Size 4-8' },
  { name: 'Little Kids (4-7 years)', sizes: 'Size 9-13' },
  { name: 'Big Kids (8-12 years)', sizes: 'Size 1-6' }
]

export default function KidsShoesPage() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              KIDS <span className="text-yellow-300">COLLECTION</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Stylish, comfortable shoes for little feet. From first steps to playground adventures!
            </p>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Age Group</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{group.name}</h3>
                <p className="text-gray-600 mb-4">{group.sizes}</p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Kids Shoes</h2>
          <p className="text-lg text-gray-600">Quality shoes that grow with your child</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {kidsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Kids Size Guide */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kids Size Guide</h2>
            <p className="text-lg text-gray-600">How to measure your child's feet</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📏 How to Measure</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Place a piece of paper on the floor against a wall</li>
                <li>Have your child stand on the paper with heel against wall</li>
                <li>Mark the longest toe with a pencil</li>
                <li>Measure from heel to toe mark in centimeters</li>
                <li>Add 1cm for growing room</li>
              </ol>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Pro Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Measure feet in the afternoon when they're largest</li>
                <li>Measure both feet (they can be different sizes)</li>
                <li>Check size every 2-3 months as kids grow fast</li>
                <li>Look for shoes with adjustable straps</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Range</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SA Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">US Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EU Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foot Length (cm)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12-18 months</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12.5</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">18-24 months</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13.5</td></tr>
                <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2-3 years</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3-4 years</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">27</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16.5</td></tr>
                <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4-5 years</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5-6 years</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19.5</td></tr>
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