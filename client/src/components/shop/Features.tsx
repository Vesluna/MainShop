export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <i className="ri-truck-line"></i>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">Free worldwide shipping on all orders over $100</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <i className="ri-refresh-line"></i>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Easy Returns</h3>
            <p className="text-gray-600">Hassle-free 30-day return policy for all items</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <i className="ri-customer-service-line"></i>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our customer service team is available around the clock</p>
          </div>
        </div>
      </div>
    </section>
  );
}
