import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-himalayan rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold bg-gradient-himalayan bg-clip-text text-transparent">
                TasteHimal
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Nepal's premier Himalayan cuisine delivery platform. Experience authentic mountain flavors from the best restaurants.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/tastehimal-premium" className="text-muted-foreground hover:text-primary transition-colors">TasteHimal Premium</Link></li>
              <li><Link to="/mountain-delivery" className="text-muted-foreground hover:text-primary transition-colors">Mountain Delivery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help & Support</Link></li>
              <li><Link to="/partner" className="text-muted-foreground hover:text-primary transition-colors">Partner with us</Link></li>
              <li><Link to="/ride" className="text-muted-foreground hover:text-primary transition-colors">Ride with us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/investor" className="text-muted-foreground hover:text-primary transition-colors">Investor Relations</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TasteHimal. All rights reserved. Bringing the taste of the Himalayas to your doorstep 🏔️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;