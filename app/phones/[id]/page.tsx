import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { getPhoneById } from '../../../utils/phoneData'
import { allSneakers } from '../../../utils/productData'
import { redirect } from 'next/navigation'

interface Props {
  params: { id: string }
}

export default async function PhonePage({ params }: Props) {
  const resolved = await params
  const id = parseInt(resolved.id, 10)
  const legacy = getPhoneById(id)
  if (!legacy) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="mt-4 text-gray-600">We couldn't find the phone you're looking for.</p>
      </div>
    )
  }

  // Try to find the merged product in the canonical product list by name
  const match = allSneakers.find(p => p.name.toLowerCase().includes(legacy.name.toLowerCase().split(' - ')[0]))
  if (match) {
    // redirect to canonical product route
    redirect(`/product/${match.id}`)
  }

  // fallback: render legacy info if we can't find merged product
  const product = legacy

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow overflow-hidden flex items-center justify-center p-6">
          <img src={product.image} alt={product.name} className="max-w-full max-h-[480px] object-contain" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-700 font-semibold mb-4">R {product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-gray-600 mb-2">Storage: {product.storage}</p>
          <p className="text-gray-600 mb-2">Color: {product.color}</p>
          <p className="text-gray-600 mb-2">Condition: {product.condition}</p>
          <p className="text-gray-600 mb-4">Warranty: {product.warrantyMonths} months • {product.unlocked ? 'Unlocked' : 'Locked'}</p>

          <div className="prose mb-6 text-gray-700">
            <p>This is a {product.condition?.toLowerCase() || 'device'} with {product.storage} storage in {product.color}. All devices are tested and come with the stated warranty. Use the Add to Cart button to purchase or contact us on WhatsApp for bulk / EFT orders.</p>
          </div>

          <div className="flex gap-3">
            <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold">Add to Cart</button>
            <a href={`https://wa.me/27820000000?text=Interested%20in%20${encodeURIComponent(product.name)}`} className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">Contact on WhatsApp</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
