import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CategoryTabs from "../components/CategoryTabs";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses"; // Assuming courses data is in this file

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="home-container p-8">
        <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

        {/* Category Tabs */}
        <CategoryTabs setActiveCategory={setSelectedCategory} />

        {/* Course Cards */}
        <div className="courses-grid grid grid-cols-3 gap-6 mt-8">
          {filteredCourses.length === 0 ? (
            <p className="text-gray-500">No courses available in this category.</p>
          ) : (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
