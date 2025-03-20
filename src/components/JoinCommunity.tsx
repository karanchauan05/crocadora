
import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const JoinCommunity = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would send this data to your backend
    console.log('Join request:', { name, email });
    
    // Show success message
    toast({
      title: "Request submitted!",
      description: "You'll receive an invite to our WhatsApp community soon.",
    });
    
    // Reset form
    setName('');
    setEmail('');
  };

  return (
    <section 
      id="join" 
      ref={sectionRef}
      className="py-24 px-6 md:px-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-crocadora-200 rounded-full opacity-20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crocadora-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div 
              className={cn(
                "space-y-6 max-w-xl opacity-0",
                isVisible ? 'animate-fade-in' : ''
              )}
            >
              <span className="inline-block px-4 py-1.5 bg-crocadora-100 text-crocadora-800 rounded-full text-sm font-medium">
                Join Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Connect with Our Community
              </h2>
              <p className="text-lg text-gray-600">
                Join our WhatsApp community to stay updated on all club activities, meetups, and connect with other members. Fill out the form to receive an invitation link.
              </p>
              
              <div className="glass-panel p-8 mt-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-crocadora-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-crocadora-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">WhatsApp Community</h3>
                    <p className="text-gray-600">Connect with 200+ members</p>
                  </div>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-crocadora-100 text-crocadora-700 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                    <span>Instant updates on club activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-crocadora-100 text-crocadora-700 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                    <span>Connect with other members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-crocadora-100 text-crocadora-700 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                    <span>Receive event reminders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-crocadora-100 text-crocadora-700 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                    <span>Share resources with the community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "glass-panel p-8 md:p-10 opacity-0",
              isVisible ? 'animate-fade-in animate-delay-200' : ''
            )}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request to Join</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-crocadora-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-crocadora-500 focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-crocadora-600 text-white rounded-lg font-medium hover:bg-crocadora-700 transition-colors"
                >
                  Request Invitation
                </button>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                We'll send you an invitation link to join our WhatsApp community
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
