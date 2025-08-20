import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero1.jpeg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight font-playfair drop-shadow-lg">
            Celebrate Tradition with Elegance
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-light drop-shadow-md">
            Discover timeless sarees, handcrafted jewellery, and organic essentials designed to bring heritage and simplicity into your everyday life.
          </p>
          <button className="bg-white text-[#001144] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 drop-shadow-sm">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
