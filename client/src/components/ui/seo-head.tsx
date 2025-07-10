import { useEffect } from "react";

export default function SeoHead() {
  useEffect(() => {
    // Set document title
    document.title = "PT Adu Konstruksi Utama - Kontraktor Profesional Terpercaya";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'PT Adu Konstruksi Utama adalah perusahaan konstruksi terpercaya dengan pengalaman puluhan tahun. Spesialis pembangunan gedung, infrastruktur, dan renovasi. Hubungi kami untuk konsultasi gratis.');
    }
    
    // Set structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "name": "PT Adu Konstruksi Utama",
      "description": "Perusahaan konstruksi terpercaya dengan pengalaman puluhan tahun",
      "url": "https://www.adukontruksi.com",
      "telephone": "+6285213000763",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ID",
        "addressLocality": "Jakarta",
        "addressRegion": "DKI Jakarta"
      },
      "areaServed": "Indonesia",
      "serviceType": ["Konstruksi Bangunan", "Renovasi", "Infrastruktur"],
      "priceRange": "$$"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return null;
}
