import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3fbeb0] to-[#027199] flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#09303b]">Coralie</h1>
              <p className="text-xs text-[#678187]">Socio-Esthéticienne</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScroll('accueil')}
              className="text-[#09303b] hover:text-[#027199] transition-colors font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => handleScroll('approche')}
              className="text-[#09303b] hover:text-[#027199] transition-colors font-medium"
            >
              Mon Approche
            </button>
            <button
              onClick={() => handleScroll('services')}
              className="text-[#09303b] hover:text-[#027199] transition-colors font-medium"
            >
              Services Pro
            </button>
            <button
              onClick={() => handleScroll('blog')}
              className="text-[#09303b] hover:text-[#027199] transition-colors font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="bg-[#027199] text-white px-6 py-2.5 rounded-lg hover:bg-[#09303b] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#09303b]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
            <button
              onClick={() => handleScroll('accueil')}
              className="block w-full text-left py-2 text-[#09303b] hover:text-[#027199] transition-colors font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => handleScroll('approche')}
              className="block w-full text-left py-2 text-[#09303b] hover:text-[#027199] transition-colors font-medium"
            >
              Mon Approche
            </button>
            <button
              onClick={() => handleScroll('services')}
              className="block w-full text-left py-2 text-[#09303b] hover:text-[#027199] transition-colors font-medium"
            >
              Services Pro
            </button>
            <button
              onClick={() => handleScroll('blog')}
              className="block w-full text-left py-2 text-[#09303b] hover:text-[#027199] transition-colors font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="block w-full text-left py-2 bg-[#027199] text-white px-4 rounded-lg hover:bg-[#09303b] transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
