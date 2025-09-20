import React from "react";
import "../styles/HeroSection.css"; // Import CSS

function HeroSection() {
  return (
    <div className="hero-section bg-green-600 text-white p-12 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Revolutionize Your Learning: Unlock New Knowledge with Videobelajar's Interactive Courses!
      </h1>
      <p className="text-xl mb-6">
        Explore through a variety of courses tailored for your learning journey.
      </p>
      <button className="bg-white text-green-600 font-bold px-8 py-2 rounded-full hover:bg-gray-100 transition-all">
        Start Learning Now
      </button>
    </div>
  );
}

export default HeroSection;
