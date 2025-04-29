import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, we would send this to a backend API
      console.log("Subscribing email:", email);
      setSubmitted(true);
      setEmail("");
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-primary bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to get special offers, free giveaways, and new product announcements.
          </p>
          
          {submitted ? (
            <div className="text-primary font-medium py-3">
              Thank you for subscribing!
            </div>
          ) : (
            <form 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={handleSubmit}
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
