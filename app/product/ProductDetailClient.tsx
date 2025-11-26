"use client"
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import type { Product } from '../../utils/productData'

interface Props {
  product: Product
}

export default function ProductDetailClient({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState('US 9')
  const [quantity, setQuantity] = useState<number>(1)
  const { addItem, openCart } = useCart()

  const sizes = ['US 6','US 7','US 8','US 9','US 10','US 11','US 12']

  const handleAdd = () => {
    addItem({ ...product, selectedSize, quantity })
    openCart()
  }

  const description = `The ${product.name} by ${product.brand} offers a premium blend of comfort and style — suitable for everyday wear and statement looks. Available in multiple sizes; choose the best fit for you.`

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
    </div>
  )
}
