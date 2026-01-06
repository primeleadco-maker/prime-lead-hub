import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Prime Lead Company</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Performance-focused lead generation for real estate professionals worldwide.
            </p>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Co-Founders:</p>
              <p className="text-sm text-muted-foreground">Krishna Kumar</p>
              <p className="text-sm text-muted-foreground">Devansh Bhatia</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-we-work" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@primeleadcompany.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@primeleadcompany.com
              </a>
              <a
                href="https://wa.me/918708849604"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 8708849604 (WhatsApp)
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prime Lead Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
