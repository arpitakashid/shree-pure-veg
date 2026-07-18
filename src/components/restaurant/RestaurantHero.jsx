import heroImg from "../../assets/hero/heroimg.jpg";

export default function RestaurantHero() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <h4 className="text-yellow-400 uppercase tracking-[6px] mb-4">
            Our Menu
          </h4>

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Pure Veg Delights
          </h1>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Explore our delicious vegetarian dishes prepared with fresh
            ingredients and served with love.
          </p>
        </div>
      </div>
    </section>
  );
}