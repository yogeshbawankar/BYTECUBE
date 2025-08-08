import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";

const Footer = () => {
  return (
    <footer className="mt-24 bg-[#222222] text-[#AAAAAA]">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="text-2xl font-bold text-white mb-3">BYTECUBE</div>
          <p>Intelligent Finance, Powered by AI</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-4">Quick Links</div>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
            <li><Link to="/contact">Request a Demo</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-4">Contact</div>
          <p>123 Market Street, Suite 500, Metropolis</p>
          <p>+1 (555) 123-4567</p>
          <p>hello@bytecube.ai</p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="LinkedIn"><Linkedin className="text-white/80" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="text-white/80" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 text-sm text-center">© 2025 BYTECUBE. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;


