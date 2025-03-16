document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger-menu");
    const mobileMenu = document.querySelector(".header__menu-mobile");

    burger.addEventListener("click", () => {
        burger.classList.toggle("open");
        mobileMenu.classList.toggle("open");
    });
})

document.addEventListener("click", (event) => {
    if (!burger.contains(event.target) && !mobileMenu.contains(event.target)) {
        burger.classList.remove("open");
        mobileMenu.classList.remove("open");
    }
});