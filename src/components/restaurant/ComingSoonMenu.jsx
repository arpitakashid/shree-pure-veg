import { Phone } from "lucide-react";

export default function ComingSoonMenu() {
  return (
    <section className="bg-[#111] text-white py-24">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Digital Menu Coming Soon
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-10">
          Our delicious menu will appear here once the restaurant
          administrator uploads it.
          Until then, please call us or visit the restaurant to
          explore today's special dishes.
        </p>

        <a
          href="tel:+918508151151"
          className="inline-flex items-center gap-3
          bg-yellow-500
          hover:bg-yellow-400
          text-black
          px-8
          py-4
          rounded-xl
          font-semibold
          transition"
        >
          <Phone size={22} />
          Call Now
        </a>

      </div>
    </section>
  );
}