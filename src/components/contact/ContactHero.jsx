import heroImg from "../../assets/hero/heroimg.jpg";

export default function ContactHero() {
  return (
    <section
      className="relative h-[45vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <h4 className="text-yellow-400 uppercase tracking-[6px] mb-4">
            Contact Us
          </h4>

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Visit Us Today
          </h1>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            We look forward to serving you delicious vegetarian food in a warm
            and welcoming atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
}