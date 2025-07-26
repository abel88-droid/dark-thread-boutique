import { Button } from "@/components/ui/button";
import heroImage from "@/assets/black-tshirt-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container max-w-screen-xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tighter">
              Premium
              <span className="block text-foreground/80">Black</span>
              <span className="block">Essentials</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Discover our curated collection of timeless black shirts and t-shirts. 
              Crafted with premium materials for the modern minimalist.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="shop" size="xl" className="min-w-[160px]">
              Shop Collection
            </Button>
            <Button variant="outline" size="xl" className="min-w-[160px]">
              Learn More
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <span>Premium Cotton</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <span>Sustainable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <span>Free Shipping</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative bg-gradient-card rounded-2xl shadow-elegant overflow-hidden transform hover:scale-105 transition-all duration-700 ease-smooth">
            <img 
              src={heroImage} 
              alt="Premium Black T-Shirt" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-foreground text-background px-6 py-3 rounded-full shadow-elegant font-semibold text-sm">
            New Collection
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;