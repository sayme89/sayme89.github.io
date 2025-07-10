export default function Team() {
  const teams = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Tim Perencanaan",
      description: "Arsitek dan engineer berpengalaman",
      alt: "Construction workers discussing blueprints on site"
    },
    {
      image: "https://pixabay.com/get/gc4e1730aadd1e90fa417898ae615cd4ecee2f9bbf6480b8b511fcc2eda683acde6dfeb988a832e5fdde44b854c39c78aaf1f068795279cf07bc32e4f8e0fa57f_1280.jpg",
      title: "Tim Pelaksana",
      description: "Teknisi dan operator terlatih",
      alt: "Construction supervisor checking construction progress"
    },
    {
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Tim Keselamatan",
      description: "Ahli K3 dan safety inspector",
      alt: "Construction team having safety meeting"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">Tim Profesional</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Tim ahli konstruksi kami terdiri dari profesional berpengalaman dan bersertifikat
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src={team.image} 
                alt={team.alt} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-brand-navy">{team.title}</h3>
                <p className="text-gray-600">{team.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
