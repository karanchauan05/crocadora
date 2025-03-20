import crocadoraClub from "D:/crocadora-main/src/images/crocadora_club.jpg";
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center px-6 md:px-10 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-crocadora-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-crocadora-300 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-6 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 max-w-xl">
              <span 
                className={`inline-block px-4 py-1.5 bg-crocadora-100 text-crocadora-800 rounded-full text-sm font-medium opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              >
                Welcome to our community
              </span>
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight opacity-0 ${isVisible ? 'animate-fade-in animate-delay-100' : ''}`}
              >
                <span className="text-crocadora-600">Crocadora</span>
              </h1>
              <p 
                className={`text-lg text-gray-600 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}
              >
                Join our diverse community of enthusiasts. From chess to badminton, anime to books – find your passion and connect with like-minded people.
              </p>
              <div 
                className={`flex flex-wrap gap-4 pt-2 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-300' : ''}`}
              >
                <a 
                  href="#chess-club" 
                  className="px-7 py-3 bg-crocadora-600 text-white rounded-full font-medium hover:bg-crocadora-700 transition-colors flex items-center gap-2"
                >
                  Explore Clubs <ArrowRight size={16} />
                </a>
                <a 
                  href="#meetups" 
                  className="px-7 py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  View Meetups
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className={`order-1 md:order-2 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}
          >
            <div className="glass-panel aspect-[4/3] overflow-hidden">
              <img 
                src={crocadoraClub} 
                alt="Crocadora Club" 
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
