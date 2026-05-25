const modal = document.getElementById("modal");
const popup = document.getElementById("popup");

// scroll animation (optional)
const products = document.querySelectorAll(".big-product, .small-card");

window.addEventListener("scroll", () => {
    products.forEach((box) => {
        const top = box.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            box.classList.add("show");
        }
    });
});

// OPEN MODAL
function openModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// CLOSE MODAL
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// click outside modal content closes modal
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// OPEN POPUP
function openPopup(title) {
    popup.style.display = "block";
    document.getElementById("popup-title").innerText = title;
}

// CLOSE POPUP
function closePopup(e) {
    if (e) e.stopPropagation();
    popup.style.display = "none";
}