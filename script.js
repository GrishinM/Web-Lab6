let popup = document.querySelector(".popup")
let openButton = document.querySelector(".contacts-button")
let closeButton = document.querySelector(".close-button")
let shader = document.querySelector(".shader")

function open() {
    popup.classList.remove("popup-hidden")
    shader.classList.add("shader-active")
}

function close() {
    popup.classList.add("popup-hidden")
    shader.classList.remove("shader-active")
}

openButton.addEventListener("mouseenter", function () {
    openButton.classList.add("contacts-button-active")
    document.body.style.cursor = "pointer"
})

openButton.addEventListener("mouseleave", function () {
    openButton.classList.remove("contacts-button-active")
    document.body.style.cursor = "auto"
})

openButton.addEventListener("click", open)

document.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
        close()
    }
})

shader.addEventListener("click", close)
closeButton.addEventListener("click", close)

let photos = document.querySelectorAll(".mini-photo")
let fullPhoto = document.querySelector(".full-photo")

for (let photo of photos) {
    photo.addEventListener("click", function () {
        fullPhoto.src = photo.src
    })
}