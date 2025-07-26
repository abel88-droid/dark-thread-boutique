import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container max-w-screen-xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">NOIR</h3>
              <p className="text-background/80 text-sm leading-relaxed">
                Premium black apparel for the modern minimalist. Crafted with care, designed for life.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background/80 hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-background/80 hover:text-background transition-colors text-sm">
                Home
              </a>
              <a href="#shirts" className="text-background/80 hover:text-background transition-colors text-sm">
                Shirts
              </a>
              <a href="#t-shirts" className="text-background/80 hover:text-background transition-colors text-sm">
                T-Shirts
              </a>
              <a href="#about" className="text-background/80 hover:text-background transition-colors text-sm">
                About Us
              </a>
            </nav>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Customer Care</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-background/80 hover:text-background transition-colors text-sm">
                Size Guide
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-sm">
                Shipping Info
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-sm">
                Returns
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Stay Updated</h4>
            <p className="text-background/80 text-sm">
              Subscribe for new arrivals and exclusive offers.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60 focus:border-background/40"
                />
                <Button variant="ghost" size="icon" className="bg-background/10 hover:bg-background/20 text-background">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 NOIR. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;