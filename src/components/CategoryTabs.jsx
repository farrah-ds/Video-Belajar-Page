import React, { useState } from "react";
import "../styles/CategoryTabs.css"; // Import CSS

function CategoryTabs({ setActiveCategory }) {
  const [activeTab, setActiveTab] = useState("All Courses");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveCategory(tab); // Pass the active category to parent
  };

  return (
    <div className="category-tabs-container">
      <ul className="category-tabs">
        <li
          className={`category-tab ${activeTab === "All Courses" ? "active" : ""}`}
          onClick={() => handleTabClick("All Courses")}
        >
          All Courses
        </li>
        <li
          className={`category-tab ${activeTab === "Marketing" ? "active" : ""}`}
          onClick={() => handleTabClick("Marketing")}
        >
          Marketing
        </li>
        <li
          className={`category-tab ${activeTab === "Business" ? "active" : ""}`}
          onClick={() => handleTabClick("Business")}
        >
          Business
        </li>
        <li
          className={`category-tab ${activeTab === "Self Development" ? "active" : ""}`}
          onClick={() => handleTabClick("Self Development")}
        >
          Self Development
        </li>
        <li
          className={`category-tab ${activeTab === "Design" ? "active" : ""}`}
          onClick={() => handleTabClick("Design")}
        >
          Design
        </li>
      </ul>
    </div>
  );
}

export default CategoryTabs;
