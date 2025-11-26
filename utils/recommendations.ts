import type { Product } from './productData'

function tokenize(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

// expanded stopwords to avoid common tokens
const STOPWORDS = new Set([
  'the','and','with','in','of','&','by','for','new','black','white','red','blue','grey','gray','pink','green','metallic','silver','gold'
])

type MatchResult = { product: Product; matches: string[] }

export function getRelatedProducts(target: Product, allProducts: Product[], count = 4): MatchResult[] {
  if (!target) return []

  const targetTokens = tokenize(target.name).filter(t => !STOPWORDS.has(t))

  // build token frequency map across all products to weight rarer tokens higher
  const freq: Record<string, number> = {}
  for (const p of allProducts) {
    const tokens = Array.from(new Set(tokenize(p.name)))
    for (const t of tokens) {
      if (STOPWORDS.has(t)) continue
      freq[t] = (freq[t] || 0) + 1
    }
  }

  // Score products by weighted shared tokens (rarer tokens get higher weight)
  const scored = allProducts
    .filter(p => p.id !== target.id)
    .map(p => {
      const tokens = tokenize(p.name).filter(t => !STOPWORDS.has(t))
      const shared = tokens.filter(t => targetTokens.includes(t))
      // weight each shared token by inverse frequency
      const tokenWeight = shared.reduce((sum, tok) => sum + (1 / (freq[tok] || 1)), 0)
      // boost if same brand
      const brandBoost = p.brand === target.brand ? 1 : 0
      // small category boost
      const categoryBoost = p.category === target.category ? 0.3 : 0
      return { product: p, score: tokenWeight + brandBoost + categoryBoost, matches: Array.from(new Set(shared)) }
    })

  // sort by score desc
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    return a.product.id - b.product.id
  })

  const results: MatchResult[] = []

  // push best matches first (score > 0)
  for (const s of scored) {
    if (results.length >= count) break
    if (s.score > 0) results.push({ product: s.product, matches: s.matches })
  }

  // If not enough, add same-brand products (no matches)
  if (results.length < count) {
    for (const p of allProducts) {
      if (results.length >= count) break
      if (p.id === target.id) continue
      if (p.brand === target.brand && !results.find(r => r.product.id === p.id)) results.push({ product: p, matches: [] })
    }
  }

  // If still not enough, add same-category products
  if (results.length < count) {
    for (const p of allProducts) {
      if (results.length >= count) break
      if (p.id === target.id) continue
      if (p.category === target.category && !results.find(r => r.product.id === p.id)) results.push({ product: p, matches: [] })
    }
  }

  // Final fill: add other products
  if (results.length < count) {
    for (const p of allProducts) {
      if (results.length >= count) break
      if (p.id === target.id) continue
      if (!results.find(r => r.product.id === p.id)) results.push({ product: p, matches: [] })
    }
  }

  return results.slice(0, count)
}
