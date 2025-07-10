import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <i className="fas fa-hard-hat text-brand-orange text-2xl"></i>
            <div>
              <h1 className="text-xl font-bold text-brand-navy">PT Adu Konstruksi Utama</h1>
              <p className="text-xs text-brand-slate">Kontraktor Profesional Terpercaya</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium"
            >
              Proyek
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium"
            >
              Kontak
            </button>
            <a 
              href="https://wa.me/085213000763" 
              className="bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp mr-2"></i>Hubungi Kami
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-brand-navy"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn("md:hidden pb-4", mobileMenuOpen ? "block" : "hidden")}>
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium text-left"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium text-left"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium text-left"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium text-left"
            >
              Proyek
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-brand-navy hover:text-brand-orange transition-colors font-medium text-left"
            >
              Kontak
            </button>
            <a 
              href="https://wa.me/085213000763" 
              className="bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp mr-2"></i>Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
