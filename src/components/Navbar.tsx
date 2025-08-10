import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "@/constants/navigation";

const Navbar = () => {
  

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
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `font-medium text-foreground hover:underline ${isActive ? "underline" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-end">
            <Button asChild className="font-medium">
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;