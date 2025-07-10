import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Halo, saya ${formData.name}%0A%0AEmail: ${formData.email}%0ATelepon: ${formData.phone}%0ALayanan: ${formData.service}%0A%0APesan: ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/085213000763?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    toast({
      title: "Pesan Terkirim",
      description: "Anda akan dialihkan ke WhatsApp untuk mengirim pesan.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">Hubungi Kami</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Siap membantu mewujudkan proyek konstruksi impian Anda. Hubungi kami untuk konsultasi gratis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-brand-navy">Informasi Kontak</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange p-3 rounded-full">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Alamat</h4>
                  <p className="text-gray-700">Jl. Konstruksi Utama No. 123<br />Jakarta Selatan, DKI Jakarta 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange p-3 rounded-full">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Telepon</h4>
                  <p className="text-gray-700">+62 852-1300-0763</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange p-3 rounded-full">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">WhatsApp</h4>
                  <p className="text-gray-700">+62 852-1300-0763</p>
                  <a 
                    href="https://wa.me/085213000763" 
                    className="text-brand-orange hover:text-orange-600 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kirim Pesan WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange p-3 rounded-full">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Email</h4>
                  <p className="text-gray-700">info@adukontruksi.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange p-3 rounded-full">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Jam Operasional</h4>
                  <p className="text-gray-700">Senin - Jumat: 08:00 - 17:00<br />Sabtu: 08:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-brand-navy">Kirim Pesan</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="service">Jenis Layanan</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Layanan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="building">Pembangunan Gedung</SelectItem>
                    <SelectItem value="infrastructure">Infrastruktur</SelectItem>
                    <SelectItem value="renovation">Renovasi</SelectItem>
                    <SelectItem value="planning">Perencanaan & Desain</SelectItem>
                    <SelectItem value="consultation">Konsultasi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-brand-orange hover:bg-orange-600">
                Kirim Pesan
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                <i className="fas fa-info-circle text-brand-orange mr-2"></i>
                Untuk respon lebih cepat, hubungi kami langsung via WhatsApp
              </p>
              <a 
                href="https://wa.me/085213000763" 
                className="inline-flex items-center text-brand-orange hover:text-orange-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
