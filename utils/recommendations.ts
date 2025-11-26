import type { Product } from './productData'

function tokenize(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

const STOPWORDS = new Set(['the','and','with','in','of','&','by','for','new'])

export function getRelatedProducts(target: Product, allProducts: Product[], count = 4): Product[] {
  if (!target) return []

  const targetTokens = tokenize(target.name).filter(t => !STOPWORDS.has(t))

  // Score products by number of shared tokens in name
  const scored = allProducts
    .filter(p => p.id !== target.id)
    .map(p => {
      const tokens = tokenize(p.name).filter(t => !STOPWORDS.has(t))
      const shared = tokens.filter(t => targetTokens.includes(t))
      // boost if same brand
      const brandBoost = p.brand === target.brand ? 1 : 0
      return { product: p, score: shared.length + brandBoost }
    })

  // sort by score desc, then price proximity (optional), then fallback
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    // tie-breaker: prefer same category
    if (a.product.category === target.category && b.product.category !== target.category) return -1
    if (b.product.category === target.category && a.product.category !== target.category) return 1
    return a.product.id - b.product.id
  })

  const topByName = scored.filter(s => s.score > 0).map(s => s.product)

  const results: Product[] = []

  // take up to count from best name matches
  for (const p of topByName) {
    if (results.length >= count) break
    results.push(p)
  }

  // If not enough, add same-brand products
  if (results.length < count) {
    for (const p of allProducts) {
      if (results.length >= count) break
      if (p.id === target.id) continue
      if (p.brand === target.brand && !results.find(r => r.id === p.id)) results.push(p)
    }
  }

  // If still not enough, add same-category products
  if (results.length < count) {
    for (const p of allProducts) {
      if (results.length >= count) break
      if (p.id === target.id) continue
      if (p.category === target.category && !results.find(r => r.id === p.id)) results.push(p)
    }
  }

  // Final fill: random other products to provide variety
  if (results.length < count) {
    for (const p of allProducts) {
      if (results.length >= count) break
      if (p.id === target.id) continue
      if (!results.find(r => r.id === p.id)) results.push(p)
    }
  }

  return results.slice(0, count)
}
