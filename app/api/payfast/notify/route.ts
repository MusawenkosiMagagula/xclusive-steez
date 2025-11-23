import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data: { [key: string]: string } = {}
    
    // Convert FormData to object
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    // Verify PayFast signature (implement signature verification for production)
    const merchantId = '10000100' // Your PayFast Merchant ID
    const merchantKey = '46f0cd694581a' // Your PayFast Merchant Key

    // Log the payment notification for debugging
    console.log('PayFast Notification Received:', data)

    // Verify payment status
    if (data.payment_status === 'COMPLETE') {
      // Payment successful
      console.log(`Payment successful for order ${data.m_payment_id}`)
      
      // Here you would typically:
      // 1. Update order status in database
      // 2. Send confirmation email
      // 3. Send WhatsApp notification
      // 4. Update inventory
      
      // For now, we'll just log the success
      console.log('Order processed successfully:', {
        paymentId: data.m_payment_id,
        amount: data.amount_gross,
        customer: data.name_first + ' ' + data.name_last,
        items: data.custom_str1 ? JSON.parse(data.custom_str1) : []
      })
      
      return NextResponse.json({ status: 'OK' }, { status: 200 })
    } else {
      // Payment failed or pending
      console.log(`Payment ${data.payment_status} for order ${data.m_payment_id}`)
      return NextResponse.json({ status: 'PENDING' }, { status: 200 })
    }
    
  } catch (error) {
    console.error('PayFast notification error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'PayFast webhook endpoint' }, { status: 200 })
}