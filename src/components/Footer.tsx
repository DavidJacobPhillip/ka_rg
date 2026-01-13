import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

// Example image import (adjust path as needed)
// If image is in /public, use src="/instagram.png" instead
import Realtor from '../assets/realtor.png';
import EOH from '../assets/equal.png';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      type: 'icon',
      icon: Instagram,
      href: 'https://www.instagram.com/ka_realtygroup/',
      label: 'Instagram',
    },
    {
      type: 'icon',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/ka-rg',
      label: 'LinkedIn',
    },
    {
      type: 'image',
      src: Realtor, // or '/custom-social.png'
      href: 'https://www.nar.realtor/',
      label: 'NAR',
    },
    {
      type: 'image',
      src: EOH, // or '/custom-social.png'
      href: 'https://www.justice.gov/crt/fair-housing-act-1',
      label: 'Equal Opportunity Housing',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#422dab] to-purple-500 bg-clip-text text-transparent mb-4">
              Ka Realty Group
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in real estate. We specialize in finding you the right property, with exceptional service.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#422dab] transition-colors"
                >
                  {social.type === 'icon' ? (
                    <social.icon
                      size={social.size}
                      className="text-white"
                    />
                  ) : (
                    <img
                      src={social.src}
                      alt={social.label}
                      className="h-10 w-10 object-contain"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'Open Houses', href: '#' },
                { label: 'Contact Us', href: '#' },
                { label: 'About Us', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#422dab] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#422dab] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href="tel:+19713446299"
                    className="text-white hover:text-[#422dab] transition-colors"
                  >
                    (971) 344-6299
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#422dab] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:santosh@ka-rg.com"
                    className="text-white hover:text-[#422dab] transition-colors"
                  >
                    santosh@ka-rg.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Office Location</h4>
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-[#422dab] mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-medium leading-relaxed">
                  1915 NE Stucki Avenue, Suite 250
                  <br />
                  Hillsboro, OR 97006
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Mon - Fri: 9AM to 5PM
                  <br />
                  Sat - Sun: 10AM to 4PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Ka Realty Group, all rights reserved.
              <br /><br />
              A division of Keller Williams Sunset Corridor.
              <br />
              Each office is independently owned and operated.
            </p>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#422dab] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#422dab] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#422dab] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
