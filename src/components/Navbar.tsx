import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/constants/navigation";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#EAEAEA] shadow-[0_1px_0_0_#EAEAEA]">
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-foreground tracking-tight"
            >
              BYTECUBE
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-medium text-foreground hover:underline ${isActive(item.to) ? "underline" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-end">
            <Link to="/contact">
              <Button className="font-medium">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;