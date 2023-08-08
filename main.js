const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");


navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") 
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    navToggle.classList.toggle('mobile-nav-toggle-active');

});
const targetArrowIcon = document.querySelector(".arrow");
const targetArticle = document.querySelector(".target-article");

targetArrowIcon.addEventListener('click', () => {
  targetArticle.scrollIntoView({ behavior: 'smooth' });
});