'use client'
import { useState } from 'react'

interface PaymentMethod {
  id: string
  name: string
  description: string
  processing_time: string
  fee: string
}

interface PaymentOptionsProps {
  total: number
  onPaymentSelect: (method: string, details?: any) => void
  onClose: () => void
}

export default function PaymentOptions({ total, onPaymentSelect, onClose }: PaymentOptionsProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('')
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  })

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'payfast',
      name: 'PayFast',
      description: 'Secure online payment with credit/debit cards',
      processing_time: 'Instant',
      fee: 'R5.75 + 3.4%'
    },
    {
      id: 'eft',
      name: 'Bank Transfer (EFT)',
      description: 'Direct bank transfer',
      processing_time: '1-2 business days',
      fee: 'Free'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      description: 'Pay when you receive your order',
      processing_time: 'Pay on delivery',
      fee: 'R50 handling fee'
    }
  ]

  const calculateTotal = (methodId: string) => {
    let fee = 0
    if (methodId === 'payfast') {
      fee = 5.75 + (total * 0.034)
    } else if (methodId === 'cod') {
      fee = 50
    }
    return total + fee
  }

  const handlePaymentSubmit = () => {
    if (!selectedMethod || !customerDetails.name || !customerDetails.phone) {
      alert('Please fill in all required fields')
      return
    }

    onPaymentSelect(selectedMethod, {
      customer: customerDetails,
      total: calculateTotal(selectedMethod),
      originalTotal: total
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Complete Your Order</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mt-2">Order Total: R{total.toFixed(2)}</p>
        </div>

        <div className="p-6">
          {/* Customer Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerDetails.name}
                  onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={customerDetails.email}
                  onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={customerDetails.city}
                  onChange={(e) => setCustomerDetails({...customerDetails, city: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={customerDetails.address}
                  onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div key={method.id} className="relative">
                  <input
                    type="radio"
                    id={method.id}
                    name="paymentMethod"
                    value={method.id}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="sr-only"
                  />
                  <label
                    htmlFor={method.id}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedMethod === method.id
                        ? 'border-green-500 bg-green-50 ring-2 ring-green-500'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div>
                          <div className="font-medium text-gray-900">{method.name}</div>
                          <div className="text-sm text-gray-500">{method.description}</div>
                          <div className="text-xs text-gray-400 mt-1">
                            Processing: {method.processing_time} • Fee: {method.fee}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">
                        R{calculateTotal(method.id).toFixed(2)}
                      </div>
                      {method.id === 'payfast' && (
                        <div className="text-xs text-gray-500">
                          (incl. payment fee)
                        </div>
                      )}
                      {method.id === 'cod' && (
                        <div className="text-xs text-gray-500">
                          (incl. R50 handling)
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Payment Method Details */}
          {selectedMethod === 'eft' && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Bank Transfer Details</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>Bank:</strong> Standard Bank</p>
                <p><strong>Account Holder:</strong> Xclusive Steez</p>
                <p><strong>Account Number:</strong> 1234567890</p>
                <p><strong>Branch Code:</strong> 051001</p>
                <p><strong>Reference:</strong> Use your phone number</p>
              </div>
              <p className="text-xs text-blue-600 mt-2">
                Please send proof of payment to our WhatsApp after transfer
              </p>
            </div>
          )}

          {selectedMethod === 'cod' && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Cash on Delivery</h4>
              <div className="text-sm text-yellow-800 space-y-1">
                <p>• Pay cash when you receive your order</p>
                <p>• R50 handling fee applies</p>
                <p>• Available in major cities</p>
                <p>• Delivery within 2-5 business days</p>
              </div>
            </div>
          )}

          {selectedMethod === 'payfast' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Secure Online Payment</h4>
              <div className="text-sm text-green-800 space-y-1">
                <p>• Instant payment processing</p>
                <p>• Secure 256-bit SSL encryption</p>
                <p>• Accepts Visa, Mastercard, American Express</p>
                <p>• EFT and instant EFT options</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handlePaymentSubmit}
            disabled={!selectedMethod || !customerDetails.name || !customerDetails.phone}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {selectedMethod === 'payfast' && 'Proceed to PayFast'}
            {selectedMethod === 'eft' && 'Submit Order (EFT)'}
            {selectedMethod === 'cod' && 'Place Order (COD)'}
            {!selectedMethod && 'Select Payment Method'}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            By placing this order, you agree to our terms and conditions
          </p>
        </div>
      </div>
    </div>
  )
}