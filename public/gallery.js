const gallery = document.querySelector(".gallery")

let imagesArr = []

for (let i = 0; i < 8; i++){
    imagesArr[i] = document.createElement("img")
    imagesArr[i].setAttribute("src", `/images/${i}.png`)
    imagesArr[i].setAttribute('height', '800px');
    imagesArr[i].setAttribute('width', 'auto');
}

for (let element of imagesArr) {
    gallery.appendChild(element)
}