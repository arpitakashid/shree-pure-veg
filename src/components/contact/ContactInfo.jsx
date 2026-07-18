import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="bg-[#111] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Contact Information
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Address */}

          <div className="bg-black rounded-2xl p-8 border border-yellow-500/20 text-center">

            <MapPin className="mx-auto text-yellow-400 mb-5" size={40} />

            <h3 className="text-2xl font-semibold mb-4">
              Address
            </h3>

            <p className="text-gray-300 leading-8">
              SHOP NO. 01<br />
              Barshi Road<br />
              Near Reliance Petrol Pump<br />
              Khadgaon, Latur<br />
              Maharashtra - 413531
            </p>

          </div>

          {/* Phone */}

          <div className="bg-black rounded-2xl p-8 border border-yellow-500/20 text-center">

            <Phone className="mx-auto text-yellow-400 mb-5" size={40} />

            <h3 className="text-2xl font-semibold mb-4">
              Call Us
            </h3>

            <p className="text-gray-300 mb-6">
              +91 85081 51151
            </p>

            <a
              href="tel:+918508151151"
              className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
            >
              Call Now
            </a>

          </div>

          {/* Timing */}

          <div className="bg-black rounded-2xl p-8 border border-yellow-500/20 text-center">

            <Clock className="mx-auto text-yellow-400 mb-5" size={40} />

            <h3 className="text-2xl font-semibold mb-4">
              Opening Hours
            </h3>

            <p className="text-gray-300">
              Every Day
            </p>

            <p className="text-yellow-400 text-xl mt-3">
              11:00 AM – 11:00 PM
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}