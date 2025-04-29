/**
 * Product Interface - Core data structure for products in the shop
 * 
 * This interface defines the structure of all standard products in the shop system.
 * Use this as a reference when adding new products to the shop.
 */
export interface Product {
  /** Unique identifier for the product */
  id: number;
  
  /** Display name of the product */
  name: string;
  
  /** Current price of the product */
  price: number;
  
  /** URL to the product image */
  image: string;
  
  /** Detailed description of the product */
  description: string;
  
  /** Category of the product - you can add any string here */
  category: string;
  
  /** Optional original price (for displaying discounts) */
  originalPrice?: number;
  
  /** 
   * Optional badge to display on the product card
   * Options: 'NEW', 'SALE', or null
   */
  badge?: 'NEW' | 'SALE' | null;
}

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Vintage Graphic Tee',
    price: 39.99, 
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    description: 'Comfortable cotton t-shirt with unique retro design',
    category: 'Clothing'
  },
  { 
    id: 2, 
    name: 'Minimalist Watch', 
    price: 89.99, 
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Elegant stainless steel with genuine leather strap',
    originalPrice: 129.99,
    category: 'Accessories',
    badge: 'SALE'
  },
  { 
    id: 3, 
    name: 'Designer Sunglasses', 
    price: 129.99, 
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    description: 'Polarized lenses with durable acetate frames',
    category: 'Accessories'
  },
  { 
    id: 4, 
    name: 'Ceramic Plant Pot', 
    price: 49.99, 
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    description: 'Handcrafted ceramic with minimalist design',
    category: 'Home Decor'
  },
  { 
    id: 5, 
    name: 'Urban Sneakers', 
    price: 79.99, 
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: 'Lightweight and stylish for everyday wear',
    category: 'Shoes'
  },
  { 
    id: 6, 
    name: 'Leather Tote Bag', 
    price: 149.99, 
    image: 'https://images.unsplash.com/photo-1594531543977-171bd189f11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    description: 'Premium full-grain leather with spacious interior',
    category: 'Accessories',
    badge: 'NEW'
  },
  { 
    id: 7, 
    name: 'Luxury Candle Set', 
    price: 59.99, 
    image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Hand-poured soy wax with essential oil fragrances',
    category: 'Home Decor'
  },
  { 
    id: 8, 
    name: 'Smart Fitness Watch', 
    price: 129.99, 
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=848&q=80',
    description: 'Track fitness, sleep and more with this stylish watch',
    originalPrice: 179.99,
    category: 'Accessories',
    badge: 'SALE'
  },
  { 
    id: 9, 
    name: 'Denim Jacket', 
    price: 89.99, 
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Classic denim jacket with vintage wash',
    category: 'Clothing'
  },
  { 
    id: 10, 
    name: 'Minimalist Backpack', 
    price: 79.99, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Stylish and functional backpack for daily use',
    category: 'Accessories'
  },
  { 
    id: 11, 
    name: 'Wool Blanket', 
    price: 69.99, 
    image: 'https://images.unsplash.com/photo-1580301762395-41773e851cc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Soft and warm premium wool blanket',
    category: 'Home Decor'
  },
  { 
    id: 12, 
    name: 'Running Shoes', 
    price: 119.99, 
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Lightweight performance running shoes',
    category: 'Shoes',
    badge: 'NEW'
  }
];
