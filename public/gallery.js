const gallery = document.querySelector(".gallery")

let imagesArr = []

for (let i = 0; i < 7; i++){
    imagesArr[i] = document.createElement("img")
    imagesArr[i].setAttribute("src", `/images/${i}.jpeg`)
    imagesArr[i].setAttribute('height', '250px');
    imagesArr[i].setAttribute('width', 'auto');
}

for (let element of imagesArr) {
    gallery.appendChild(element)
}