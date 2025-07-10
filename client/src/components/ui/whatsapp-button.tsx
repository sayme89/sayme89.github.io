export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/085213000763" 
      className="floating-whatsapp bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}
