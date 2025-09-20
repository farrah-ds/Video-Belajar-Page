import React from "react";
import "../styles/CourseCard.css"; // Import CSS

function CourseCard({ course }) {
  return (
    <div className="course-card border rounded-xl p-4 shadow-lg">
      <img src={course.image} alt={course.title} className="course-image rounded-lg mb-4" />
      <h2 className="course-title text-lg font-semibold">{course.title}</h2>
      <p className="course-subtitle text-gray-600 text-sm">{course.subtitle}</p>
      <div className="mentor-info flex items-center gap-2 mt-3">
        <img
          src={course.mentorPhoto}
          alt={course.mentorName}
          className="mentor-photo w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="mentor-name font-medium text-sm">{course.mentorName}</p>
          <p className="mentor-role text-xs text-gray-500">{course.mentorRole}</p>
        </div>
      </div>
      <p className="course-rating mt-2 text-sm">⭐ {course.rating} ({course.reviews})</p>
      <div className="price-section mt-3">
        {course.originalPrice && (
          <span className="text-gray-400 line-through mr-2">
            Rp {course.originalPrice.toLocaleString("id-ID")}
          </span>
        )}
        <span className="text-green-600 font-bold">
          Rp {course.price.toLocaleString("id-ID")}
        </span>
      </div>
    </div>
  );
}

export default CourseCard;
