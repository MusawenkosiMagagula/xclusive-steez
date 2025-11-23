'use client'
import { useCart } from '../../contexts/CartContext'
import Image from 'next/image'
import { useState } from 'react'
import PaymentOptions from '../payment/PaymentOptions'
import PayFastPayment from '../payment/PayFastPayment'

interface CartItem {
  id: number
  name: string
  category: string
  price: number
  image: string
  quantity: number
}

export default function CartSidebar() {
  const { state, removeItem, updateQuantity, closeCart, getTotalItems, getTotalPrice } = useCart()
  const [showPaymentOptions, setShowPaymentOptions] = useState(false)
  const [showPayFast, setShowPayFast] = useState(false)
  const [orderDetails, setOrderDetails] = useState<any>(null)

  const handleProceedToCheckout = () => {
    if (state.items.length === 0) return
    setShowPaymentOptions(true)
  }

  const handlePaymentSelect = (method: string, details: any) => {
    setOrderDetails({
      ...details,
      items: state.items,
      method
    })

    if (method === 'payfast') {
      setShowPaymentOptions(false)
      setShowPayFast(true)
    } else if (method === 'eft') {
      // Create EFT order message for WhatsApp
      const cartSummary = state.items.map(item => 
        `• ${item.name} - Qty: ${item.quantity} - R${(item.price * item.quantity).toFixed(2)}`
      ).join('\n')
      
      const message = `🏦 EFT ORDER REQUEST\n\nCustomer: ${details.customer.name}\nPhone: ${details.customer.phone}\nEmail: ${details.customer.email}\nAddress: ${details.customer.address}, ${details.customer.city}\n\nORDER DETAILS:\n${cartSummary}\n\nTOTAL: R${details.total.toFixed(2)}\n\nPAYMENT METHOD: Bank Transfer (EFT)\n\nBank Details:\nStandard Bank\nAccount: Xclusive Steez\nAcc No: 1234567890\nBranch: 051001\nReference: ${details.customer.phone}\n\nPlease transfer the amount and send proof of payment.`
      
      const whatsappUrl = `https://wa.me/27725789343?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      
      setShowPaymentOptions(false)
    } else if (method === 'cod') {
      // Create COD order message for WhatsApp
      const cartSummary = state.items.map(item => 
        `• ${item.name} - Qty: ${item.quantity} - R${(item.price * item.quantity).toFixed(2)}`
      ).join('\n')
      
      const message = `💰 CASH ON DELIVERY ORDER\n\nCustomer: ${details.customer.name}\nPhone: ${details.customer.phone}\nEmail: ${details.customer.email}\nAddress: ${details.customer.address}, ${details.customer.city}\n\nORDER DETAILS:\n${cartSummary}\n\nSUBTOTAL: R${details.originalTotal.toFixed(2)}\nCOD Fee: R50.00\nTOTAL: R${details.total.toFixed(2)}\n\nPAYMENT METHOD: Cash on Delivery\n\nPlease confirm availability and delivery schedule.`
      
      const whatsappUrl = `https://wa.me/27725789343?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      
      setShowPaymentOptions(false)
    }
  }

  if (!state.isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Shopping Cart ({getTotalItems()})
          </h2>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-center">Add some exclusive items to get started!</p>
            </div>
          ) : (
            <div className="p-6 space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                            <span class="text-gray-600 text-xs">Image</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-sm font-semibold text-gray-900">R {item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total: R {getTotalPrice().toFixed(2)}</span>
            </div>
            
            <button 
              onClick={handleProceedToCheckout}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Proceed to Checkout
            </button>
            
            <button 
              onClick={closeCart}
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      {/* Payment Options Modal */}
      {showPaymentOptions && (
        <PaymentOptions
          total={getTotalPrice()}
          onPaymentSelect={handlePaymentSelect}
          onClose={() => setShowPaymentOptions(false)}
        />
      )}

      {/* PayFast Payment Modal */}
      {showPayFast && orderDetails && (
        <PayFastPayment
          orderDetails={orderDetails}
          onSuccess={() => {
            setShowPayFast(false)
            closeCart()
            window.location.href = '/payment/success'
          }}
          onCancel={() => {
            setShowPayFast(false)
            setShowPaymentOptions(true)
          }}
        />
      )}
    </>
  )
}