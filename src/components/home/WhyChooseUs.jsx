import { Wifi, ParkingCircle, Leaf, PartyPopper } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf size={40} className="text-yellow-400" />,
      title: "100% Pure Veg",
      description:
        "Fresh and hygienic vegetarian cuisine prepared with quality ingredients.",
    },
    {
      icon: <ParkingCircle size={40} className="text-yellow-400" />,
      title: "Free Parking",
      description:
        "Spacious parking facility for a convenient dining experience.",
    },
    {
      icon: <Wifi size={40} className="text-yellow-400" />,
      title: "Free Wi-Fi",
      description:
        "Stay connected while enjoying your meal with complimentary Wi-Fi.",
    },
    {
      icon: <PartyPopper size={40} className="text-yellow-400" />,
      title: "Party Hall",
      description:
        "Perfect venue for birthdays, family functions, and celebrations.",
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h4 className="text-yellow-400 uppercase tracking-[5px]">
            Why Choose Us
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            We Make Every Visit Special
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#151515] p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500 transition"
            >
              {feature.icon}

              <h3 className="text-2xl font-semibold mt-6 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}