import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductCard from '../components/product/ProductionCard'
import WhatsAppButton from '../components/ui/WhatsAppButton'

const iPhoneProducts = [
  {
    id: 101,
    name: 'iPHONE 17 PRO MAX - 256GB',
    category: 'iPhone 17 Series',
    price: 31000.00,
    image: '/products/iPhone-17-Pro-Max-256GB-R31000.jpeg',
    isNew: true
  },
  {
    id: 102,
    name: 'iPHONE 17 PRO - 512GB',
    category: 'iPhone 17 Series',
    price: 30500.00,
    image: '/products/iPhone-17-Pro-512GB-R30500.jpeg',
    isNew: true
  },
  {
    id: 103,
    name: 'iPHONE 16 PRO MAX - 256GB',
    category: 'iPhone 16 Series',
    price: 25000.00,
    image: '/products/iPhone-16-Pro-Max-256GB-R25000.JPG',
    isNew: true
  },
  {
    id: 104,
    name: 'iPHONE 16 PRO - 256GB',
    category: 'iPhone 16 Series',
    price: 24000.00,
    image: '/products/iPhone-16-Pro-256GB-R24000.PNG',
    isNew: true
  },
  {
    id: 105,
    name: 'iPHONE 16 - 128GB',
    category: 'iPhone 16 Series',
    price: 17000.00,
    image: '/products/iPhone-16-128GB-R17000.JPG',
    isNew: true
  },
  {
    id: 106,
    name: 'iPHONE 15 PRO MAX - 256GB',
    category: 'iPhone 15 Series',
    price: 20000.00,
    image: '/products/iPhone-15-Pro-Max-256GB-R20000.JPG',
    isNew: false
  },
  {
    id: 107,
    name: 'iPHONE 15 PRO - 256GB',
    category: 'iPhone 15 Series',
    price: 17500.00,
    image: '/products/iPhone-15 Pro-256BG-R17500.JPG',
    isNew: false
  },
  {
    id: 108,
    name: 'iPHONE 15 - 128GB',
    category: 'iPhone 15 Series',
    price: 15500.00,
    image: '/products/iPhone-15-128GB-R15500.webp',
    isNew: false
  },
  {
    id: 109,
    name: 'iPHONE 14 PRO MAX - 256GB',
    category: 'iPhone 14 Series',
    price: 17500.00,
    image: '/products/iPhone14-Pro-Max-256GB-R17500.JPG',
    isNew: false
  },
  {
    id: 110,
    name: 'iPHONE 13 PRO MAX - 128GB',
    category: 'iPhone 13 Series',
    price: 14500.00,
    image: '/products/iPhone-13-Pro-Max-128GB-R14500-(256GB-R15500.WEBP.JPG',
    isNew: false
  },
  {
    id: 111,
    name: 'iPHONE 13 PRO - 128GB',
    category: 'iPhone 13 Series',
    price: 12500.00,
    image: '/products/iPhone-13 Pro-128GB-R12500.WEBP',
    isNew: false
  },
  {
    id: 112,
    name: 'iPHONE 13 - 128GB',
    category: 'iPhone 13 Series',
    price: 10000.00,
    image: '/products/iPhone-13-128GB-R10000.JPG',
    isNew: false
  }
]

const phoneCategories = [
  {
    name: 'iPhone 17 Series',
    description: 'Latest flagship models',
    icon: '📱',
    badge: 'NEW',
    color: 'from-purple-500 to-blue-500'
  },
  {
    name: 'iPhone 16 Series',
    description: 'Pro performance devices',
    icon: '⚡',
    badge: 'POPULAR',
    color: 'from-blue-500 to-green-500'
  },
  {
    name: 'iPhone 15 Series',
    description: 'Premium features',
    icon: '🚀',
    badge: 'BESTSELLER',
    color: 'from-green-500 to-yellow-500'
  },
  {
    name: 'iPhone 13-14 Series',
    description: 'Great value options',
    icon: '💎',
    badge: 'VALUE',
    color: 'from-yellow-500 to-red-500'
  }
]

export default function iPhonesPage() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              📱 PREMIUM DEVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              iPHONE <span className="text-blue-400">COLLECTION</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From the latest iPhone 17 series to reliable iPhone 13 models. All devices are genuine, unlocked, and come with warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-gray-900">100% Genuine</h3>
              <p className="text-sm text-gray-600">Authentic Apple devices</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">🔓</div>
              <h3 className="font-semibold text-gray-900">Factory Unlocked</h3>
              <p className="text-sm text-gray-600">Works with any network</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold text-gray-900">Warranty Included</h3>
              <p className="text-sm text-gray-600">6-month store warranty</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Next-day delivery available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Series</h2>
            <p className="text-lg text-gray-600">Find the perfect iPhone for your needs and budget</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {phoneCategories.map((category, index) => (
              <div key={index} className={`relative bg-gradient-to-r ${category.color} rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300`}>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                    {category.badge}
                  </span>
                </div>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All iPhone Models</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {iPhoneProducts.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                    LATEST
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage & Pricing Guide */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Storage Guide</h2>
            <p className="text-lg text-gray-600">Choose the right storage capacity for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">128GB</h3>
              <p className="text-gray-600 mb-4">Perfect for basic usage</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 20,000+ photos</li>
                <li>• 40+ hours of video</li>
                <li>• 50+ apps</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center border-2 border-blue-500">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">256GB</h3>
              <p className="text-blue-600 mb-4">Most popular choice</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 40,000+ photos</li>
                <li>• 80+ hours of video</li>
                <li>• 100+ apps</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">512GB</h3>
              <p className="text-gray-600 mb-4">For power users</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 80,000+ photos</li>
                <li>• 160+ hours of video</li>
                <li>• Unlimited apps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-in Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Trade In Your Old Device</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get instant credit towards your new iPhone. We accept all brands and conditions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold mb-1">Fair Prices</h3>
              <p className="text-sm text-blue-100">Competitive trade-in values</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-semibold mb-1">Instant Quote</h3>
              <p className="text-sm text-blue-100">Get your quote in minutes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔒</div>
              <h3 className="font-semibold mb-1">Data Security</h3>
              <p className="text-sm text-blue-100">Professional data wiping</p>
            </div>
          </div>
          
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Trade-in Quote
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}