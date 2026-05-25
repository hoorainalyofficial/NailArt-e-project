const buttons = document.querySelectorAll(".view-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const currentBox =
            button.parentElement.nextElementSibling;

        document.querySelectorAll(".shade-box")
        .forEach(box => {

            if(box !== currentBox){
                box.classList.remove("active");
            }

        });

        currentBox.classList.toggle("active");

    });

});


const shades = document.querySelectorAll(".shade");

shades.forEach(shade => {

    shade.addEventListener("click", () => {

        const newImage =
            shade.getAttribute("data-image");

        const card =
            shade.closest(".design-card");

        const image =
            card.querySelector(".design-img");

        image.src = newImage;

    });

});

// ===== CLICK OUTSIDE CLOSE BOX =====
document.addEventListener("click", (e) => {

    if (!e.target.closest(".design-card")) {
        document.querySelectorAll(".shade-box").forEach(box => {
            box.classList.remove("active");
        });
    }
});