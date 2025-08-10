import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "@/constants/navigation";

const Navbar = () => {
  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F5F1] border-t border-[#EAE5E0]">
      <div className="container mx-auto py-8 px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-[24px] font-bold tracking-[0.12em] uppercase text-[#191919] font-logo"
          >
            BYTECUBE
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 font-manrope text-[18px] text-[#191919]">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `font-semibold hover:opacity-80 ${isActive ? "opacity-100" : "opacity-90"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button
              asChild
              className="font-manrope rounded-full bg-[#191919] text-white hover:bg-[#333333] px-6 py-3 text-[16px]"
            >
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;