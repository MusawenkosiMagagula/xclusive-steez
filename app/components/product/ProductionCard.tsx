import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../../contexts/CartContext'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  isNew: boolean
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCart()
  
  const handleAddToCart = () => {
    addItem(product)
    openCart()
  }
  
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square w-full overflow-hidden rounded-t-lg bg-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `
              <div class="h-full w-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span class="text-gray-600 text-sm">Product Image</span>
              </div>
            `;
          }}
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">R {product.price.toFixed(2)}</p>
          {product.isNew && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              New
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full bg-black text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}