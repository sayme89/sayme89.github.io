export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional construction workers wearing safety gear on site" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
              Tentang PT Adu Konstruksi Utama
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Sejak didirikan, PT Adu Konstruksi Utama telah menjadi nama terpercaya dalam industri konstruksi Indonesia. 
              Kami mengkhususkan diri dalam pembangunan gedung komersial, residensial, dan infrastruktur dengan standar kualitas tertinggi.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Tim profesional kami yang berpengalaman, didukung oleh teknologi modern dan komitmen terhadap keselamatan kerja, 
              siap memberikan solusi konstruksi terbaik untuk setiap proyek.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-brand-orange text-xl"></i>
                <span className="font-medium">Pengalaman 20+ Tahun</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-brand-orange text-xl"></i>
                <span className="font-medium">Tim Profesional Bersertifikat</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-brand-orange text-xl"></i>
                <span className="font-medium">Teknologi Modern</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-brand-orange text-xl"></i>
                <span className="font-medium">Standar Keselamatan Tinggi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
