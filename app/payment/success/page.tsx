import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Link from 'next/link'

export default function PaymentSuccess() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Payment Successful!</h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your order. Your payment has been processed successfully.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What's Next?</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Order confirmation sent to your email
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                We'll contact you on WhatsApp with tracking details
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Delivery within 2-5 business days
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-3">
            <Link href="/" className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center">
              Continue Shopping
            </Link>
            
            <a 
              href="https://wa.me/27725789343" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
            >
              Contact Us on WhatsApp
            </a>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              Need help? Contact us at +27 72 578 9343 or info@xclusivesteez.com
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}