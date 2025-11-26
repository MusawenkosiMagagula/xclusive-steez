import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { getPhoneById } from '../../../utils/phoneData'

interface Props {
  params: { id: string }
}

export default function PhonePage({ params }: Props) {
  const id = parseInt(params.id, 10)
  const product = getPhoneById(id)

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="mt-4 text-gray-600">We couldn't find the phone you're looking for.</p>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-700 font-semibold mb-4">R {product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">Category: {product.category}</p>
          <p className="text-gray-700 mb-6">This is a premium device. Contact us on WhatsApp for purchase details or use the Add to Cart button if available.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
