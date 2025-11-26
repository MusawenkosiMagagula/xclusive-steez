import type { Product } from './productData'

export function getDescription(product: Product): string {
  const base = `${product.name} by ${product.brand}`
  switch (product.brand) {
    case 'Nike':
      return `${base} — engineered with responsive cushioning and everyday comfort. Perfect for streetwear and light activity; features reliable traction and modern styling.`
    case 'Air Jordan':
      return `${base} — a heritage basketball silhouette blending iconic design with contemporary materials. Great for collectors and on-court style.`
    case 'Adidas':
      return `${base} — classic adidas comfort with modern updates. Soft midsoles and premium uppers deliver a comfortable, stylish fit.`
    case 'New Balance':
      return `${base} — comfort-first design with retro styling and supportive midsoles. Ideal for long wear and casual looks.`
    case 'Lacoste':
      return `${base} — refined casual design with premium materials for a smart-casual look.`
    case 'Puma':
      return `${base} — street-ready style with lightweight construction and bold colors.`
    default:
      return `${base} — premium build and comfort-focused design.`
  }
}
