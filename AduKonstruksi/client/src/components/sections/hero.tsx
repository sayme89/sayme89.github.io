export default function Hero() {
  return (
    <section id="home" className="hero-gradient text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Membangun Masa Depan dengan{" "}
              <span className="text-brand-orange">Kepercayaan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              PT Adu Konstruksi Utama adalah mitra terpercaya untuk semua kebutuhan konstruksi Anda. 
              Dengan pengalaman puluhan tahun, kami menghadirkan solusi berkualitas tinggi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/085213000763" 
                className="bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp mr-2"></i>Konsultasi Gratis
              </a>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-navy transition-colors font-semibold text-center"
              >
                Lihat Proyek Kami
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern construction site with cranes and building framework" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-orange p-3 rounded-full">
                  <i className="fas fa-award text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-navy">500+</p>
                  <p className="text-brand-slate">Proyek Selesai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
