
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClubSection from '@/components/ClubSection';
import MeetupSection from '@/components/MeetupSection';
import JoinCommunity from '@/components/JoinCommunity';
import Footer from '@/components/Footer';

const clubsData = [
  {
    id: "chess-club",
    title: "Chess Club",
    description: "Our Chess Club welcomes players of all skill levels, from beginners to masters. Join us for regular tournaments, friendly matches, strategy sessions, and opportunities to improve your game in a supportive environment.",
    imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    primaryColor: "bg-crocadora-600",
    secondaryColor: "bg-crocadora-100",
    textColor: "text-crocadora-800",
    reverse: false
  },
  {
    id: "badminton-club",
    title: "Badminton Club",
    description: "Our Badminton Club offers regular practice sessions, friendly matches, and competitive tournaments for players of all abilities. Join us to improve your skills, maintain fitness, and enjoy the fast-paced excitement of badminton.",
    imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    primaryColor: "bg-green-600",
    secondaryColor: "bg-green-100",
    textColor: "text-green-800",
    reverse: true
  },
  {
    id: "anime-club",
    title: "Anime Club",
    description: "Our Anime Club brings together fans to watch, discuss, and celebrate Japanese animation. From classics to the latest releases, we explore the art, stories, and cultural impact of anime through screenings, discussions, and themed events.",
    imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    primaryColor: "bg-purple-600",
    secondaryColor: "bg-purple-100",
    textColor: "text-purple-800",
    reverse: false
  },
  {
    id: "book-club",
    title: "Book Club",
    description: "Our Book Club meets regularly to discuss diverse literary works across genres. Join fellow readers to explore thought-provoking books, share perspectives, and discover new authors in a welcoming and engaging environment.",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    primaryColor: "bg-amber-600",
    secondaryColor: "bg-amber-100",
    textColor: "text-amber-800",
    reverse: true
  }
];

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {clubsData.map((club) => (
        <ClubSection
          key={club.id}
          id={club.id}
          title={club.title}
          description={club.description}
          imageUrl={club.imageUrl}
          primaryColor={club.primaryColor}
          secondaryColor={club.secondaryColor}
          textColor={club.textColor}
          reverse={club.reverse}
        />
      ))}
      
      <MeetupSection />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default Index;
