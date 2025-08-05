document.addEventListener("DOMContentLoaded", function () {
  const courses = [
    {
      title: "Master the Art of Full-Stack Web Development",
      description: "Learn how to build responsive websites and dynamic applications from scratch.",
      author: "Bagas Satriyo",
      image: "assets/Bagas-Satriyo.jpg",
      mentorPhoto: "assets/Bagas_Satriyo.jpg",
      price: "Rp 599.000,-",
      rating: 5,
      category: "Web Development",
      featured: true,
      role: "Senior Full-Stack Engineer at Tokopedia",
      ratingCount: 120
    },
    {
      title: "Intro to Digital Marketing Strategy",
      description: "Learn fundamental strategies in brand awareness, content, and advertising.",
      author: "Citra Maharani",
      image: "assets/Citra-Maharani.jpg",
      mentorPhoto: "assets/Citra_Maharani.jpg",
      price: "Rp 299.000,-",
      originalPrice: "Rp 374.000,-",
      rating: 4,
      category: "Marketing",
      role: "Digital Marketing Lead at Blibli.com",
      ratingCount: 98
    },
    {
      title: "UI Design for Beginners",
      description: "Start building clean, elegant designs and start your UX journey.",
      author: "Fira Lestari",
      image: "assets/Fira-Lestari.jpg",
      mentorPhoto: "assets/Fira_Lestari.jpg",
      price: "Rp 349.000,-",
      originalPrice: "Rp 436.000,-",
      rating: 5,
      category: "Design",
      role: "UI/UX Designer at Gojek",
      ratingCount: 75
    },
    {
      title: "Finance for Non-Finance Professionals",
      description: "Understand financial concepts and manage budgets effectively.",
      author: "Dimas Adityo",
      image: "assets/Dimas-Adityo.jpg",
      mentorPhoto: "assets/Dimas_Adityo.jpg",
      price: "Rp 399.000,-",
      originalPrice: "Rp 499.000,-",
      rating: 4.5,
      category: "Finance",
      role: "Finance Business Partner at Unilever Indonesia",
      ratingCount: 68
    },
    // ... (other courses stay the same with mentorPhoto added)
  ];

  const courseContainer = document.getElementById("course-container");
  const testimonialContainer = document.getElementById("testimonial-container");

  function renderStars(rating) {
    const filled = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - filled - half;
    return `<span class="stars">` +
      "★".repeat(filled) +
      (half ? "☆" : "") +
      "☆".repeat(empty) +
      `</span>`;
  }

  function renderCourses(filter = "all") {
    courseContainer.innerHTML = "";
    const filtered = filter === "all" ? courses : courses.filter(c => c.category === filter);

    filtered.forEach(course => {
      if (!course.featured) {
        const card = document.createElement("div");
        card.className = "course-card";

        const originalPriceHTML = course.originalPrice
          ? `<span class="original-price">${course.originalPrice}</span>`
          : "";

        card.innerHTML = `
          <img src="${course.image}" alt="${course.author}" class="course-img">
          <div class="course-content">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="mentor-section">
              <img src="${course.mentorPhoto}" class="mentor-photo" alt="${course.author}">
              <div class="mentor-details">
                <span class="author">${course.author}</span>
                <span class="role">${course.role}</span>
              </div>
            </div>
            <div class="course-meta">
              <div class="price-section">
                ${originalPriceHTML}
                <span class="price">${course.price}</span>
              </div>
              <span class="rating">${renderStars(course.rating)} ${course.rating.toFixed(1)} (${course.ratingCount})</span>
            </div>
          </div>
        `;
        courseContainer.appendChild(card);
      }
    });
  }

  function renderFeaturedCourse() {
    const featuredCourse = courses.find(c => c.featured);
    if (!featuredCourse) return;

    const featuredCard = document.querySelector(".featured-card");

    featuredCard.innerHTML = `
      <div class="featured-image-wrapper">
        <img src="${featuredCourse.image}" alt="${featuredCourse.author}" class="featured-photo">
        <span class="label-badge">Limited Slots Only</span>
      </div>
      <h3>${featuredCourse.title}</h3>
      <p>${featuredCourse.description}</p>
      <div class="mentor-section">
        <img src="${featuredCourse.mentorPhoto}" class="mentor-photo" alt="${featuredCourse.author}">
        <div class="mentor-details">
          <span class="author">${featuredCourse.author}</span>
          <span class="role">${featuredCourse.role}</span>
        </div>
      </div>
      <div class="course-meta">
        <span class="price">${featuredCourse.price}</span>
        <span class="rating">${renderStars(featuredCourse.rating)} ${featuredCourse.rating.toFixed(1)} (${featuredCourse.ratingCount})</span>
      </div>
    `;
  }

  function renderTestimonials() {
    const testimonials = [
      { name: "Intan Wibowo", text: "Great content and instructors!" },
      { name: "Bima Nugraha", text: "I’ve learned so much and improved my career." },
      { name: "Rizky Amelia", text: "Perfect for beginners and very well structured." },
      { name: "Santi Widya", text: "Clear explanations and helpful materials." },
      { name: "Johan Santosa", text: "High quality courses at affordable prices." },
      { name: "Amelia Zahrani", text: "Easy to follow and apply in real life." },
      { name: "Fahmi Ramadan", text: "Really enjoyed the full-stack course!" },
      { name: "Nina Putri", text: "The instructors are top-notch." },
      { name: "Eka Prasetya", text: "Would recommend to my colleagues." },
      { name: "Putri Ayu", text: "I gained practical skills and insights." }
    ];

    testimonials.forEach(t => {
      const card = document.createElement("div");
      card.className = "testimonial-card";
      card.innerHTML = `<p>"${t.text}"</p><span>- ${t.name}</span>`;
      testimonialContainer.appendChild(card);
    });
  }

  renderFeaturedCourse();
  renderCourses();
  renderTestimonials();

  document.querySelectorAll(".category-filter button").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      renderCourses(category);
    });
  });

  document.getElementById("logout-button").addEventListener("click", function () {
    alert("Logged out successfully!");
  });

  document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for subscribing!");
    this.reset();
  });
});
