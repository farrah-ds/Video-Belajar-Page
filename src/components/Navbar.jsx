import React from "react";
import "../styles/Navbar.css"; // Importing Navbar's specific CSS

function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center p-4 bg-white shadow-md">
      {/* Left side: Company Logo */}
      <div className="logo-container flex items-center">
        <img
          src="/assets/videobelajar-logo.png"
          alt="Videobelajar Logo"
          className="logo w-16"
        />
        <span className="ml-2 text-xl font-bold">Videobelajar</span>
      </div>

      {/* Right side: Profile Picture (non-clickable) */}
      <div className="profile-container flex items-center">
        <img
          src="/assets/social-media/youtube.png" // Replace with your profile image path
          alt="Profile"
          className="profile-pic w-10 h-10 rounded-full object-cover"
        />
        <span className="ml-2 text-sm">Profile Picture</span>
      </div>
    </nav>
  );
}

export default Navbar;
