import heroImg from "../../assets/hero/heroimg.jpg";
import logo from "../../assets/logo/logo.png";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        <img
          src={logo}
          alt="Restaurant Logo"
          className="w-40 md:w-56 mb-8"
        />

        <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400">
          SHREE PURE VEG
        </h1>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-white">
          AND FAMILY RESTAURANT
        </h2>

        <p className="mt-8 max-w-3xl text-lg md:text-2xl text-gray-200 leading-relaxed">
          Delicious Food • Comfortable Rooms • Family Atmosphere
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl transition duration-300">
            View Menu
          </button>

          <button className="border-2 border-yellow-500 text-white hover:bg-yellow-500 hover:text-black font-semibold px-8 py-4 rounded-xl transition duration-300">
            Call Now
          </button>
        </div>

      </div>
    </section>
  );
}