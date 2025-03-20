
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ClubSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  reverse?: boolean;
}

const ClubSection: React.FC<ClubSectionProps> = ({
  id,
  title,
  description,
  imageUrl,
  primaryColor = "bg-crocadora-600",
  secondaryColor = "bg-crocadora-100",
  textColor = "text-crocadora-800",
  reverse = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="py-24 px-6 md:px-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className={cn(
          "absolute w-96 h-96 rounded-full opacity-10 blur-3xl",
          reverse ? "top-0 right-0 translate-x-1/2 -translate-y-1/2" : "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
          secondaryColor
        )}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className={cn(
          "grid md:grid-cols-2 gap-12 md:gap-16 items-center",
          reverse ? "md:grid-flow-col" : ""
        )}>
          <div className={cn(
            "order-2",
            reverse ? "md:order-2" : "md:order-1"
          )}>
            <div className="space-y-6 max-w-xl">
              <span 
                className={cn(
                  "inline-block px-4 py-1.5 rounded-full text-sm font-medium opacity-0",
                  secondaryColor,
                  textColor,
                  isVisible ? 'animate-fade-in' : ''
                )}
              >
                Club
              </span>
              <h2 
                className={cn(
                  "text-3xl md:text-4xl font-bold text-gray-900 opacity-0",
                  isVisible ? 'animate-fade-in animate-delay-100' : ''
                )}
              >
                {title}
              </h2>
              <p 
                className={cn(
                  "text-lg text-gray-600 opacity-0",
                  isVisible ? 'animate-fade-in animate-delay-200' : ''
                )}
              >
                {description}
              </p>
              <div 
                className={cn(
                  "pt-2 opacity-0",
                  isVisible ? 'animate-fade-in animate-delay-300' : ''
                )}
              >
                <a 
                  href="#join" 
                  className={cn(
                    "inline-block px-6 py-2.5 text-white rounded-full font-medium transition-colors",
                    primaryColor,
                    primaryColor === "bg-crocadora-600" ? "hover:bg-crocadora-700" : "hover:opacity-90"
                  )}
                >
                  Join this club
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "order-1",
              reverse ? "md:order-1" : "md:order-2",
              "opacity-0",
              isVisible ? 'animate-fade-in animate-delay-200' : ''
            )}
          >
            <div className="glass-panel aspect-video overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
