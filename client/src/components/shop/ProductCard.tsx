import { Product } from "@/lib/products";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const {
    id,
    name,
    price,
    image,
    description,
    originalPrice,
    badge
  } = product;

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <i className="ri-heart-line text-gray-600"></i>
          </button>
        </div>
        
        {badge && (
          <div className="absolute top-4 left-4">
            <span className={`text-white text-xs font-bold px-3 py-1 rounded ${
              badge === 'SALE' ? 'bg-accent' : 'bg-secondary'
            }`}>
              {badge}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-heading font-semibold">{name}</h3>
          <div>
            <span className="text-lg font-medium text-primary">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <button 
          className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
