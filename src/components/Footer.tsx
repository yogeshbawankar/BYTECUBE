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
        <nav aria-label="Footer quick links">
          <div className="text-white font-semibold mb-4">Quick Links</div>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
            ))}
            <li>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-sm px-1 py-0.5 outline-none transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222]"
              >
                Request a Demo
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <div className="text-white font-semibold mb-4">Contact</div>
          <address className="not-italic space-y-1">
            <p>123 Market Street, Suite 500, Metropolis</p>
            <p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center rounded-sm px-1 py-0.5 outline-none transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222]"
              >
                +1 (555) 123-4567
              </a>
            </p>
            <p>
              <a
                href="mailto:hello@bytecube.ai"
                className="inline-flex items-center rounded-sm px-1 py-0.5 outline-none transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222]"
              >
                hello@bytecube.ai
              </a>
            </p>
          </address>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/company/bytecubeai"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-white/80" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/bytecubeai"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-white/80" aria-hidden="true" />
            </a>
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


