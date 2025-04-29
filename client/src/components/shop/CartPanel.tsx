import { useCart } from "@/hooks/useCart";

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    subtotal,
    shipping,
    total,
    totalItems
  } = useCart();

  const handleStartShopping = () => {
    onClose();
    window.scrollTo({
      top: document.getElementById('products')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here in a real application.');
  };

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-heading font-bold">Your Cart</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto p-6">
          {/* Empty Cart State */}
          {totalItems === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <i className="ri-shopping-bag-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 mb-6">Your cart is empty</p>
              <button 
                onClick={handleStartShopping}
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex items-start border-b border-gray-200 pb-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.name}</h4>
                      <button 
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                    <div className="text-primary font-medium mt-1">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="flex items-center mt-2">
                      <button 
                        className="w-7 h-7 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <i className="ri-subtract-line"></i>
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button 
                        className="w-7 h-7 flex justify-center items-center bg-gray-100 rounded-full hover:bg-gray-200"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <i className="ri-add-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {totalItems > 0 && (
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between mb-6 text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
