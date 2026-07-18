import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function GalleryPreview() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  async function loadImages() {
    const { data, error } = await supabase.storage
      .from("gallery")
      .list("", {
        limit: 100,
      });

    if (error) {
      console.log(error);
      return;
    }

    const gallery = data.map((file) => {
      const { data: url } = supabase.storage
        .from("gallery")
        .getPublicUrl(file.name);

      return url.publicUrl;
    });

    setImages(gallery);
  }

  return (
    <section className="bg-[#111] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h4 className="text-yellow-400 uppercase tracking-[5px]">
            Our Gallery
          </h4>

          <h2 className="text-5xl font-bold mt-4">
            Moments From Our Restaurant
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

        <div className="text-center mt-14">
          <Link
            to="/gallery"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl transition"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}