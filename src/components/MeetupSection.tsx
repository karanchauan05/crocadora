
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MeetupEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  club: string;
}

const events: MeetupEvent[] = [
  {
    id: "event1",
    title: "Chess Tournament",
    description: "Join us for our monthly chess tournament. All skill levels welcome!",
    date: "May 15, 2024",
    time: "4:00 PM - 7:00 PM",
    location: "Main Hall",
    club: "Chess Club"
  },
  {
    id: "event2",
    title: "Badminton Practice",
    description: "Weekly badminton practice session for all members.",
    date: "May 12, 2024",
    time: "6:30 PM - 8:30 PM",
    location: "Sports Complex",
    club: "Badminton Club"
  },
  {
    id: "event3",
    title: "Anime Movie Night",
    description: "Screening of award-winning anime films followed by discussion.",
    date: "May 20, 2024",
    time: "7:00 PM - 10:00 PM",
    location: "Media Room",
    club: "Anime Club"
  },
  {
    id: "event4",
    title: "Book Discussion",
    description: "Join us to discuss this month's book selection.",
    date: "May 18, 2024",
    time: "5:00 PM - 6:30 PM",
    location: "Reading Room",
    club: "Book Club"
  }
];

const MeetupSection = () => {
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
        threshold: 0.1
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
      id="meetups" 
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span 
            className={cn(
              "inline-block px-4 py-1.5 bg-crocadora-100 text-crocadora-800 rounded-full text-sm font-medium opacity-0",
              isVisible ? 'animate-fade-in' : ''
            )}
          >
            Events Calendar
          </span>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-gray-900 mt-4 opacity-0",
              isVisible ? 'animate-fade-in animate-delay-100' : ''
            )}
          >
            Upcoming Meetups
          </h2>
          <p 
            className={cn(
              "text-lg text-gray-600 mt-4 opacity-0",
              isVisible ? 'animate-fade-in animate-delay-200' : ''
            )}
          >
            Stay connected with our community through regular events and gatherings. Check out our upcoming meetups and join us!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <div 
              key={event.id}
              className={cn(
                "glass-panel p-6 md:p-8 group hover:shadow-lg transition-all opacity-0",
                isVisible ? `animate-fade-in animate-delay-${((idx % 4) + 2) * 100}` : ''
              )}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-crocadora-50 text-crocadora-700 rounded-full">
                    {event.club}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-crocadora-600 transition-colors">
                  {event.title}
                </h3>
                <p className="mt-2 text-gray-600 flex-grow">
                  {event.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 grid gap-3">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={18} className="mr-2 text-crocadora-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock size={18} className="mr-2 text-crocadora-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={18} className="mr-2 text-crocadora-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetupSection;
