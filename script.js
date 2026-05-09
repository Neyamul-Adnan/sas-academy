/* =========================
FILE: script.js
========================= */

/* =========================
STICKY NAVBAR
========================= */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
MOBILE MENU
========================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* =========================
TEACHER MODAL
========================= */
const teacherCards = document.querySelectorAll(".teacher-card");
const modal = document.getElementById("teacherModal");
const closeModal = document.getElementById("closeModal");

const modalName = document.getElementById("modalName");
const modalSubject = document.getElementById("modalSubject");
const modalDegree = document.getElementById("modalDegree");
const modalExperience = document.getElementById("modalExperience");
const modalImage = document.getElementById("modalImage");

teacherCards.forEach(card => {

  card.addEventListener("click", () => {

    modalName.textContent = card.dataset.name;
    modalSubject.textContent = card.dataset.subject;
    modalDegree.textContent = card.dataset.degree;
    modalExperience.textContent = card.dataset.experience;
    modalImage.src = card.dataset.image;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

  });

});

/* CLOSE MODAL */
function closeTeacherModal(){
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeModal.addEventListener("click", closeTeacherModal);

/* CLOSE OUTSIDE CLICK */
modal.addEventListener("click", (e) => {
  if(e.target === modal){
    closeTeacherModal();
  }
});

/* ESC KEY CLOSE */
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeTeacherModal();
  }
});

/* =========================
TESTIMONIAL SLIDER
========================= */
const slides = document.querySelectorAll(".testimonial-card");

let currentSlide = 0;

function showSlide(index){

  slides.forEach(slide => {
    slide.classList.remove("active-slide");
  });

  slides[index].classList.add("active-slide");
}

setInterval(() => {

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 4000);

/* =========================
SCROLL REVEAL
========================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();