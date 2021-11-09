const express = require("express")
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, "public")))

app.all("/home", (request, response)=>{
    response.sendFile(path.join(__dirname, "pages", "home.html"))
})

app.all("/about", (request, response) => {
    response.sendFile(path.join(__dirname, "pages", "about", "about.html"))
})

app.all("/works", (request, response) => {
    response.sendFile(path.join(__dirname, "pages", "works", "works.html"))
})

app.all("/gallery", (request, response) => {
    response.sendFile(path.join(__dirname, "pages", "gallery", "gallery.html"))
})

app.listen(3000, ()=>{
    console.log("Yey APP running")
})