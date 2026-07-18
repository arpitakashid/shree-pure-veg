import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Gallery() {
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

    const galleryImages = data.map((file) => {
      const { data: url } = supabase.storage
        .from("gallery")
        .getPublicUrl(file.name);

      return {
        name: file.name,
        url: url.publicUrl,
      };
    });

    setImages(galleryImages);
  }

  return (
    <section className="bg-black min-h-screen py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <h4 className="text-yellow-400 uppercase tracking-[5px] text-center">
          Our Gallery
        </h4>

        <h1 className="text-5xl font-bold text-center mt-4 mb-16">
          Restaurant Gallery
        </h1>

        {images.length === 0 ? (
          <p className="text-center text-gray-400">
            No images available.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.name}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}