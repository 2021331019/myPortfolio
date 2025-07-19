const data = {
  name: "Mehedi Hasan Masum",
  role: "Student of SUST CSE",
  profileImage:
    "https://raw.githubusercontent.com/2021331019/myPortfolio/main/profile.jpg",
  about:
    "Hello! I’m Mehedi Hasan Masum, a Computer Science & Engineering student at SUST. I love programming, solving problems, and building creative web applications.",
  projects: [
    {
      id: 1,
      category: "game",
      icon: "🎮",
      title: "Tic-tac-Toe Game",
      description:
        "A simple yet fun game to play and practice programming logic.",
      details:
        "This Tic-tac-Toe game is built using JavaScript and HTML/CSS. It allows two players to play the game on the same device with a clean and responsive UI.",
    },
    {
      id: 2,
      category: "webapp",
      icon: "💻",
      title: "Tuition Media Web App",
      description: "A web app for managing tuition classes and student information.",
      details:
        "Tuition Media Web App is developed with React and Node.js. It helps tutors manage student info, schedule classes, and track payments.",
    },
    // আরও প্রজেক্ট যুক্ত করতে পারো এখানে
  ],
  contact: {
    email: "mahadihasankhan00@gmail.com",
    mobile: "01601496272",
    facebook: "https://www.facebook.com/mehadihasan.masum.3",
  },
};

function loadPortfolio() {
  // Header
  document.getElementById("profile-img").src = data.profileImage;
  document.getElementById("name").textContent = data.name;
  document.getElementById("role").textContent = data.role;

  // About
  document.getElementById("about-text").textContent = data.about;

  // Projects
  displayProjects("all");

  // Contact
  document.getElementById("email-link").textContent = data.contact.email;
  document.getElementById("email-link").href = "mailto:" + data.contact.email;
  document.getElementById("mobile").textContent = data.contact.mobile;
  document.getElementById("facebook-link").href = data.contact.facebook;

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Setup filter buttons event
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      displayProjects(category);
    });
  });

  // Setup modal close event
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal-close");
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

function displayProjects(category) {
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";

  const filteredProjects =
    category === "all"
      ? data.projects
      : data.projects.filter((p) => p.category === category);

  filteredProjects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-icon">${project.icon}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    card.addEventListener("click", () => {
      showModal(project);
    });

    projectsGrid.appendChild(card);
  });
}

function showModal(project) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-icon").textContent = project.icon;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.details;
  modal.style.display = "block";
}

window.onload = loadPortfolio;
