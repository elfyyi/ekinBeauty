const slides = document.querySelectorAll(".serviceCard");
const anaDiv = document.querySelector(".serviceWrap");
const btnSag = document.querySelector(".fa-arrow-right");
const btnSol = document.querySelector(".fa-arrow-left");
let slideIndex = 0;
const slideWidth = 100 / 3; // 3 slayt görünür durumda olacak

// Show the first 3 slides initially
showSlides(slideIndex);

// Button event listeners
btnSag.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex > slides.length ) slideIndex = 0;
    showSlides(slideIndex);
});

btnSol.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0) slideIndex = slides.length - 3;
    showSlides(slideIndex);
});

function showSlides(index) {
    anaDiv.style.transform = `translateX(-${index * slideWidth}%)`;
}