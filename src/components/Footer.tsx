import { Wheat, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const links = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Mission", href: "#mission" },
      { name: "Leadership", href: "#leadership" },
      { name: "Careers", href: "#careers" },
    ],
    services: [
      { name: "Input Supply", href: "#input-supply" },
      { name: "Market Access", href: "#market-access" },
      { name: "Financial Services", href: "#financial" },
      { name: "Training Programs", href: "#training" },
    ],
    resources: [
      { name: "Farming Guides", href: "#guides" },
      { name: "Market Prices", href: "#prices" },
      { name: "Weather Updates", href: "#weather" },
      { name: "News & Events", href: "#news" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-forest-green to-earth-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-harvest-gold rounded-full flex items-center justify-center">
                <Wheat className="w-6 h-6 text-earth-brown" />
              </div>
              <span className="text-2xl font-bold">Devgiri FPC</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Empowering farmers through collective strength and sustainable agricultural practices. Together, we grow stronger and build a prosperous farming community.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2025 Devgiri FPC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-white/70 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/70 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-white/70 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
