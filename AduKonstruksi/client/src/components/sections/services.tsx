export default function Services() {
  const services = [
    {
      icon: "fas fa-building",
      title: "Pembangunan Gedung",
      description: "Konstruksi gedung komersial, perkantoran, dan residensial dengan standar kualitas tinggi dan desain modern.",
      features: ["Gedung perkantoran", "Kompleks residensial", "Pusat perbelanjaan"]
    },
    {
      icon: "fas fa-road",
      title: "Infrastruktur",
      description: "Pembangunan infrastruktur jalan, jembatan, dan fasilitas umum dengan teknologi terdepan.",
      features: ["Konstruksi jalan raya", "Pembangunan jembatan", "Fasilitas umum"]
    },
    {
      icon: "fas fa-tools",
      title: "Renovasi",
      description: "Layanan renovasi dan perbaikan gedung untuk meningkatkan fungsi dan estetika bangunan Anda.",
      features: ["Renovasi gedung lama", "Perbaikan struktural", "Upgrade fasilitas"]
    },
    {
      icon: "fas fa-drafting-compass",
      title: "Perencanaan & Desain",
      description: "Konsultasi perencanaan dan desain arsitektur untuk mewujudkan visi konstruksi Anda.",
      features: ["Desain arsitektur", "Perencanaan struktur", "Konsultasi teknis"]
    },
    {
      icon: "fas fa-helmet-safety",
      title: "Manajemen Proyek",
      description: "Manajemen proyek konstruksi end-to-end dengan pengawasan ketat dan timeline yang tepat.",
      features: ["Supervisi lapangan", "Kontrol kualitas", "Manajemen timeline"]
    },
    {
      icon: "fas fa-handshake",
      title: "Konsultasi",
      description: "Konsultasi ahli untuk semua aspek konstruksi, dari perencanaan hingga pelaksanaan proyek.",
      features: ["Analisis kelayakan", "Estimasi biaya", "Solusi teknis"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">Layanan Kami</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kami menawarkan berbagai layanan konstruksi profesional untuk memenuhi kebutuhan proyek Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl">
              <div className="bg-brand-orange p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-navy">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="text-sm text-gray-600 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
