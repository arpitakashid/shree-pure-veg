import heroImg from "../../assets/hero/heroimg.jpg";

export default function RoomsHero() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <h4 className="text-yellow-400 uppercase tracking-[6px] mb-4">
            Luxury Accommodation
          </h4>

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Comfortable Rooms
          </h1>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Relax in our comfortable family rooms designed to make your stay
            enjoyable and memorable.
          </p>
        </div>
      </div>
    </section>
  );
}