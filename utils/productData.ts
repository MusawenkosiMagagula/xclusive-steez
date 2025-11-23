// Extract price from filename (e.g., "Nike-Dunk-Low-Black-R1500.JPG" -> 1500)
function extractPrice(filename: string): number {
  const match = filename.match(/R(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

// Extract product name from filename
function formatProductName(filename: string): string {
  // Remove extension and price
  let name = filename.replace(/\.(JPG|WEBP|jpg|webp|PNG|png|jpeg)$/i, '');
  name = name.replace(/-R\d+.*$/, '');
  // Replace dashes and underscores with spaces
  name = name.replace(/[-_]/g, ' ');
  return name.toUpperCase();
}

// Get brand from filename
function getBrand(filename: string): string {
  const brands = ['Nike', 'Air Jordan', 'Adidas', 'New Balance', 'Lacoste', 'Puma'];
  for (const brand of brands) {
    if (filename.toLowerCase().includes(brand.toLowerCase().replace(' ', '-'))) {
      return brand;
    }
  }
  return 'Other';
}

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  isNew: boolean;
}

// All sneaker products extracted from filenames
export const allSneakers: Product[] = [
  // Nike Sneakers
  { id: 1, name: 'NIKE DUNK LOW BLACK & WHITE', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Dunk-Low-Black-&-White-R1500.JPG', isNew: true },
  { id: 2, name: 'NIKE DUNK LOW ACTIVE FUCHSIA', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Dunk-Low-Active-Fuchisa-R1500.JPG', isNew: false },
  { id: 3, name: 'NIKE DUNK LOW GREY & WHITE', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Dunk-Low-Grey-&-White-R1500.JPG', isNew: false },
  { id: 4, name: 'NIKE DUNK LOW UNIVERSITY BLUE', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Dunk-Low-University-Blue-R1500.JPG', isNew: true },
  { id: 5, name: 'NIKE DUNK LOW ELEMENTAL PINK', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Dunk-Low-Elemental-Pink-R1500.WEBP', isNew: false },
  { id: 6, name: 'NIKE AIR FORCE 1 07 PANDA', brand: 'Nike', category: 'Sneakers', price: 1600, image: '/products/Nike-Air-Force-1-07-Panda-Black-&-White-R1600.jpg', isNew: true },
  { id: 7, name: 'NIKE AIR FORCE 1 07 CLASSICS BLACK', brand: 'Nike', category: 'Sneakers', price: 1400, image: '/products/Nike-Air-Force-1-07-Classics-Black-R1400.webp', isNew: false },
  { id: 8, name: 'NIKE AF1 007 CLASSICS WHITE', brand: 'Nike', category: 'Sneakers', price: 1400, image: '/products/Nile-AF1-007-Classics-White-R1400.JPG', isNew: false },
  { id: 9, name: 'NIKE AIR FORCE 1 07 VINTAGE PINK FOAM', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Air-Force-1-07-Vintage-Pink-Foam-R1500.WEBP', isNew: true },
  { id: 10, name: 'NIKE AIR FORCE 1 07 LV8 OLIVE GREEN', brand: 'Nike', category: 'Sneakers', price: 1600, image: '/products/Nike-Air-Force-1-07-LV8-Double-Swoosh-Olive-Green-R1600.WEBP', isNew: false },
  { id: 11, name: 'NIKE AIR FORCE 1 LOW HARE SPACE JAM', brand: 'Nike', category: 'Sneakers', price: 1600, image: '/products/Nike-Air-Force-1-Low-Hare-Space-Jam-R1600.WEBP', isNew: true },
  { id: 12, name: 'NIKE PORTAL TRIPLE BLACK', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Portal-Triple-Black-R1500.jpg', isNew: false },
  { id: 13, name: 'NIKE PORTAL BLACK & BLUE', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Portal-Black-&-Blue-R1500.jpg', isNew: false },
  { id: 14, name: 'NIKE PORTAL BLACK & PINK', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Portal-Black-&-Pink-R1500.JPG', isNew: true },
  { id: 15, name: 'NIKE PORTAL WHITE', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Portal-White-R1500.WEBP', isNew: false },
  { id: 16, name: 'NIKE PORTAL BLACK & SUNDIAL', brand: 'Nike', category: 'Sneakers', price: 1500, image: '/products/Nike-Portal-Black-&-Sundial-R1500.WEBP', isNew: false },
  { id: 17, name: 'NIKE SB DUNK RAYSSA LEAL', brand: 'Nike', category: 'Sneakers', price: 1600, image: '/products/Nike-SB-Dunk-Rayssa-Leal-R1600.JPG', isNew: true },
  { id: 18, name: 'NIKE SB DUNK JARRITOS', brand: 'Nike', category: 'Sneakers', price: 1700, image: '/products/Nike-SB-Dunk-Jarritos-R1700.WEBP', isNew: true },
  { id: 19, name: 'NIKE SB DUNK LOW X OTOMO KATSIHIRO', brand: 'Nike', category: 'Sneakers', price: 1700, image: '/products/Nike-SB-Dunk-Low-X-Otomo-Katsihiro-Green-&-Orange-R1700.JPG', isNew: false },
  { id: 20, name: 'NIKE AIR MAX 90 DRIFT ACTION GREEN', brand: 'Nike', category: 'Sneakers', price: 1700, image: '/products/Nike-Air-Max-90-Drift-Action-Green-R1700.WEBP', isNew: true },
  { id: 21, name: 'NIKE AIR MAX 95 CORTEIZ GUTTA GREEN', brand: 'Nike', category: 'Sneakers', price: 1700, image: '/products/Nike-Air-Max-95-Corteiz-Gutta-Green-R1700.WEBP', isNew: true },
  { id: 22, name: 'NIKE AIR MAX 95 TEAM RED SUMMIT WHITE', brand: 'Nike', category: 'Sneakers', price: 1700, image: '/products/Nike-Air-Max95-Team-Red-Summit-White-R1700.JPG', isNew: false },
  { id: 23, name: 'NIKE AIR MAX 1 PATTA RUSH MAROON', brand: 'Nike', category: 'Sneakers', price: 1700, image: '/products/Nike-Air-Max-1-Patta-Rush-Meroon-R1700.WEBP', isNew: true },
  { id: 24, name: 'NIKE AIR MAX DN8 BLACK & RED', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike Air-Max-Dn8-Black-&-Red-R1800.WEBP', isNew: true },
  { id: 25, name: 'NIKE AIR MAX DN8 BEIGE', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Air-Max-Dn8-Beige-R1800.JPG', isNew: false },
  { id: 26, name: 'NIKE AIR MAX DN8 BLACK METALLIC', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Air-Max-Dn8-Black-Metalic-R1800.JPG', isNew: false },
  { id: 27, name: 'NIKE AIR MAX DN8 GREY & RED', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Air-Max-Dn8-Grey-&-Red-R1800.JPG', isNew: false },
  { id: 28, name: 'NIKE AIR MAX PLUS TRIPLE BLACK', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Air-Max-Plus-Triple-Black-R1800.PNG', isNew: false },
  { id: 29, name: 'NIKE AIR MAX PLUS TN PINK FADE', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Air-Max-Plus-TN-Pink-Fade-R1800.JPG', isNew: true },
  { id: 30, name: 'NIKE AIRMAX PLUS 3 TRIPLE BLACK', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Airmax-Plus 3-Triple-Black-R1800.JPG', isNew: false },
  { id: 31, name: 'NIKE AIR MAX SUNDER BLACK', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Air-Max-Sunder-Black-R1800.WEBP', isNew: false },
  { id: 32, name: 'NIKE AIR MAX SUNDER BURGUNDY CRUSH', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Air-Max-Sunder-Burgundy-Crush-Baltic-Blue-R1800.WEBP', isNew: false },
  { id: 33, name: 'NIKE SHOX TL WHITE METALLIC SILVER', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Shox-TL-White-Metalic-Siver-R1800.JPG', isNew: true },
  { id: 34, name: 'NIKE SHOX TL GREY & GREEN', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Shox-TL-Grey-&-Green-R1800.JPG', isNew: false },
  { id: 35, name: 'NIKE SHOX TL VELVET BROWN', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Shox-TL-Velvet-Brown-R1800.WEBP', isNew: false },
  { id: 36, name: 'NIKE SHOX TL SKEPTA BLACK & RED', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Shox-TL-Skepta-Black-&-Red-R1800.WEBP', isNew: true },
  { id: 37, name: 'NIKE SHOX R4 METALLIC SILVER & BLACK', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Shox-R4-Metallic-Silver-&-Black-R1800.JPG', isNew: false },
  { id: 38, name: 'NIKE TL SHOX BLACK MAX', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-TL-Shox-Black-Max-R1800.JPG', isNew: false },
  { id: 39, name: 'NIKE TL SHOX METALLIC PLATINUM PINK', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-TL-Shox-Metalic-Platinum-Pink-R1800.WEBP', isNew: true },
  { id: 40, name: 'NIKE AIR FOOTSCAPE BLACK PLUM DUSK', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Air-Footscape-Black-Plum-Dusk-R1800.WEBP', isNew: false },
  { id: 41, name: 'NIKE AIR FOOTSCAPE PINK PLUM DUSK', brand: 'Nike', category: 'Sneakers', price: 1800, image: '/products/Nike-Air-Footscape-Pink-Plum-Dusk-R1800.WEBP', isNew: true },
  { id: 42, name: 'NIKE P-6000 METALLIC SILVER ELEMENT PINK', brand: 'Nike', category: 'Sneakers', price: 1700, image: '/products/Nike-P-6000-Metalic-Silver-Element-Pink-R1700.WEBP', isNew: true },
  { id: 43, name: 'NIKE ZOOM VOMERO ROAM BLACK & WHITE', brand: 'Nike', category: 'Sneakers', price: 1700, image: '/products/Nike-Zoom-Vomero-Roam-Black-&-White-R1700.WEBP', isNew: false },
  
  // Air Jordan Sneakers
  { id: 50, name: 'AIR JORDAN 4 RETRO BLACK CAT', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-4-Retro-Black-Cat-R1700.WEBP', isNew: true },
  { id: 51, name: 'AIR JORDAN 4 RETRO BRED REIMAGINED', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-4-Retro-Bred-Reimagined-R1700.JPG', isNew: true },
  { id: 52, name: 'AIR JORDAN 4 RETRO METALLIC RED', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-4-Retro-Metalic-Red-R1700.WEBP', isNew: false },
  { id: 53, name: 'AIR JORDAN 4 RETRO MILITARY BLACK', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-4-Retro-Military-Black-R1700.WEBP', isNew: true },
  { id: 54, name: 'AIR JORDAN 4 RETRO PINK THUNDER', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-4-Retro-Pink-Thunder-R1700.WEBP', isNew: true },
  { id: 55, name: 'AIR JORDAN 4 RETRO SB PINE GREEN', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-4-Retro-SB-Pine-Green-R1700.JPG', isNew: false },
  { id: 56, name: 'AIR JORDAN 4 RETRO SEAFOAM', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-4-Retro-Seafoam-R1700.jpg', isNew: false },
  { id: 57, name: 'AIR JORDAN 4 RETRO WET CEMENT', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-4-Retro-Wet-Cement-R1700.JPG', isNew: false },
  { id: 58, name: 'AIR JORDAN 4 RETRO WHITE OREO', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-4-Retro-White-Oreo-R1700.JPG', isNew: false },
  { id: 59, name: 'AIR JORDAN 1 LOW WOLF GREY', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-1-Low-Wolf-Grey-R1700.jpg', isNew: false },
  { id: 60, name: 'AIR JORDAN 1 RETRO HIGH UNIVERSITY BLUE', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-1-Retro-High-University-Blue-R1700.WEBP', isNew: true },
  { id: 61, name: 'AIR JORDAN 1 RETRO LOW SE BLACK TOE', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-1-Retro-Low-SE-Black-Toe-R1700.JPG', isNew: false },
  { id: 62, name: 'AIR JORDAN 1 RETRO LOW UNC', brand: 'Air Jordan', category: 'Sneakers', price: 1700, image: '/products/Air-Jordan-1-Retro-Low-UNC-White-University-Blue-R1700.WEBP', isNew: true },
  
  // Adidas Sneakers
  { id: 100, name: 'ADIDAS SAMBA OG BLACK & WHITE', brand: 'Adidas', category: 'Sneakers', price: 1500, image: '/products/Adidas-Samba-OG-Black-&-White-R1500.JPG', isNew: true },
  { id: 101, name: 'ADIDAS SAMBA OG BLACK', brand: 'Adidas', category: 'Sneakers', price: 1500, image: '/products/Adidas-Samba-OG-Black-R1500.jpg', isNew: false },
  { id: 102, name: 'ADIDAS NITEBALL BLACK & WHITE', brand: 'Adidas', category: 'Sneakers', price: 1500, image: '/products/Adidas-Niteball-Black&White-R1500.JPG', isNew: false },
  { id: 103, name: 'ADIDAS SAMBA OG SILVER METALLIC', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Samba-OG-Silver-Metalic-R1600.WEBP', isNew: true },
  { id: 104, name: 'ADIDAS SAMBAROSE CLOUD WHITE', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Sambarose-Cloud-White-R1600.JPG', isNew: true },
  { id: 105, name: 'ADIDAS CAMPUS 00S BLACK', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Campus-00s-Black-R1600.JPG', isNew: false },
  { id: 106, name: 'ADIDAS CAMPUS 00S GREY', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Campus-00s-Grey-R1600.jpg', isNew: false },
  { id: 107, name: 'ADIDAS BAD BUNNY CAMPUS CLOUD WHITE', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Bad-Bunny-Campus-Cloud-White-R1600.JPG', isNew: true },
  { id: 108, name: 'ADIDAS GAZELLE BAD BUNNY CABO ROJO', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Gazelle-Bad-Bunny-Cabo-Rojo-R1600.WEBP', isNew: true },
  { id: 109, name: 'ADIDAS GAZELLE BOLD PLATFORM BLACK SUEDE', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Gazelle-Bold-Platform-Black-Suede-R1600.jpg', isNew: true },
  { id: 110, name: 'ADIDAS GAZELLE BOLD PLATFORM PINK SUEDE', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Gazelle-Bold-Platform-Pink Suede-R1600.jpg', isNew: true },
  { id: 111, name: 'ADIDAS DROP STEP WHITE BLACK ORANGE', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Drop-Step-White-Black-Orange-R1600.JPG', isNew: false },
  { id: 112, name: 'ADIDAS HANDBALL SPEZIAL LIGHT GREEN', brand: 'Adidas', category: 'Sneakers', price: 1600, image: '/products/Adidas-Handball-Spezial-Light-Green-R1600.JPG', isNew: false },
  
  // New Balance Sneakers
  { id: 150, name: 'NEW BALANCE 327 MOON BEAM BLACK', brand: 'New Balance', category: 'Sneakers', price: 1400, image: '/products/New-Balance-327-Moon-Beam-Black-R1400.JPG', isNew: false },
  { id: 151, name: 'NEW BALANCE 327 MOON BEAM BLUE', brand: 'New Balance', category: 'Sneakers', price: 1400, image: '/products/New-Balance-327-Moon-Beam-Blue-R1400.JPG', isNew: false },
  { id: 152, name: 'NEW BALANCE 550 BLACK & WHITE', brand: 'New Balance', category: 'Sneakers', price: 1500, image: '/products/New-Balance-550-Black-&-White-R1500.JPG', isNew: false },
  { id: 153, name: 'NEW BALANCE 550 UNC WHITE DUSK BLUE', brand: 'New Balance', category: 'Sneakers', price: 1500, image: '/products/New-Balance-550-UNC-White-Dusk-Blue-R1500.JPG', isNew: false },
  { id: 154, name: 'NEW BALANCE 550 WHITE GREEN', brand: 'New Balance', category: 'Sneakers', price: 1500, image: '/products/New-Balance-550-White-Green-R1500.JPG', isNew: false },
  { id: 155, name: 'NEW BALANCE 530 SILVER GREY', brand: 'New Balance', category: 'Sneakers', price: 1600, image: '/products/New-Balance-530-Silver-Grey-R1600.WEBP', isNew: false },
  { id: 156, name: 'NEW BALANCE 530 WHITE SILVER', brand: 'New Balance', category: 'Sneakers', price: 1600, image: '/products/New-Balance-530-White-Silver-R1600.JPG', isNew: false },
  { id: 157, name: 'NEW BALANCE 9060 RICH OAK BURGUNDY PINK', brand: 'New Balance', category: 'Sneakers', price: 1600, image: '/products/New-Balance-9060-Rich-Oak-Burgundy-Pink-R1600.JPG', isNew: true },
  { id: 158, name: 'NEW BALANCE 9060 ARCTIC GREY', brand: 'New Balance', category: 'Sneakers', price: 1600, image: '/products/New-Balane-9060-Arctic-Grey-R1600.JPG', isNew: false },
  { id: 159, name: 'NEW BALANCE 9060 BLACK PHANTOM', brand: 'New Balance', category: 'Sneakers', price: 1600, image: '/products/New-Balane-9060-Black-Phantom-R1600.JPG', isNew: false },
  { id: 160, name: 'NEW BALANCE 9060 BLUE HAZE', brand: 'New Balance', category: 'Sneakers', price: 1600, image: '/products/New-Balane-9060-Blue-Haze-R1600.JPG', isNew: false },
  { id: 161, name: 'NEW BALANCE 9060 CHROME BLUE', brand: 'New Balance', category: 'Sneakers', price: 1600, image: '/products/New-Balane-9060-Chrome-Blue-R1600.WEBP', isNew: true },
  { id: 162, name: 'NEW BALANCE 9060 TRIPLE BLACK', brand: 'New Balance', category: 'Sneakers', price: 1600, image: '/products/New-Balane-9060-Triple-Black-R1600.JPG', isNew: false },
  
  // Lacoste Sneakers
  { id: 200, name: 'LACOSTE ELITE ACTIVE BLACK & WHITE', brand: 'Lacoste', category: 'Sneakers', price: 1700, image: '/products/Lacoste-Elite-Active-Black-&-White-R1700.WEBP', isNew: false },
  { id: 201, name: 'LACOSTE ELITE ACTIVE BLACK & RED', brand: 'Lacoste', category: 'Sneakers', price: 1700, image: '/products/Lacoste-Elite-Active-Black-&-Red-R1700.JPG', isNew: false },
  { id: 202, name: 'LACOSTE ELITE ACTIVE GREY', brand: 'Lacoste', category: 'Sneakers', price: 1700, image: '/products/Lacoste-Elite-Active-Grey-R1700.WEBP', isNew: false },
  { id: 203, name: 'LACOSTE ELITE ACTIVE GREY WHITE', brand: 'Lacoste', category: 'Sneakers', price: 1700, image: '/products/Lacoste-Elite-Active-Grey-White-R1700.JPG', isNew: false },
  { id: 204, name: 'LACOSTE L001 WHITE NAVY RED', brand: 'Lacoste', category: 'Sneakers', price: 1700, image: '/products/Lacoste-L001-White-Nevy-Red-R1700.WEBP', isNew: false },
  { id: 205, name: 'LACOSTE PARTNER 70S WHITE BEIGE', brand: 'Lacoste', category: 'Sneakers', price: 1700, image: '/products/Lacoste-Partner-70s-White-Begie-R1700.WEBP', isNew: false },
  { id: 206, name: 'LACOSTE T-CLIP PEANUTS', brand: 'Lacoste', category: 'Sneakers', price: 1700, image: '/products/Lacoste-T-Clip-Peanuts-R1700.PNG', isNew: true },
  { id: 207, name: 'LACOSTE T-CLIP WHITE GREEN', brand: 'Lacoste', category: 'Sneakers', price: 1700, image: '/products/Lacoste-T-Clip-White-Green-R1700.JPG', isNew: false },
  
  // Puma Sneakers
  { id: 250, name: 'PUMA SUEDE XL BLACK & WHITE', brand: 'Puma', category: 'Sneakers', price: 1600, image: '/products/Puma-Suede-XL-Black-&-White-R1600.WEBP', isNew: false },
  { id: 251, name: 'PUMA SUEDE XL BLUE & WHITE', brand: 'Puma', category: 'Sneakers', price: 1600, image: '/products/Puma-Suede-XL-Blue-&-White-R1600.JPG', isNew: false },
  { id: 252, name: 'PUMA SUEDE XL RED & WHITE', brand: 'Puma', category: 'Sneakers', price: 1600, image: '/products/Puma-Suede-XL-Red-&-White-R1600.WEBP', isNew: false },
];

// Get sneakers by brand
export function getSneakersByBrand(brand: string): Product[] {
  return allSneakers.filter(p => p.brand === brand);
}

// Get featured products (mix of new arrivals from different brands)
export function getFeaturedProducts(count: number = 8): Product[] {
  const featured = allSneakers.filter(p => p.isNew).slice(0, count);
  return featured;
}

// Get all unique brands
export function getAllBrands(): string[] {
  return Array.from(new Set(allSneakers.map(p => p.brand)));
}
