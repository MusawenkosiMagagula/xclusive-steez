"use client"
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import type { Product } from '../../utils/productData'
import ProductCard from '../components/product/ProductionCard'
import { convertSize, getAvailableSizes } from '../../utils/sizeUtils'
import { getDescription } from '../../utils/productDescriptions'

interface Props {
  product: Product
  relatedProducts?: Product[]
  popularPicks?: Product[]
  youMightAlsoLike?: Product[]
}

export default function ProductDetailClient({ product, relatedProducts = [], popularPicks = [], youMightAlsoLike = [] }: Props) {
  const [selectedSize, setSelectedSize] = useState('US 9')
  const [quantity, setQuantity] = useState<number>(1)
  const { addItem, openCart } = useCart()

  const sizes = getAvailableSizes()

  const handleAdd = () => {
    // attach selectedSize and quantity to the cart item
    addItem({ ...product, selectedSize, quantity } as any)
    openCart()
  }

  const description = getDescription(product)

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg bg-white p-4">
          <Image src={product.image} alt={product.name} width={700} height={700} className="w-full h-auto object-cover rounded" />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">R {product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{description}</p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Select Size</label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-3 py-2 border rounded ${selectedSize === s ? 'bg-black text-white' : 'bg-white'} text-sm`}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">Selected: {selectedSize}</p>
            <p className="mt-1 text-sm text-gray-500">Conversion: EU {convertSize(selectedSize).eu} • UK {convertSize(selectedSize).uk} • SA {convertSize(selectedSize).sa}</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <label className="text-sm font-medium">Quantity</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value || '1'))}
              className="w-20 px-2 py-1 border rounded"
            />
          </div>

          <div className="flex gap-3">
            <button onClick={handleAdd} className="bg-black text-white px-6 py-3 rounded">
              Add to Cart
            </button>
            <a href="/checkout" className="px-6 py-3 border rounded">
              Buy Now
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <strong>Product details:</strong>
            <ul className="list-disc ml-5 mt-2">
              <li>Brand: {product.brand}</li>
              <li>Category: {product.category}</li>
              <li>SKU: {product.id}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Expanded Product Information */}
      <section className="mt-10 bg-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Product Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p><strong>Upper:</strong> Mixed materials (textile & synthetic)</p>
            <p><strong>Sole:</strong> Durable rubber outsole for traction</p>
            <p><strong>Fit:</strong> True to size — we recommend selecting your usual US size</p>
          </div>
          <div>
            <p><strong>Care:</strong> Wipe clean with a damp cloth; avoid machine washing.</p>
            <p><strong>Shipping:</strong> Dispatched within 1-2 business days. Returns accepted within 7 days.</p>
            <p><strong>Warranty:</strong> 30-day limited warranty on manufacturing defects.</p>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mt-10">
        {relatedProducts.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Related Products</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {popularPicks.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Popular Picks in This Category</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {popularPicks.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {youMightAlsoLike.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">You Might Also Like</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {youMightAlsoLike.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
