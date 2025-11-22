import Link from 'next/link'

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
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square w-full overflow-hidden rounded-t-lg bg-gray-200">
        <div className="h-full w-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          <span className="text-gray-600 text-sm">Product Image</span>
        </div>
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
      </div>
    </div>
  )
}