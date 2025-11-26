export interface PhoneProduct {
  id: number
  name: string
  category: string
  price: number
  image: string
  isNew: boolean
}

export const iPhoneProducts: PhoneProduct[] = [
  { id: 101, name: 'iPHONE 17 PRO MAX - 256GB', category: 'iPhone 17 Series', price: 31000.0, image: '/products/iPhone-17-Pro-Max-256GB-R31000.jpeg', isNew: true },
  { id: 102, name: 'iPHONE 17 PRO - 512GB', category: 'iPhone 17 Series', price: 30500.0, image: '/products/iPhone-17-Pro-512GB-R30500.jpeg', isNew: true },
  { id: 103, name: 'iPHONE 16 PRO MAX - 256GB', category: 'iPhone 16 Series', price: 25000.0, image: '/products/iPhone-16-Pro-Max-256GB-R25000.JPG', isNew: true },
  { id: 104, name: 'iPHONE 16 PRO - 256GB', category: 'iPhone 16 Series', price: 24000.0, image: '/products/iPhone-16-Pro-256GB-R24000.PNG', isNew: true },
  { id: 105, name: 'iPHONE 16 - 128GB', category: 'iPhone 16 Series', price: 17000.0, image: '/products/iPhone-16-128GB-R17000.JPG', isNew: true },
  { id: 106, name: 'iPHONE 15 PRO MAX - 256GB', category: 'iPhone 15 Series', price: 20000.0, image: '/products/iPhone-15-Pro-Max-256GB-R20000.JPG', isNew: false },
  { id: 107, name: 'iPHONE 15 PRO - 256GB', category: 'iPhone 15 Series', price: 17500.0, image: '/products/iPhone-15 Pro-256BG-R17500.JPG', isNew: false },
  { id: 108, name: 'iPHONE 15 - 128GB', category: 'iPhone 15 Series', price: 15500.0, image: '/products/iPhone-15-128GB-R15500.webp', isNew: false },
  { id: 109, name: 'iPHONE 14 PRO MAX - 256GB', category: 'iPhone 14 Series', price: 17500.0, image: '/products/iPhone14-Pro-Max-256GB-R17500.JPG', isNew: false },
  { id: 110, name: 'iPHONE 13 PRO MAX - 128GB', category: 'iPhone 13 Series', price: 14500.0, image: '/products/iPhone-13-Pro-Max-128GB-R14500-(256GB-R15500.WEBP.JPG', isNew: false },
  { id: 111, name: 'iPHONE 13 PRO - 128GB', category: 'iPhone 13 Series', price: 12500.0, image: '/products/iPhone-13 Pro-128GB-R12500.WEBP', isNew: false },
  { id: 112, name: 'iPHONE 13 - 128GB', category: 'iPhone 13 Series', price: 10000.0, image: '/products/iPhone-13-128GB-R10000.JPG', isNew: false }
]

export function getPhoneById(id: number) {
  return iPhoneProducts.find(p => p.id === id)
}
