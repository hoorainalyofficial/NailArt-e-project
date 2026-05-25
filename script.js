
// HOME PAGE 
// FEATURED SLIDER SECTION 

const imageGroups = [

    [
        "images/floral-1.jpg",
        "images/floral-2.jpg",
        "images/floral-3.jpg"
    ],

    [
        "images/glitter-1.jpg",
        "images/glitter-2.jpg",
        "images/glitter-3.jpg"
    ],

    [
        "images/geo-1.jpg",
        "images/geo-2.jpg",
        "images/geo-3.jpg"
    ],

    [
        "images/bridal-1.jpg",
        "images/bridal-2.jpg",
        "images/bridal-3.jpg"
    ],

    [
        "images/chrome-1.jpg",
        "images/chrome-2.jpg",
        "images/chrome-3.jpg"
    ],

    [
        "images/french-1.jpg",
        "images/french-2.jpg",
        "images/french-3.jpg"
    ],

    [
        "images/matte-1.jpg",
        "images/matte-2.jpg",
        "images/matte-3.jpg"
    ],

    [
        "images/heart-1.jpg",
        "images/heart-2.jpg",
        "images/heart-3.jpg"
    ]

];

const images = document.querySelectorAll(".slider-image");

let index = 0;

setInterval(() => {

    images.forEach((img, i) => {

        img.style.opacity = "0";

        setTimeout(() => {

            img.src =
                imageGroups[i][index % imageGroups[i].length];

            img.style.opacity = "1";

        }, 300);

    });

    index++;

}, 2000);


//NAIL-CARE SECTION

const reveals = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach((el) => {
    observer.observe(el);
});


// GALLERY MODAL

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

const galleryItems = document.querySelectorAll(".gallery-item");

const closeBtn = document.querySelector(".close");


// OPEN MODAL

galleryItems.forEach((item) => {

    item.addEventListener("click", () => {

        const img = item.querySelector("img");

        modal.style.display = "flex";

        modalImg.src = img.src;

        document.body.style.overflow = "hidden";

    });

});



// CLOSE BUTTON

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

    document.body.style.overflow = "auto";

});


// CLICK OUTSIDE IMAGE

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


// ESC BUTTON CLOSE

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


//DESIGNS PAGE

// OPTIONAL SMOOTH ANIMATION

const cards = document.querySelectorAll(".design-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        card.style.transform = `
        rotateX(${-(y - rect.height / 2) / 25}deg)
        rotateY(${(x - rect.width / 2) / 25}deg)
        scale(1.03)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        `;

    });

});

//CONTACT US PAGE 

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Message sent successfully");

    this.reset();
});


// FEEDBACK PAGE 
// STAR RATING

const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {

    star.addEventListener("click", () => {

        stars.forEach((s, i) => {

            if (i <= index) {
                s.classList.add("active");
            }

            else {
                s.classList.remove("active");
            }

        });

    });

});


// SUBMIT BUTTON

function submitFeedback() {

    alert("Thank You For Your Feedback 💖");

}