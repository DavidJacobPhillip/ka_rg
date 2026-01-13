import { useState } from 'react'; // Added useState for toggle logic
import { Home, Calendar, Mail, Menu, X } from 'lucide-react'; // Added Menu and X icons
import logo from '../assets/logo.jpg'; 

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  // State to track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'open-houses', label: 'Open Houses', icon: Calendar },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavigation = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <img src={logo} alt="Ka Realty Group" className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#422dab] text-white'
                      : 'text-gray-700 hover:bg-purple-50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Hamburger Menu Button (Visible on Mobile Only) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#422dab] p-2 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100 border-t' : 'max-h-0 opacity-0 pointer-events-none'
        } bg-white overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-[#422dab] text-white shadow-lg'
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}