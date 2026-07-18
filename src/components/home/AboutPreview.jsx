import aboutImg from "../../assets/gallery/g9.jpeg";

export default function AboutPreview() {
  return (
    <section className="bg-[#111] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div>
          <img
            src={aboutImg}
            alt="Restaurant"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div>

          <h4 className="text-yellow-400 uppercase tracking-[5px] mb-3">
            About Us
          </h4>

          <h2 className="text-5xl font-bold mb-8">
            Experience Pure Vegetarian Excellence
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            At SHREE PURE VEG AND FAMILY RESTAURANT,
            we believe that every meal should be memorable.
            We serve delicious vegetarian cuisine prepared
            with fresh ingredients in a warm and welcoming
            family atmosphere.
          </p>

          <button
            className="
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-semibold
            px-8
            py-4
            rounded-xl
            transition
            "
          >
            Read More
          </button>

        </div>

      </div>
    </section>
  );
}