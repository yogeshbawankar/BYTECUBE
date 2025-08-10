import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "@/constants/navigation";

const Navbar = () => {
  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F5F1] border-t border-[#EAE5E0]">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-[20px] font-semibold tracking-[2px] uppercase text-[#191919] visited:text-[#191919] underline decoration-[#191919] hover:decoration-[#191919] focus-visible:decoration-[#191919] underline-offset-4 font-logo"
          >
            BYTECUBE
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 font-manrope text-[18px] font-semibold text-[#191919]">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `font-normal text-[#191919] visited:text-[#191919] flex items-center ${isActive ? "underline decoration-[#191919] underline-offset-8" : "no-underline"}`}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button asChild>
              <Link to="/contact" className="no-underline text-white visited:text-white">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;