type SizeMap = { eu: string; uk: string; sa: string }

const sizeLookup: Record<string, SizeMap> = {
  'US 6': { eu: '38', uk: '5', sa: '6' },
  'US 7': { eu: '40', uk: '6', sa: '7' },
  'US 8': { eu: '41', uk: '7', sa: '8' },
  'US 9': { eu: '42', uk: '8', sa: '9' },
  'US 10': { eu: '43', uk: '9', sa: '10' },
  'US 11': { eu: '44', uk: '10', sa: '11' },
  'US 12': { eu: '45', uk: '11', sa: '12' }
}

export function convertSize(usSize: string): SizeMap {
  return sizeLookup[usSize] || { eu: '-', uk: '-', sa: '-' }
}

export function getAvailableSizes() {
  return Object.keys(sizeLookup)
}
