import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'shirt' | 't-shirt';
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card 
      className="group bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 ease-smooth overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative bg-product-bg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover transition-all duration-500 ease-smooth group-hover:scale-110"
          />
          
          {/* Quick actions overlay */}
          <div className={`absolute inset-0 bg-foreground/10 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex gap-3">
              <Button
                variant="cart"
                size="icon"
                onClick={() => onAddToCart(product)}
                className="transform hover:scale-110 transition-all duration-200"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button
                variant="product"
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
                className="transform hover:scale-110 transition-all duration-200"
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-foreground' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Category badge */}
          <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium shadow-subtle">
            {product.category === 't-shirt' ? 'T-Shirt' : 'Shirt'}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-foreground/80 transition-colors">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-foreground">
              ${product.price}
            </span>
            <Button 
              variant="product" 
              size="sm"
              onClick={() => onAddToCart(product)}
              className="transform hover:scale-105 transition-all duration-200"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;