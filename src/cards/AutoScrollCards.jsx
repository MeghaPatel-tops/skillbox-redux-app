import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AutoScrollCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  
  // Updated data with complete event information
const values = [
  {
    image: "https://images.pexels.com/photos/34751855/pexels-photo-34751855.jpeg",
    category: "Rock Concert",
    title: "Electric Storm Festival",
    description: "Experience the ultimate rock extravaganza with top international artists. A night of high-energy performances and unforgettable music.",
    location: "Madison Square Garden, New York",
    date: "2024-03-15",
    time: "19:00",
    seatTypes: [
      { type: "VIP", price: 299, available: true },
      { type: "Premium", price: 199, available: true },
      { type: "Standard", price: 99, available: false },
      { type: "Balcony", price: 69, available: true }
    ],
    duration: "3 hours",
    ageRestriction: "18+"
  },
  {
    image: "https://images.pexels.com/photos/34718832/pexels-photo-34718832.jpeg",
    category: "Jazz Night",
    title: "Smooth Jazz Experience",
    description: "An intimate evening of smooth jazz featuring world-renowned musicians in an acoustic setting.",
    location: "Blue Note Jazz Club, Chicago",
    date: "2024-03-20",
    time: "20:30",
    seatTypes: [
      { type: "Front Row", price: 150, available: true },
      { type: "Table Seating", price: 120, available: true },
      { type: "Bar Seating", price: 80, available: true }
    ],
    duration: "2.5 hours",
    ageRestriction: "21+"
  },
  {
    image: "https://images.pexels.com/photos/34751855/pexels-photo-34751855.jpeg",
    category: "EDM Festival",
    title: "Neon Dreams 2024",
    description: "The biggest EDM festival of the year featuring top DJs, laser shows, and spectacular visual effects.",
    location: "Downtown Music Hall, Los Angeles",
    date: "2024-04-05",
    time: "22:00",
    seatTypes: [
      { type: "VIP Table", price: 350, available: false },
      { type: "Dance Floor", price: 120, available: true },
      { type: "General Admission", price: 85, available: true }
    ],
    duration: "6 hours",
    ageRestriction: "21+"
  },
  {
    image: "https://images.pexels.com/photos/34751855/pexels-photo-34751855.jpeg",
    category: "Classical",
    title: "Symphony Orchestra Gala",
    description: "An elegant evening with the world-famous symphony orchestra performing classical masterpieces.",
    location: "Carnegie Hall, New York",
    date: "2024-03-25",
    time: "19:30",
    seatTypes: [
      { type: "Orchestra", price: 250, available: true },
      { type: "Dress Circle", price: 180, available: true },
      { type: "Upper Circle", price: 120, available: true },
      { type: "Gallery", price: 75, available: false }
    ],
    duration: "2 hours",
    ageRestriction: "All ages"
  },
  {
    image: "https://images.pexels.com/photos/34751855/pexels-photo-34751855.jpeg",
    category: "Hip Hop",
    title: "Urban Beats Live",
    description: "The hottest hip hop artists performing live with special guests and surprise performances.",
    location: "The Fillmore, Detroit",
    date: "2024-04-12",
    time: "21:00",
    seatTypes: [
      { type: "Meet & Greet", price: 399, available: true },
      { type: "Floor Access", price: 149, available: true },
      { type: "Standard", price: 89, available: true }
    ],
    duration: "4 hours",
    ageRestriction: "18+"
  },
  {
    image: "https://images.pexels.com/photos/34751855/pexels-photo-34751855.jpeg",
    category: "Acoustic Session",
    title: "Unplugged & Intimate",
    description: "Raw and emotional acoustic performances in a cozy, intimate setting with limited seating.",
    location: "The Listening Room, Nashville",
    date: "2024-03-18",
    time: "19:00",
    seatTypes: [
      { type: "Premium Sofa", price: 95, available: true },
      { type: "Standard Chair", price: 65, available: true },
      { type: "Standing Room", price: 45, available: false }
    ],
    duration: "2 hours",
    ageRestriction: "All ages"
  }
];
  const totalCards = values.length;
  const cardsToShow = 3;
  const cardWidth = 384;
  const gap = 32;
  // Simplified container width
  const containerWidth = (cardWidth * cardsToShow) + (gap * (cardsToShow - 1));

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const scrollPosition = index * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextCard = () => {
    const nextIndex = (currentIndex + 1) % (totalCards - cardsToShow + 1);
    scrollToCard(nextIndex);
  };

  const prevCard = () => {
    const prevIndex = (currentIndex - 1 + (totalCards - cardsToShow + 1)) % (totalCards - cardsToShow + 1);
    scrollToCard(prevIndex);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  

  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden shadow-md">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Everything Live!
        </h2>

        {/* Simplified Cards Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide mx-auto"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            width: `${containerWidth}px`,
            maxWidth: '100%'
          }}
        >
          {values.map((val, idx) => (
            <div
              key={idx}
             
              className="shadow-md hover:shadow-lg transition w-72 flex-shrink-0 rounded-xl"
            >
              <img 
                src={val.image} 
                alt="Gallery image"
                className="w-72 h-80 rounded-lg mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={prevCard}
            className="bg-white/90 hover:bg-white text-green-800 w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Indicator Dots */}
          <div className="flex gap-3">
            {Array.from({ length: totalCards - cardsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextCard}
            className="bg-white/90 hover:bg-white text-green-800 w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}