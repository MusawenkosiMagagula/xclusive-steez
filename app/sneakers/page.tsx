'use client'
import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductCard from '../components/product/ProductionCard'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { allSneakers, getAllBrands, getSneakersByBrand } from '../../utils/productData'

export default function SneakersPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>('All')
  const brands = ['All', ...getAllBrands()]
  
  const filteredSneakers = selectedBrand === 'All' 
    ? allSneakers 
    : getSneakersByBrand(selectedBrand)
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
            <div className="flex items-center space-x-2 overflow-x-auto">
              <span className="text-sm font-medium text-gray-700">Brand:</span>
              <div className="flex space-x-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-4 py-2 border rounded-lg text-sm transition-colors whitespace-nowrap ${
                      selectedBrand === brand
                        ? 'bg-black text-white border-black'
                        : 'bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Showing {filteredSneakers.length} products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSneakers.map((product) => (
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