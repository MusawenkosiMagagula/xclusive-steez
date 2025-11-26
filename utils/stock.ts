import { getAvailableSizes } from './sizeUtils'

// Manual stock overrides for specific product ids (example values)
const STOCK_OVERRIDES: Record<number, Record<string, number>> = {
  1: { 'US 8': 2, 'US 9': 5, 'US 10': 3 },
  18: { 'US 8': 0, 'US 9': 1, 'US 10': 0 },
  21: { 'US 9': 4, 'US 10': 2 },
  24: { 'US 8': 1, 'US 9': 0, 'US 11': 2 }
}

export function getStockForProduct(productId: number) {
  const sizes = getAvailableSizes()
  const override = STOCK_OVERRIDES[productId] || {}
  const map: Record<string, number> = {}
  for (const s of sizes) {
    map[s] = override[s] ?? 5 // default stock 5 for all sizes unless overridden
  }
  return map
}
