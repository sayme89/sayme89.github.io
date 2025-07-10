export default function Equipment() {
  const equipment = [
    {
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Excavator Berat",
      description: "Peralatan penggalian dan pergerakan tanah untuk proyek skala besar",
      alt: "Heavy construction excavator on construction site"
    },
    {
      image: "https://images.unsplash.com/photo-1518047601542-79f18c655718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Tower Crane",
      description: "Crane modern untuk pengangkatan material ke ketinggian tinggi",
      alt: "Construction crane against blue sky"
    },
    {
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Concrete Mixer",
      description: "Truk mixer beton untuk pengecoran berkualitas tinggi",
      alt: "Concrete mixer truck on construction site"
    }
  ];

  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Peralatan Modern</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Didukung oleh peralatan konstruksi modern dan teknologi terdepan untuk hasil terbaik
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div key={index} className="text-center">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
