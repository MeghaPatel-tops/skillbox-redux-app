import React from "react";

const events = [
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

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl  overflow-hidden hover:shadow-2xl transition shadow-md"
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                {event.category}
              </span>

              <h2 className="text-2xl font-semibold mt-3">{event.title}</h2>

              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {event.description}
              </p>

              {/* Location */}
              <p className="mt-3 text-sm text-gray-700">
                <strong>Location:</strong> {event.location}
              </p>

              {/* Date & Time */}
              <div className="flex justify-between mt-3 text-sm">
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Time:</strong> {event.time}
                </p>
              </div>

              {/* Seat Info */}
              <div className="mt-4">
                <p className="font-medium mb-1">Available Seats:</p>
                <div className="flex flex-wrap gap-2">
                  {event.seatTypes.map((seat, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full ₹{
                        seat.available
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {seat.type} (₹{seat.price})
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Details */}
              <div className="mt-4 flex justify-between text-sm text-gray-700">
                <p>
                  <strong>Duration:</strong> {event.duration}
                </p>
                <p>
                  <strong>Age:</strong> {event.ageRestriction}
                </p>
              </div>

              {/* Button */}
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
