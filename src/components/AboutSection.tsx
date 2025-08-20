import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about.png"
          alt="About Background"
          fill
          className="object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <div className="max-w-2xl text-right">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-6 font-playfair drop-shadow-lg">
              About Yashaswi Collections
            </h2>
            <div className="text-sm md:text-base text-white/90 leading-relaxed space-y-4 font-light drop-shadow-md">
              <p>
                Yashaswi Collections is a space where tradition meets elegance. We bring together a diverse range of clothing, jewellery, and organic food items, each chosen with care to reflect quality and authenticity. From timeless sarees and dress materials to handcrafted jewellery and wholesome organic products, every collection is designed to celebrate beauty in simplicity.
              </p>
              <p>
                At Yashaswi Collections, we believe in offering more than just products — we offer a touch of heritage, trust, and everyday elegance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
