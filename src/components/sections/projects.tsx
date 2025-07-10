export default function Projects() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Gedung Perkantoran Modern",
      location: "Jakarta Selatan",
      alt: "High-rise building under construction with cranes"
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Kompleks Residensial",
      location: "Tangerang",
      alt: "Modern residential complex with multiple buildings"
    },
    {
      image: "https://pixabay.com/get/g4e521c29f7e305d518d870969c0af2a50361d8437e51e76108a7e14a2a5d8498880ffd17c2f783b9de096b5aa3ec99d4_1280.jpg",
      title: "Gudang Industri",
      location: "Bekasi",
      alt: "Industrial warehouse construction site"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Pusat Perbelanjaan",
      location: "Jakarta Barat",
      alt: "Shopping mall construction with glass facade"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">Proyek Kami</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek terbaru yang telah kami selesaikan dengan standar kualitas tertinggi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.alt} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-brand-navy">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/085213000763" 
            className="bg-brand-orange text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp mr-2"></i>Diskusikan Proyek Anda
          </a>
        </div>
      </div>
    </section>
  );
}
