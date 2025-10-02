import { ShoppingCart, Menu, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface HeaderProps {
  cartItems: number;
  onCartClick: () => void;
}

const Header = ({ cartItems, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  const handleAuthClick = () => {
    navigate("/auth");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-subtle">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            WOLVEN
          </h1>
          <span className="text-sm text-muted-foreground hidden sm:block">
            Premium Black Essentials
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-foreground/80 transition-colors font-medium">
            Home
          </a>
          <a href="#shirts" className="text-foreground hover:text-foreground/80 transition-colors font-medium">
            Shirts
          </a>
          <a href="#t-shirts" className="text-foreground hover:text-foreground/80 transition-colors font-medium">
            T-Shirts
          </a>
          <a href="#about" className="text-foreground hover:text-foreground/80 transition-colors font-medium">
            About
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {user ? (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLogout}
              className="hidden sm:flex"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleAuthClick}
              className="hidden sm:flex"
              title="Login"
            >
              <User className="h-5 w-5" />
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onCartClick}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                {cartItems}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-card">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="text-foreground hover:text-foreground/80 transition-colors font-medium">
              Home
            </a>
            <a href="#shirts" className="text-foreground hover:text-foreground/80 transition-colors font-medium">
              Shirts
            </a>
            <a href="#t-shirts" className="text-foreground hover:text-foreground/80 transition-colors font-medium">
              T-Shirts
            </a>
            <a href="#about" className="text-foreground hover:text-foreground/80 transition-colors font-medium">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;