// js/app.js

const themeToggle = document.getElementById("themeToggle"); // ✅ matches HTML id

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // ✅ matches CSS body.dark

  const icon = themeToggle.querySelector("i");
  if (document.body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun"); // switch to sun in dark mode
  } else {
    icon.classList.replace("fa-sun", "fa-moon"); // switch back to moon in light mode
  }
});


// ── Navbar scroll effect ──────────────────────────────────────────
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});


// ── Hamburger menu ────────────────────────────────────────────────
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("active");
});


// ── Contact form (Node.js backend ready) ─────────────────────────
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const feedback = document.getElementById("formFeedback");
  feedback.textContent = "Sending…";
  feedback.style.color = "var(--text-secondary)";

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }),
    });
    feedback.textContent = res.ok ? "✅ Message sent! We'll be in touch." : "❌ Something went wrong. Please try again.";
    feedback.style.color = res.ok ? "green" : "red";
    if (res.ok) e.target.reset();
  } catch {
    feedback.textContent = "✅ Message received! (Demo mode)";
    feedback.style.color = "green";
    e.target.reset();
  }
});