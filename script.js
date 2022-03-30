const section1 = document.querySelector("#contentVague")
let poissons = document.querySelector("#poissons")
let poissons2 = document.querySelector("#poissons2")
let poissons3 = document.querySelector("#poissons3")
let contentPoule = document.querySelector("#contentPoulpe")
let contentPoisson = document.querySelector("#contentPoisson")
let contentPoissons = document.querySelector("#contentPoissons")
let contentBois = document.querySelector("#contentBois")
let contentBras = document.querySelector("#contentBras")
const createVague = () => {
    const vague1 = document.createElement("img")
    vague1.src = "img/vague2-removebg-preview.png"
    vague1.classList.add("vague1")

    section1.appendChild(vague1)

    setTimeout(() => {
        vague1.remove()
    }, 5000)
}



setInterval(() => {
    createVague()
}, 800)






document.addEventListener("scroll", (e) => {
    let value = window.scrollY
    console.log(value)

    if (value > 116) {
        poissons.style.transform = "translateX(-120%)"
    }else if (value < 100){
        poissons.style.transform = "translateX(0)"
    }
    if (value > 600){
        poissons2.style.transform = "translateX(120%)"
        poissons3.style.transform = "translateX(-120%)"
    }else if (value < 620){
        poissons2.style.transform = "translateX(0)"
        poissons3.style.transform = "translateX(0)"
    }

    if (value >= 930){
        contentPoissons.style.backgroundColor = "#0B87AB"
        contentPoisson.style.backgroundColor = "#0B87AB"
        contentPoule.style.backgroundColor = "#0B87AB"
    }else if (value < 930){
        contentPoissons.style.backgroundColor = "#0ABDC4"
        contentPoisson.style.backgroundColor = "#0ABDC4"
        contentPoule.style.backgroundColor = "#0ABDC4"
    }
    if (value >= 2120){
        contentBois.style.backgroundColor = "#264B84"
        contentPoule.style.backgroundColor = "#264B84"

    }else if (value < 2120){
        contentPoule.style.backgroundColor = "#0B87AB"

        contentBois.style.backgroundColor = "#0B87AB"
    }
    if (value >= 3000){
        contentBras.style.backgroundColor = "#373678"
        contentBois.style.backgroundColor = "#373678"
    }else if (value < 3148){
        contentBras.style.backgroundColor = "#264B84"
    }
})