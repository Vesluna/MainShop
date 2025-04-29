import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { Product } from '@/lib/products';
import { GamePass } from '@/lib/gamePasses';

// Union type for products that can be added to cart
export type CartProduct = Product | GamePass;

// Badge types
export type BadgeType = 'NEW' | 'SALE' | 'POPULAR' | 'COMING_SOON' | null;

// Cart item with quantity
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  badge?: BadgeType;
  quantity: number;
  platform?: string;
  status?: string;
}

// Cart context type
interface CartContextType {
  items: CartItem[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shipping: number;
  total: number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart provider props
interface CartProviderProps {
  children: ReactNode;
}

// Cart provider component
export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  
  // Calculate cart totals
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + shipping;
  
  // Add a product to the cart
  const addToCart = (product: CartProduct) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increment quantity if product already in cart
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product to cart with necessary properties
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
          category: product.category,
          badge: product.badge as BadgeType,
          quantity: 1,
          // Add platform and status if it's a GamePass
          ...(('platform' in product) && { platform: product.platform }),
          ...(('status' in product) && { status: product.status })
        };
        return [...prevItems, newItem];
      }
    });
  };
  
  // Remove a product from the cart
  const removeFromCart = (productId: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  // Update the quantity of a product in the cart
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };
  
  // Clear the entire cart
  const clearCart = () => {
    setItems([]);
  };
  
  // Context value
  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    shipping,
    total
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// HOC creator for cart functionality
export function withCart<T extends object>(Component: React.ComponentType<T>) {
  const WithCartComponent = (props: T) => (
    <CartProvider>
      <Component {...props} />
    </CartProvider>
  );
  WithCartComponent.displayName = `WithCart${Component.displayName || Component.name || 'Component'}`;
  return WithCartComponent;
}
