const hour = new Date().getHours();
const greeting = document.getElementById("greeting");

if (hour<12) {
    greeting.textContent = "Good morning! Ready to code? ☀️";
}
else if (hour<=17) {
    greeting.textContent = "Good afternoon! Keep building! 🌸";
}
else if (hour>17) {
    greeting.textContent = "Good evening! Night coding session? 🌙";
}

const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill => {
    skill.addEventListener("click", () => {
        skill.classList.toggle("active");
    });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
