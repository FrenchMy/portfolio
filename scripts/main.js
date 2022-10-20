/* ----- Menu maquette ----- */


const boutonFermer = document.querySelector(".cloture");


const accueilBlur = document.querySelector("#principal");
const aproposBlur = document.querySelector("#a-propos");
const cvBlur = document.querySelector("#moncv");
const realisationBlur = document.querySelector("#realisations");
const contactBlur = document.querySelector("#contact");


const pageMaquette = document.querySelector("#maquette");
const pageAppli = document.querySelector("#application");
const pageLogo = document.querySelector("#logo");


const clicMaquette = document.querySelector("#clic-maquette");
const clicAppli = document.querySelector("#clic-appli");
const clicLogo = document.querySelector("#clic-logo");



clicMaquette.addEventListener("click", ouvrirPageMaquette);
clicAppli.addEventListener("click", ouvrirPageAppli);
clicLogo.addEventListener("click", ouvrirPageLogo);

boutonFermer.addEventListener("click", fermerPageListe);

function ouvrirPageMaquette() {
    pageMaquette.style.visibility = "visible";
    pageMaquette.style.opacity = "1";
    pageAppli.style.visibility = "hidden";
    pageLogo.style.visibility = "hidden";
    boutonFermer.style.display = "block";
    accueilBlur.style.filter = "blur(10px)";
    aproposBlur.style.filter = "blur(10px)";
    cvBlur.style.filter = "blur(10px)";
    realisationBlur.style.filter = "blur(10px)";
    contactBlur.style.filter = "blur(10px)";
}

function ouvrirPageAppli() {
    pageMaquette.style.visibility = "hidden";
    pageAppli.style.visibility = "visible";
    pageAppli.style.opacity = "1";
    pageLogo.style.visibility = "hidden";
    boutonFermer.style.display = "block";
    accueilBlur.style.filter = "blur(10px)";
    aproposBlur.style.filter = "blur(10px)";
    cvBlur.style.filter = "blur(10px)";
    realisationBlur.style.filter = "blur(10px)";
    contactBlur.style.filter = "blur(10px)";
}

function ouvrirPageLogo() {
    pageMaquette.style.visibility = "hidden";
    pageAppli.style.visibility = "hidden";
    pageLogo.style.visibility = "visible";
    pageLogo.style.opacity = "1";
    boutonFermer.style.display = "block";
    accueilBlur.style.filter = "blur(10px)";
    aproposBlur.style.filter = "blur(10px)";
    cvBlur.style.filter = "blur(10px)";
    realisationBlur.style.filter = "blur(10px)";
    contactBlur.style.filter = "blur(10px)";
}

function fermerPageListe() {
    pageMaquette.style.visibility = "hidden";
    pageMaquette.style.opacity = "0";
    pageAppli.style.visibility = "hidden";
    pageAppli.style.opacity = "0";
    pageLogo.style.visibility = "hidden";
    pageLogo.style.opacity = "0";
    boutonFermer.style.display = "none";
    accueilBlur.style.filter = "none";
    aproposBlur.style.filter = "none";
    cvBlur.style.filter = "none";
    realisationBlur.style.filter = "none";
    contactBlur.style.filter = "none";
}

/* ----- Menu burger ----- */

const boutonBurger = document.querySelector(".burger");
const navigation = document.querySelector("nav");
const container = document.querySelector(".main-container");
const navSection = document.querySelectorAll(".nav-section");


boutonBurger.addEventListener("click", evt => {
    navigation.classList.add("nav-slide");
    container.classList.add("blur");
    boutonBurger.style.display = "none";
})

container.addEventListener("click", evt => {
    if (!evt.target.classList.contains("burger")) {
        navigation.classList.remove("nav-slide");
        container.classList.remove("blur");
        boutonBurger.style.display = "block";
    }
})


navSection.forEach(function(btn) {
    btn.addEventListener("click", evt => {
        if (!evt.target.classList.contains("burger")) {
            navigation.classList.remove("nav-slide");
            container.classList.remove("blur");
            boutonBurger.style.display = "block";
        }
    })
})