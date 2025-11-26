import ProductDetailClient from '../../ProductDetailClient'
import { getProductById } from '../../../utils/productData'

interface Props {
  params: { id: string }
}

export default function ProductPage({ params }: Props) {
  const id = parseInt(params.id, 10)
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="mt-4 text-gray-600">We couldn't find the product you're looking for.</p>
      </div>
    )
  }

  // Pass product object to client component for interactions (size selection, add-to-cart)
  return <ProductDetailClient product={product} />
}
