import { 
  Clock, 
  RotateCcw, 
  Shield, 
  Truck, 
  Award,
  Heart
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: '24-hour Dispatch',
      description: 'Quick processing and shipping'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: 'Hassle-free return policy'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: '100% secure transactions'
    },
    {
      icon: Truck,
      title: 'Free Shipping ^ ₹999',
      description: 'Free delivery on orders ^ ₹999'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium quality guarantee'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: '24/7 dedicated support'
    }
  ];

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 bg-[#001144] rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:bg-[#001144]/90 transition-colors duration-300">
                <feature.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xs md:text-lg font-semibold text-[#001144] mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
