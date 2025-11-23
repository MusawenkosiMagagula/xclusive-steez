'use client'
import { useEffect } from 'react'

interface PayFastPaymentProps {
  orderDetails: {
    customer: any
    total: number
    originalTotal: number
    items: any[]
  }
  onSuccess: () => void
  onCancel: () => void
}

export default function PayFastPayment({ orderDetails, onSuccess, onCancel }: PayFastPaymentProps) {
  
  const generatePayFastData = () => {
    // PayFast sandbox credentials - replace with live credentials for production
    const merchantId = '10000100' // Your PayFast Merchant ID
    const merchantKey = '46f0cd694581a' // Your PayFast Merchant Key
    const passphrase = 'jt7NOE43FZPn' // Your PayFast Passphrase (if set)
    
    // Generate unique payment reference
    const paymentId = `XS${Date.now()}`
    
    const data = {
      // Merchant Details
      merchant_id: merchantId,
      merchant_key: merchantKey,
      
      // Transaction Details
      amount: orderDetails.total.toFixed(2),
      item_name: `Xclusive Steez Order #${paymentId}`,
      item_description: `Order for ${orderDetails.items.length} items`,
      
      // Customer Details
      name_first: orderDetails.customer.name.split(' ')[0] || '',
      name_last: orderDetails.customer.name.split(' ').slice(1).join(' ') || '',
      email_address: orderDetails.customer.email || 'customer@xclusivesteez.com',
      cell_number: orderDetails.customer.phone || '',
      
      // Transaction Details
      m_payment_id: paymentId,
      
      // URLs
      return_url: `${window.location.origin}/payment/success`,
      cancel_url: `${window.location.origin}/payment/cancel`,
      notify_url: `${window.location.origin}/api/payfast/notify`,
      
      // Custom fields
      custom_str1: JSON.stringify(orderDetails.items),
      custom_str2: orderDetails.customer.address || '',
      custom_str3: orderDetails.customer.city || '',
    }
    
    return data
  }

  const submitPayFastPayment = () => {
    const paymentData = generatePayFastData()
    
    // Create form and submit to PayFast
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://sandbox.payfast.co.za/eng/process' // Use https://www.payfast.co.za/eng/process for live
    
    Object.entries(paymentData).forEach(([key, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value as string
      form.appendChild(input)
    })
    
    document.body.appendChild(form)
    form.submit()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PayFast Payment</h2>
          <p className="text-gray-600 mb-6">
            You will be redirected to PayFast to complete your payment of R{orderDetails.total.toFixed(2)}
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Payment Summary</h3>
            <div className="text-sm text-blue-800 space-y-1">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R{orderDetails.originalTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>PayFast Fee:</span>
                <span>R{(orderDetails.total - orderDetails.originalTotal).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-1">
                <span>Total:</span>
                <span>R{orderDetails.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={submitPayFastPayment}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue to PayFast
            </button>
            
            <button
              onClick={onCancel}
              className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel Payment
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Secure payment processing by PayFast. Your payment information is encrypted and secure.
          </p>
        </div>
      </div>
    </div>
  )
}