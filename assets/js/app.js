// Animation on scroll
AOS.init();
//typed js
var typed1 = new Typed("#name", {
  strings: ["Theingi Nay Oo"],
  typeSpeed: 50,
  backSpeed: 0,
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
