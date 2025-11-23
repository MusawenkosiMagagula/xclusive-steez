import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ProductCard from './components/product/ProductionCard'
import WhatsAppButton from './components/ui/WhatsAppButton'
import { getFeaturedProducts, allSneakers } from '../utils/productData'

export default function Home() {
  const featuredProducts = getFeaturedProducts(8)
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
              <ProductCard key={product.id} product={product} />
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
                ALL SNEAKERS
              </h3>
              <p className="text-gray-600 mb-8 text-sm uppercase tracking-wider">
                Complete collection
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {allSneakers.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
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