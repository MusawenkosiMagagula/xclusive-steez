export interface PhoneProduct {
  id: number
  name: string
  category: string
  price: number
  image: string
  isNew: boolean
  storage?: string
  color?: string
  condition?: 'Brand New' | 'Refurbished' | 'Used'
  warrantyMonths?: number
  unlocked?: boolean
}

export const iPhoneProducts: PhoneProduct[] = [
  { id: 101, name: 'iPhone 17 Pro Max', category: 'iPhone 17 Series', price: 31000.0, image: '/products/iPhone-17-Pro-Max-256GB-R31000.jpeg', isNew: true, storage: '256GB', color: 'Graphite', condition: 'Brand New', warrantyMonths: 12, unlocked: true },
  { id: 102, name: 'iPhone 17 Pro', category: 'iPhone 17 Series', price: 30500.0, image: '/products/iPhone-17-Pro-512GB-R30500.jpeg', isNew: true, storage: '512GB', color: 'Silver', condition: 'Brand New', warrantyMonths: 12, unlocked: true },
  { id: 103, name: 'iPhone 16 Pro Max', category: 'iPhone 16 Series', price: 25000.0, image: '/products/iPhone-16-Pro-Max-256GB-R25000.JPG', isNew: true, storage: '256GB', color: 'Space Black', condition: 'Brand New', warrantyMonths: 12, unlocked: true },
  { id: 104, name: 'iPhone 16 Pro', category: 'iPhone 16 Series', price: 24000.0, image: '/products/iPhone-16-Pro-256GB-R24000.PNG', isNew: true, storage: '256GB', color: 'Blue', condition: 'Brand New', warrantyMonths: 12, unlocked: true },
  { id: 105, name: 'iPhone 16', category: 'iPhone 16 Series', price: 17000.0, image: '/products/iPhone-16-128GB-R17000.JPG', isNew: true, storage: '128GB', color: 'Midnight', condition: 'Brand New', warrantyMonths: 12, unlocked: true },
  { id: 106, name: 'iPhone 15 Pro Max', category: 'iPhone 15 Series', price: 20000.0, image: '/products/iPhone-15-Pro-Max-256GB-R20000.JPG', isNew: false, storage: '256GB', color: 'Gold', condition: 'Refurbished', warrantyMonths: 6, unlocked: true },
  { id: 107, name: 'iPhone 15 Pro', category: 'iPhone 15 Series', price: 17500.0, image: '/products/iPhone-15-Pro-256GB-R17500.JPG', isNew: false, storage: '256GB', color: 'Silver', condition: 'Refurbished', warrantyMonths: 6, unlocked: true },
  { id: 108, name: 'iPhone 15', category: 'iPhone 15 Series', price: 15500.0, image: '/products/iPhone-15-128GB-R15500.webp', isNew: false, storage: '128GB', color: 'Black', condition: 'Refurbished', warrantyMonths: 6, unlocked: true },
  { id: 109, name: 'iPhone 14 Pro Max', category: 'iPhone 14 Series', price: 17500.0, image: '/products/iPhone14-Pro-Max-256GB-R17500.JPG', isNew: false, storage: '256GB', color: 'Silver', condition: 'Used', warrantyMonths: 3, unlocked: true },
  { id: 110, name: 'iPhone 13 Pro Max', category: 'iPhone 13 Series', price: 14500.0, image: '/products/iPhone-13-Pro-Max-128GB-R14500-(256GB-R15500.WEBP.JPG', isNew: false, storage: '128GB', color: 'Space Gray', condition: 'Used', warrantyMonths: 3, unlocked: true },
  { id: 111, name: 'iPhone 13 Pro', category: 'iPhone 13 Series', price: 12500.0, image: '/products/iPhone-13 Pro-128GB-R12500.WEBP', isNew: false, storage: '128GB', color: 'Silver', condition: 'Used', warrantyMonths: 3, unlocked: true },
  { id: 112, name: 'iPhone 13', category: 'iPhone 13 Series', price: 10000.0, image: '/products/iPhone-13-128GB-R10000.JPG', isNew: false, storage: '128GB', color: 'Black', condition: 'Used', warrantyMonths: 3, unlocked: true }
]

export function getPhoneById(id: number) {
  return iPhoneProducts.find(p => p.id === id)
}
