import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ProductCard from './components/product/ProductionCard'
import WhatsAppButton from './components/ui/WhatsAppButton'

const featuredProducts = [
  {
    id: 1,
    name: 'AIR JORDAN 4 RETRO - BLACK CAT',
    category: 'Sneakers',
    price: 1700.00,
    image: '/products/Air Jordan 4 Retro - Black Cat R1700.WEBP',
    isNew: true
  },
  {
    id: 2,
    name: 'NIKE DUNK LOW - BLACK & WHITE',
    category: 'Sneakers',
    price: 1500.00,
    image: '/products/Nike Dunk Low - Black & White R1500.JPG',
    isNew: true
  },
  {
    id: 3,
    name: 'ADIDAS SAMBA OG - BLACK & WHITE',
    category: 'Sneakers',
    price: 1500.00,
    image: '/products/Adidas Samba OG - Black & White R1500.JPG',
    isNew: false
  },
  {
    id: 4,
    name: 'NIKE AIR FORCE 1 07 PANDA',
    category: 'Sneakers',
    price: 1600.00,
    image: '/products/Nike Air Force 1 07 Panda - Black & White R1600.jpg',
    isNew: true
  }
]

const premiumBasics = [
  {
    id: 5,
    name: 'ESSENTIAL CREW NECK',
    category: 'T-Shirts',
    price: 599.99,
    image: '/crew-neck.jpg',
    isNew: true
  },
  {
    id: 6,
    name: 'WIDE-LEG TROUSERS',
    category: 'Bottoms',
    price: 899.99,
    image: '/joggers.jpg',
    isNew: true
  },
  {
    id: 7,
    name: 'MEMORY CAP',
    category: 'Accessories',
    price: 449.99,
    image: '/cap.jpg',
    isNew: false
  },
  {
    id: 8,
    name: 'RAW-EDGE HOODIE',
    category: 'Hoodies',
    price: 1299.99,
    image: '/oversized-hoodie.jpg',
    isNew: true
  }
]

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section - Margiela Style */}
      <section className="relative bg-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-gray-500 text-sm tracking-widest uppercase">XCLUSIVE STEEZ</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight">
            DECONSTRUCTED
            <br />
            <span className="text-gray-400">LUXURY</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Redefining streetwear through deconstruction and reconstruction. 
            Where raw edges meet refined craftsmanship.
          </p>
          
          <div className="space-x-4">
            <button className="bg-black text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors uppercase">
              Explore Collection
            </button>
            <button className="border border-black px-8 py-4 text-sm tracking-wider hover:bg-black hover:text-white transition-colors uppercase">
              Lookbook
            </button>
          </div>
        </div>
      </section>

      {/* Minimalist Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-wide">FEATURED COLLECTION</h2>
            <div className="w-20 h-px bg-gray-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-[3/4] bg-gray-50 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm uppercase tracking-wider">Product View</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-sm font-normal text-gray-900 mb-1 uppercase tracking-wide">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{product.category}</p>
                  <p className="text-gray-900 font-light">R {product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop App Section - Minimalist Version */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Shop App Info */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
                MOBILE EXPERIENCE
              </h2>
              <p className="text-gray-600 mb-8 text-sm uppercase tracking-wider">
                Available on iOS & Android
              </p>
              
              <div className="bg-white p-8 border border-gray-200">
                <h3 className="text-lg font-normal text-gray-900 mb-4 tracking-wide">
                  SIGN IN WITH SHOP
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  The easiest and most secure way to sign in—no password needed.
                </p>
                
                <div className="space-y-3">
                  <button className="w-full bg-black text-white py-3 px-4 text-sm tracking-wider hover:bg-gray-800 transition-colors uppercase font-normal">
                    Continue with Email
                  </button>
                  
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400 text-xs">or</span>
                  </div>
                  
                  <button className="w-full border border-gray-300 text-gray-900 py-3 px-4 text-sm tracking-wider hover:bg-gray-50 transition-colors uppercase font-normal">
                    Continue with Shop
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Premium Basics */}
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                PREMIUM BASICS
              </h3>
              <p className="text-gray-600 mb-8 text-sm uppercase tracking-wider">
                Essential pieces to build upon
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {premiumBasics.map((product) => (
                  <div key={product.id} className="group">
                    <div className="aspect-square bg-gray-100 mb-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-gray-400 text-xs uppercase">View</span>
                      </div>
                    </div>
                    <h4 className="font-normal text-gray-900 text-sm uppercase tracking-wide mb-1">{product.name}</h4>
                    <p className="text-gray-900 font-light text-sm">R {product.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story - Minimalist */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wide">THE XCLUSIVE PHILOSOPHY</h2>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-sm">
            Xclusive Steez represents the intersection of streetwear sensibility and avant-garde design. 
            Each collection is a study in deconstruction—taking familiar forms and reimagining them 
            through a lens of exclusive craftsmanship and limited availability.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}