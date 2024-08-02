var indexValue = 0;
function slider() {
    var x;
    const p = document.getElementsByClassName("slide-content");

    for (x = 0; x < p.length; x++) {
        p[x].style.display = "none";
    }

    indexValue++;
    if (indexValue > p.length) { indexValue = 1 }
    p[indexValue - 1].style.display = "block";

};
slider();
setInterval(slider, 4000);

// --->

const slides = document.querySelectorAll(".slide");
var count = 0;
console.log(slides);
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 65}%`;
    }
);

const prev = () => {
    if (count == 0) {
        count = slides.length - 1;
        slideContent();
    }
    else {
        count--;
        slideContent();
    }
};

const next = () => {
    if (count == slides.length - 1) {
        count = 0;
        slideContent();
    }
    else {
        count++;
        slideContent();
    }
};


const slideContent = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
}