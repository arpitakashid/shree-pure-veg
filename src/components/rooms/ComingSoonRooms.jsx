import { Phone } from "lucide-react";

export default function ComingSoonRooms() {
  return (
    <section className="bg-[#111] text-white py-24">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Room Gallery
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-10">
          Room images will appear here once they are uploaded by the
          administrator. For bookings and availability, please contact us.
        </p>

        <a
          href="tel:+918508151151"
          className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold transition"
        >
          <Phone size={22} />
          Call Now
        </a>

      </div>
    </section>
  );
}