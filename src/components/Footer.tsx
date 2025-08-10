import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";

const Footer = () => {
  return (
    <footer className="mt-24 bg-foreground text-white">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="text-[22px] font-bold tracking-[0.12em] uppercase mb-3">BYTECUBE</div>
          <p className="text-white/70">Intelligent Finance, Powered by AI</p>
        </div>
        <nav aria-label="Footer quick links">
          <div className="text-white font-semibold mb-4">Product</div>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/product">Overview</Link></li>
            <li><Link to="/product/insight">Insight™</Link></li>
            <li><Link to="/product/automate">Automate™</Link></li>
          </ul>
        </nav>
        <nav aria-label="Company">
          <div className="text-white font-semibold mb-4">Company</div>
          <ul className="space-y-2 text-white/80">
            {NAV_ITEMS.filter((n) => !n.to.startsWith("/product")).map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <div className="text-white font-semibold mb-4">Connect</div>
          <address className="not-italic space-y-1 text-white/80">
            <p>123 Market Street, Suite 500, Metropolis</p>
            <p>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </p>
            <p>
              <a href="mailto:hello@bytecube.ai">hello@bytecube.ai</a>
            </p>
          </address>
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/company/bytecubeai" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white/80" aria-hidden="true" />
            </a>
            <a href="https://twitter.com/bytecubeai" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-white/80" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 text-sm text-center text-white/70">© 2025 BYTECUBE. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;


