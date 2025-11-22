import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductCard from '../components/product/ProductionCard'
import WhatsAppButton from '../components/ui/WhatsAppButton'

const newArrivals = [
  {
    id: 21,
    name: 'DECONSTRUCTED HOODIE',
    category: 'Hoodies',
    price: 1699.99,
    image: '/products/deconstructed-hoodie.jpg',
    isNew: true
  },
  {
    id: 22,
    name: 'TABI SNEAKERS',
    category: 'Sneakers',
    price: 2899.99,
    image: '/products/tabi-sneakers.jpg',
    isNew: true
  },
  {
    id: 23,
    name: 'OVERSIZED T-SHIRT',
    category: 'T-Shirts',
    price: 749.99,
    image: '/products/oversized-tshirt.jpg',
    isNew: true
  },
  {
    id: 24,
    name: 'DECONSTRUCTED BLAZER',
    category: 'Outerwear',
    price: 3799.99,
    image: '/products/deconstructed-blazer.jpg',
    isNew: true
  },
  {
    id: 25,
    name: 'FUTURE TECH JACKET',
    category: 'Outerwear',
    price: 2999.99,
    image: '/products/future-tech-jacket.jpg',
    isNew: true
  },
  {
    id: 26,
    name: 'MINIMAL CARGO PANTS',
    category: 'Bottoms',
    price: 1499.99,
    image: '/products/minimal-cargo-pants.jpg',
    isNew: true
  },
  {
    id: 27,
    name: 'SIGNATURE BEANIE',
    category: 'Accessories',
    price: 399.99,
    image: '/products/signature-beanie.jpg',
    isNew: true
  },
  {
    id: 28,
    name: 'URBAN BACKPACK',
    category: 'Accessories',
    price: 1299.99,
    image: '/products/urban-backpack.jpg',
    isNew: true
  }
]

export default function NewArrivalsPage() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔥 FRESH DROPS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              NEW <span className="text-yellow-300">ARRIVALS</span>
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Be the first to get your hands on our latest exclusive pieces. Limited quantities, maximum style.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">8</div>
              <div className="text-sm text-gray-300">New Items This Week</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">72hrs</div>
              <div className="text-sm text-gray-300">Average Sellout Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">Limited</div>
              <div className="text-sm text-gray-300">Edition Pieces</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">Premium</div>
              <div className="text-sm text-gray-300">Quality Materials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Options */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Filter by category:</span>
              <div className="flex flex-wrap space-x-2">
                <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
                  All New
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Sneakers
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Apparel
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Accessories
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {newArrivals.length} fresh drops
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              {/* New Arrival Badge */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                NEW
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Drop</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get notified first when new exclusive pieces arrive. No spam, just style.
          </p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Notify Me
            </button>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Join 2,500+ style enthusiasts getting early access to exclusive drops
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}