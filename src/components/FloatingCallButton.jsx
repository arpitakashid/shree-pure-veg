import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+918508151151"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition"
    >
      <Phone size={24} />
    </a>
  );
}