import React, { useState } from "react";
import "../styles/Newsletter.css"; // Import CSS

function Newsletter() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="newsletter bg-gray-800 text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Eager to Learn More?</h2>
      <p className="text-xl text-center mb-6">
        Stay updated with the latest courses and offers from Videobelajar!
      </p>
      <div className="max-w-md mx-auto text-center">
        <form onSubmit={handleSubscribe} className="flex flex-col items-center">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 w-80 rounded-full"
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div>
            <button
              type="submit"
              className="bg-green-600 text-white font-bold px-8 py-2 rounded-full hover:bg-green-700 transition-all"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="text-gray-400 mt-4">Be the 1st one to get our exclusive deals!</p>
      </div>
    </div>
  );
}

export default Newsletter;
