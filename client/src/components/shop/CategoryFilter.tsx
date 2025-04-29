interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = [
    "All Products",
    "Clothing",
    "Accessories",
    "Shoes",
    "Home Decor"
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-dark"
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
