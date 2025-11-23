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

      {/* Hero Section - Enhanced with Background Image */}
      <section className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/products/Nike-Shox-R4-Metallic-Silver-&-Black-R1800.JPG')",
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />
        
        {/* Gradient Overlays for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Brand Tag */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-xs tracking-[0.3em] uppercase font-semibold">
              Xclusive Steez
            </span>
          </div>
          
          {/* Main Heading with Dramatic Effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
            <span className="block text-white drop-shadow-2xl animate-slide-up">
              DECONSTRUCTED
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300 drop-shadow-2xl animate-slide-up-delay">
              LUXURY
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-delay">
            Redefining streetwear through deconstruction and reconstruction. 
            <span className="block mt-2 text-white/90">Where raw edges meet refined craftsmanship.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <a 
              href="/sneakers"
              className="group relative px-10 py-4 bg-white text-black text-sm tracking-wider font-bold uppercase overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a 
              href="/new-arrivals"
              className="group relative px-10 py-4 border-2 border-white text-white text-sm tracking-wider font-bold uppercase overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative z-10">Lookbook</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s backwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s backwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s backwards;
        }
      `}</style>

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