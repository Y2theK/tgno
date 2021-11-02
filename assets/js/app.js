// Animation on scroll
AOS.init();
//typed js
var typed1 = new Typed("#name", {
  strings: ["Theingi Nay Oo"],
  typeSpeed: 50,
  backSpeed: 0,
  delay: 2000,
  cursorChar: "",
  fadeOut: true,
  loop: false,
});

var typed2 = new Typed("#autotype", {
  strings: [
    "A Passionate Professional Nurse",
    "A SkillFul and Caring Medic",
    "A Responsible Health Care",
  ],
  typeSpeed: 30,
  backSpeed: 10,
  fadeOut: false,
  loop: true,
  cursorChar: "",
});
//gasp js
TweenMax.from(".brand-name", 2, { x: -30, opacity: 0, ease: Expo.easeInOut });
TweenMax.from("nav ul li a", 1, {
  x: -30,
  delay: 0.3,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from(".home-text h1", 2, {
  y: -30,
  delay: 1,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from(".home-text p", 2, {
  y: -50,
  delay: 1.3,
  opacity: 0,
  ease: Expo.easeInOut,
});
TweenMax.from(".home-text .social-media", 2, {
  y: -60,
  delay: 1.6,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".home-img img", 2, {
  y: "-100",
  delay: 1.7,
  opacity: 0,
  ease: Expo.easeInOut,
});
