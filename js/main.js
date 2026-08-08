const header = document.getElementById("header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll(".faq-item button").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    document.querySelectorAll(".faq-item").forEach(other => {
      if (other !== item) other.classList.remove("active");
    });
    item.classList.toggle("active");
    button.querySelector("span").textContent = item.classList.contains("active") ? "−" : "+";
  });
});

const cursor = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", e => {
  if (cursor) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }
});

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form?.addEventListener("submit", async e => {
  e.preventDefault();
  status.textContent = "Sending...";
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form)
    });
    const data = await response.json();
    status.textContent = data.message;
    if (data.success) form.reset();
  } catch {
    status.textContent = "Unable to send. Please try again.";
  }
});

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  status.textContent = "Sending...";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      status.textContent = "Message sent successfully!";
      form.reset();
    } else {
      status.textContent = "Unable to send. Please try again.";
    }

  } catch (error) {
    console.error(error);
    status.textContent = "Unable to send. Please try again.";
  }
});

