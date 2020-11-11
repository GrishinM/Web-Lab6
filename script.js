let popup = document.querySelector(".popup")
let openButton = document.querySelector(".contacts-button")
let shader = document.querySelector(".shader")

openButton.addEventListener("mouseenter", function () {
    openButton.classList.add("contacts-button-active")
    document.body.style.cursor = "pointer"
})

openButton.addEventListener("mouseleave", function () {
    openButton.classList.remove("contacts-button-active")
    document.body.style.cursor = "auto"
})

openButton.addEventListener("click", function () {
    popup.classList.remove("popup-hidden")
    shader.classList.add("shader-active")
})

document.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
        popup.classList.add("popup-hidden")
        shader.classList.remove("shader-active")
    }
})

let photos = document.querySelectorAll(".mini-photo")
let fullPhoto = document.querySelector(".full-photo")

for (let photo of photos) {
    photo.addEventListener("click", function () {
        fullPhoto.src = photo.src
    })
}