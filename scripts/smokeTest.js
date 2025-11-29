const fetch = global.fetch || require('node-fetch')
const urls = [
  process.env.BASE_URL || 'http://localhost:3000',
  (process.env.BASE_URL || 'http://localhost:3000') + '/product/1',
  (process.env.BASE_URL || 'http://localhost:3000') + '/product/4',
  (process.env.BASE_URL || 'http://localhost:3000') + '/product/21',
  (process.env.BASE_URL || 'http://localhost:3000') + '/iphones',
  (process.env.BASE_URL || 'http://localhost:3000') + '/product/1000'
]

;(async () => {
  for (const u of urls) {
    try {
      const res = await fetch(u)
      console.log(`${u} -> ${res.status} ${res.statusText}`)
      const text = await res.text()
      const titleMatch = text.match(/<title>(.*?)<\/title>/i)
      if (titleMatch) console.log('  title:', titleMatch[1])
    } catch (err) {
      console.error(`${u} -> ERROR:`, err.message || err)
    }
  }
})()
