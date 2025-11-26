import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import ProductDetailClient from '../ProductDetailClient'
import { getProductById, allSneakers } from '../../../utils/productData'
import { getRelatedProducts } from '../../../utils/recommendations'

interface Props {
  params: { id: string }
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams: any = await params
  const id = parseInt(resolvedParams.id, 10)
  const product = getProductById(id)

  // Prepare recommendation lists
  const relatedProducts = product ? getRelatedProducts(product, allSneakers, 6) : []
  // keep popular picks based on price in same category
  const popularPicks = allSneakers
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .sort((a, b) => b.price - a.price)
    .slice(0, 4)
  // you might also like: picks from other brands for variety
  const youMightAlsoLike = allSneakers.filter((p) => p.id !== product?.id && p.brand !== product?.brand).slice(0, 4)

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="mt-4 text-gray-600">We couldn't find the product you're looking for.</p>
      </div>
    )
  }

  // Pass product object and recommendations to the client component for interactions
  return (
    <>
      <Header />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} popularPicks={popularPicks} youMightAlsoLike={youMightAlsoLike} />
      <Footer />
    </>
  )
}
