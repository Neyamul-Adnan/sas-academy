/* =========================
FILE: script.js
========================= */

/* STICKY HEADER */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

/* MODERN SCROLL REVEAL (Observer API) */
const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, revealOptions);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* TEACHER MODAL */
const modal = document.getElementById("teacherModal");
const closeModal = document.getElementById("closeModal");
document.querySelectorAll(".teacher-card").forEach(card => {
  card.addEventListener("click", () => {
    document.getElementById("modalName").textContent = card.dataset.name;
    document.getElementById("modalSubject").textContent = card.dataset.subject;
    document.getElementById("modalDegree").textContent = card.dataset.degree;
    document.getElementById("modalExperience").textContent = card.dataset.experience;
    document.getElementById("modalImage").src = card.dataset.image;
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // স্ক্রল বন্ধ করা
  });
});

const closeTeacherModal = () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; // স্ক্রল চালু করা
};
closeModal.addEventListener("click", closeTeacherModal);
modal.addEventListener("click", (e) => { if(e.target === modal) closeTeacherModal(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeTeacherModal(); });

/* TESTIMONIAL SLIDER */
const wrapper = document.getElementById('testimonialWrapper');
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.getElementById('sliderDots');

let index = 0;

// তৈরি করছি ডটস
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
  // স্লাইডার মুভ করার লজিক
  wrapper.style.transform = `translateX(-${index * 100}%)`;
  
  // ডটস আপডেট
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// অটোমেটিক স্লাইড ফাংশন
function autoSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  updateSlider();
}

// ৪ সেকেন্ড পর পর পরিবর্তন হবে
let slideTimer = setInterval(autoSlide, 4000);

// মাউস উপরে নিলে থামবে, সরিয়ে নিলে আবার চলবে
wrapper.addEventListener('mouseenter', () => clearInterval(slideTimer));
wrapper.addEventListener('mouseleave', () => slideTimer = setInterval(autoSlide, 3500));