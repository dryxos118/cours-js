// Element.getBoundingClientRect() - méthode qui retourne la taille d'un éléent et sa position relative à la fenêtre

// pageYOffset - seule propriété de window qui renvoie le nombre de pixels de défilement vertical du document.

// slice() extrait une section d'une chaîne decaractère sans modifier la chaîne d'origine

//offsetTop - un nombre, représentant la position supérieure de l'élément, en pixels

const toggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

//todo: pour les scroll

const navB = document.querySelector("#nav");
// const btnTop = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollH = window.pageYOffset;
  const navH = navB.getBoundingClientRect().height;

  if (scrollH > navH) {
    navB.classList.add("fixed-nav");
  } else {
    navB.classList.remove("fixed-nav");
  }
  if (scrollH > 500) {
    btnTop.classList.add("show-link");
  } else {
    btnTop.classList.remove("show-link");
  }
});

const linksScroll = document.querySelectorAll(".scroll-link");

console.log(linksScroll);

linksScroll.forEach(function (lien) {
  lien.addEventListener("click", function (e) {
    // pour chercher l'element par l'id
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);
    // pour la auteur
    const navH = navB.getBoundingClientRect().height;
    const linksC = linksContainer.getBoundingClientRect().height;
    const navF = navB.classList.contains("fixed-nav");
    let pos = element.offsetTop - navH;
    // partie code
    if (!navF) {
      pos = pos - navH;
    }
    if (navH > 82) {
      pos = pos + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: pos,
    });
    linksContainer.style.height = 0;
  });
});
