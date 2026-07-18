import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { v4 as uuidv4 } from "uuid";

export default function GalleryManagement() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);

  async function loadImages() {
    const { data, error } = await supabase.storage
      .from("gallery")
      .list();

    console.log("FILES:", data);
    console.log("ERROR:", error);

    if (error) {
      console.log(error);
      return;
    }

    if (!data) {
      setImages([]);
      return;
    }

    const imageArray = data.map((file) => {
      const { data: url } = supabase.storage
        .from("gallery")
        .getPublicUrl(file.name);

      return {
        name: file.name,
        url: url.publicUrl,
      };
    });

    console.log("IMAGE ARRAY:", imageArray);

    setImages(imageArray);
  }

  async function uploadImage() {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    setUploading(true);

    const fileName = `${uuidv4()}-${image.name}`;

    const { error } = await supabase.storage
      .from("gallery")
      .upload(fileName, image);

    setUploading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Image uploaded successfully!");

    setImage(null);

    document.querySelector("input").value = "";

    loadImages();
  }

  async function deleteImage(name) {
    const { error } = await supabase.storage
      .from("gallery")
      .remove([name]);

    if (error) {
      alert(error.message);
      return;
    }

    loadImages();
  }

  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold text-white mb-8">
        Gallery Management
      </h1>

      <div className="bg-[#161616] rounded-xl p-6 border border-yellow-500/20">

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="text-white"
        />

        <br /><br />

        <button
          onClick={uploadImage}
          disabled={uploading}
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl"
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </button>

      </div>

      <h2 className="text-3xl text-yellow-400 mt-10 mb-6">
        Gallery Images
      </h2>

      {images.length === 0 ? (
        <p className="text-white">No Images Found</p>
      ) : (
        <div className="grid grid-cols-4 gap-5">

          {images.map((img) => (
            <div
              key={img.name}
              className="bg-[#161616] p-3 rounded-xl"
            >

              <img
                src={img.url}
                alt=""
                className="w-full h-52 object-cover rounded-lg"
              />

              <button
                onClick={() => deleteImage(img.name)}
                className="mt-3 bg-red-600 w-full py-2 rounded-lg text-white"
              >
                Delete
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}