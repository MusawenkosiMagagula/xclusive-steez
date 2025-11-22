import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductCard from '../components/product/ProductionCard'
import WhatsAppButton from '../components/ui/WhatsAppButton'

const accessoryCategories = [
  {
    name: 'Phone Cases',
    description: 'Protect your device in style',
    icon: '📱',
    count: 8
  },
  {
    name: 'Bags & Backpacks',
    description: 'Carry your essentials',
    icon: '🎒',
    count: 6
  },
  {
    name: 'Hats & Beanies',
    description: 'Top off your look',
    icon: '🧢',
    count: 5
  },
  {
    name: 'Jewelry',
    description: 'Add some sparkle',
    icon: '💎',
    count: 4
  }
]

const accessories = [
  {
    id: 31,
    name: 'iPHONE 16 PRO MAX - 256GB',
    category: 'iPhones',
    price: 25000.00,
    image: '/products/iPhone-16-Pro-Max-256GB-R25000.JPG',
    isNew: true
  },
  {
    id: 32,
    name: 'iPHONE 16 PRO - 256GB',
    category: 'iPhones',
    price: 24000.00,
    image: '/products/iPhone-16-Pro-256GB-R24000.PNG',
    isNew: true
  },
  {
    id: 33,
    name: 'iPHONE 16 - 128GB',
    category: 'iPhones',
    price: 17000.00,
    image: '/products/iPhone-16-128GB-R17000.JPG',
    isNew: true
  },
  {
    id: 34,
    name: 'iPHONE 15 PRO MAX - 256GB',
    category: 'iPhones',
    price: 20000.00,
    image: '/products/iPhone-15-Pro-Max-256GB-R20000.JPG',
    isNew: false
  },
  {
    id: 35,
    name: 'iPHONE 15 PRO - 256GB',
    category: 'iPhones',
    price: 17500.00,
    image: '/products/iPhone-15-Pro-256GB-R17500.JPG',
    isNew: false
  },
  {
    id: 36,
    name: 'iPHONE 15 - 128GB',
    category: 'iPhones',
    price: 15500.00,
    image: '/products/iPhone-15-128GB-R15500.webp',
    isNew: false
  },
  {
    id: 37,
    name: 'iPHONE 14 PRO MAX - 256GB',
    category: 'iPhones',
    price: 17500.00,
    image: '/products/iPhone14-Pro-Max-256GB-R17500.JPG',
    isNew: false
  },
  {
    id: 38,
    name: 'iPHONE 13 PRO - 128GB',
    category: 'iPhones',
    price: 12500.00,
    image: '/products/iPhone-13 Pro-128GB-R12500.WEBP',
    isNew: false
  }
]

export default function AccessoriesPage() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              COMPLETE <span className="text-yellow-300">YOUR LOOK</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              The perfect accessories to elevate your style. From phone cases to statement jewelry.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600">Find the perfect accessories for your style</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {accessoryCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="text-sm text-purple-600 font-medium">{category.count} items</div>
            </div>
          ))}
        </div>

        {/* Featured Accessories */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Accessories</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {accessories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Phone Compatibility Guide */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📱 Phone Case Compatibility</h2>
            <p className="text-lg text-gray-600">Check if we have cases for your device</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">iPhone Models</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ iPhone 15 Pro Max</li>
                <li>✅ iPhone 15 Pro</li>
                <li>✅ iPhone 15</li>
                <li>✅ iPhone 14 Series</li>
                <li>✅ iPhone 13 Series</li>
                <li>✅ iPhone 12 Series</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Samsung Models</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Galaxy S24 Ultra</li>
                <li>✅ Galaxy S24/S24+</li>
                <li>✅ Galaxy S23 Series</li>
                <li>✅ Galaxy Note 20</li>
                <li>✅ Galaxy A Series</li>
                <li>✅ Galaxy Z Flip/Fold</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Brands</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Google Pixel 8 Pro</li>
                <li>✅ Huawei P Series</li>
                <li>✅ OnePlus Models</li>
                <li>✅ Xiaomi Flagships</li>
                <li>❓ Don't see yours? <span className="text-purple-600">Contact us!</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Care Instructions</h2>
            <p className="text-lg text-gray-600">Keep your accessories looking fresh</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧼</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Clean Gently</h3>
              <p className="text-sm text-gray-600">Use mild soap and water for bags and cases</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Avoid Sun</h3>
              <p className="text-sm text-gray-600">Direct sunlight can fade colors</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Store Properly</h3>
              <p className="text-sm text-gray-600">Keep in dust bags when not in use</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Handle Jewelry</h3>
              <p className="text-sm text-gray-600">Remove before swimming or showering</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}