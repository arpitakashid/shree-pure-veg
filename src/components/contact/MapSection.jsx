export default function MapSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Find Us
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.421355715277!2d76.55007102832819!3d18.40716287140178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf830d7e334c85%3A0x27a8483aac0496de!2sShree%20Pure%20Veg%20And%20Family%20Restaurant!5e0!3m2!1sen!2sin!4v1784173853473!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title="Restaurant Location"
          ></iframe>

        </div>

      </div>
    </section>
  );
}