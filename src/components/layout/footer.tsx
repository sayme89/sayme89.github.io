export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <i className="fas fa-hard-hat text-brand-orange text-2xl"></i>
              <div>
                <h3 className="text-xl font-bold">PT Adu Konstruksi Utama</h3>
                <p className="text-sm text-gray-300">Kontraktor Profesional</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Mitra terpercaya untuk semua kebutuhan konstruksi Anda dengan pengalaman puluhan tahun 
              dan komitmen terhadap kualitas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://wa.me/085213000763" 
                className="text-gray-300 hover:text-brand-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-brand-orange transition-colors">Beranda</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-brand-orange transition-colors">Tentang Kami</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-brand-orange transition-colors">Layanan</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-brand-orange transition-colors">Proyek</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-brand-orange transition-colors">Kontak</button></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">Pembangunan Gedung</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">Infrastruktur</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">Renovasi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">Perencanaan & Desain</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">Konsultasi</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-brand-orange mt-1"></i>
                <p className="text-gray-300 text-sm">Jl. Konstruksi Utama No. 123<br />Jakarta Selatan, DKI Jakarta</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-brand-orange"></i>
                <p className="text-gray-300 text-sm">+62 852-1300-0763</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-brand-orange"></i>
                <p className="text-gray-300 text-sm">info@adukontruksi.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fab fa-whatsapp text-brand-orange"></i>
                <a 
                  href="https://wa.me/085213000763" 
                  className="text-brand-orange hover:text-orange-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +62 852-1300-0763
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 PT Adu Konstruksi Utama. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
}
