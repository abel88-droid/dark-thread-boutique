import ProductCard, { Product } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import product images
import blackShirt1 from "@/assets/black-shirt-1.jpg";
import blackTshirt1 from "@/assets/black-tshirt-1.jpg";
import blackPolo1 from "@/assets/black-polo-1.jpg";
import blackVneck1 from "@/assets/black-vneck-1.jpg";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Classic Black Shirt",
    price: 89,
    image: blackShirt1,
    category: "shirt",
    description: "Premium cotton button-up shirt with clean lines and perfect fit."
  },
  {
    id: "2",
    name: "Essential Black Tee",
    price: 45,
    image: blackTshirt1,
    category: "t-shirt",
    description: "Soft cotton crew neck t-shirt, perfect for everyday wear."
  },
  {
    id: "3",
    name: "Black Polo Shirt",
    price: 65,
    image: blackPolo1,
    category: "shirt",
    description: "Sophisticated polo shirt combining comfort with elegance."
  },
  {
    id: "4",
    name: "V-Neck Black Tee",
    price: 48,
    image: blackVneck1,
    category: "t-shirt",
    description: "Modern v-neck design in premium black cotton blend."
  },
  {
    id: "5",
    name: "Formal Black Shirt",
    price: 95,
    image: blackShirt1,
    category: "shirt",
    description: "Tailored dress shirt perfect for professional occasions."
  },
  {
    id: "6",
    name: "Casual Black Tee",
    price: 42,
    image: blackTshirt1,
    category: "t-shirt",
    description: "Relaxed fit t-shirt in ultra-soft organic cotton."
  }
];

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [filter, setFilter] = useState<'all' | 'shirt' | 't-shirt'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');

  const filteredProducts = mockProducts
    .filter(product => filter === 'all' || product.category === filter)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <section id="products" className="py-20 bg-background-secondary">
      <div className="container max-w-screen-xl px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Our Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully curated black apparel that combines timeless style with modern comfort.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'cart' : 'product'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All Products
            </Button>
            <Button
              variant={filter === 'shirt' ? 'cart' : 'product'}
              size="sm"
              onClick={() => setFilter('shirt')}
            >
              Shirts
            </Button>
            <Button
              variant={filter === 't-shirt' ? 'cart' : 'product'}
              size="sm"
              onClick={() => setFilter('t-shirt')}
            >
              T-Shirts
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Button
              variant={sortBy === 'name' ? 'cart' : 'product'}
              size="sm"
              onClick={() => setSortBy('name')}
            >
              Name
            </Button>
            <Button
              variant={sortBy === 'price' ? 'cart' : 'product'}
              size="sm"
              onClick={() => setSortBy('price')}
            >
              Price
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Button variant="shop" size="xl">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;