window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  const progress = localStorage.getItem("course-progress");
  if (progress && document.getElementById("progress")) {
    document.getElementById("progress").value = progress;
    document.getElementById("progress-text").textContent = `${progress}%`;
  }
};

function increaseProgress() {
  const progress = document.getElementById("progress");
  const text = document.getElementById("progress-text");

  let value = parseInt(progress.value);
  if (value < 100) {
    value += 20;
    progress.value = value;
    text.textContent = `${value}%`;
    localStorage.setItem("course-progress", value);
  }
}

function filterCourses(category) {
  const cards = document.querySelectorAll(".course-card");
  cards.forEach(card => {
    const cat = card.getAttribute("data-category");
    card.style.display = category === "all" || category === cat ? "block" : "none";
  });
}

function searchCourses() {
  const query = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".course-card").forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
}

// Course loader
const courses = {
  "html-css": {
    title: "HTML & CSS Basics",
    video: "https://www.youtube.com/embed/UB1O30fR-EE",
    description: "Learn how to build static web pages with this interactive HTML and CSS course."
  },
  "js": {
    title: "JavaScript Essentials",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk",
    description: "Master JavaScript basics including variables, loops, functions, and more."
  },
  "react": {
    title: "React for Beginners",
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
    description: "Get started building modern apps using React, components, and hooks."
  },
  "python": {
    title: "Python Crash Course",
    video: "https://www.youtube.com/embed/rfscVS0vtbw",
    description: "Start coding in Python from scratch—perfect for total beginners."
  },
  "sql": {
    title: "SQL for Data Analysis",
    video: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "Learn how to write SQL queries to retrieve and manipulate data."
  },

"cybersecurity": {
  title: "Cybersecurity Fundamentals",
  video: "https://www.youtube.com/embed/5S0wSkNQw2A",
  description: "Get introduced to cybersecurity concepts and best practices from Cisco Networking Academy."
}

};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const courseKey = params.get("course");
  if (courseKey && courses[courseKey]) {
    const course = courses[courseKey];
    document.getElementById("course-title").textContent = course.title;
    document.getElementById("video-frame").src = course.video;
    document.getElementById("course-description").textContent = course.description;
  }
});


document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will respond shortly.');
  this.reset();
});
