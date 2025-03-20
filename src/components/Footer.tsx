
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="col-span-full md:col-span-1">
            <h3 className="text-xl font-display font-semibold text-crocadora-700 mb-4">Crocadora</h3>
            <p className="text-gray-600 mb-4">
              A community of enthusiasts passionate about chess, badminton, anime, and books.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4">Clubs</h4>
            <ul className="space-y-2">
              <li><a href="#chess-club" className="text-gray-600 hover:text-crocadora-600 transition-colors">Chess Club</a></li>
              <li><a href="#badminton-club" className="text-gray-600 hover:text-crocadora-600 transition-colors">Badminton Club</a></li>
              <li><a href="#anime-club" className="text-gray-600 hover:text-crocadora-600 transition-colors">Anime Club</a></li>
              <li><a href="#book-club" className="text-gray-600 hover:text-crocadora-600 transition-colors">Book Club</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#meetups" className="text-gray-600 hover:text-crocadora-600 transition-colors">Meetups</a></li>
              <li><a href="#join" className="text-gray-600 hover:text-crocadora-600 transition-colors">Join Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4">Socials</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-crocadora-600 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-crocadora-600 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-crocadora-600 transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Crocadora Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
