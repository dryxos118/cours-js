// ****** SELECTIONNER LES ELEMENTS HTML **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-list");
const list = document.querySelector(".list");
const clearBtn = document.querySelector(".clear-btn");

console.log(grocery);
console.log(list);
console.log(alert);
console.log(form);
console.log(submitBtn);

// option d'édition

console.log(lid);

// ****** EVENT LISTENERS **********
// soumettre le formulaire
form.addEventListener("submit", addItem);
// supprimer tous les items

// charger les items (DOMContentLoaded)

// ****** FONCTIONS **********
// ajouter un item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !false) {
    createListItem(id, value);
    //alert
    displayAlert("item ajouter", "succses");
    //show container
    container.classList.add("show");
  } else {
    displayAlert("entre une valeur", "fail");
  }
}

// afficher l'alerte
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`${action}`);
  // supprimer l'alerte
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`${action}`);
  }, 1000);
}

function setBackToDefault() {}

// supprimer tous les items
function clearItems() {}

// supprimer un item
function deleteItem(e) {}

// éditer un item
function editItem(e) {}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {}

function removeFromLocalStorage(id) {}

function editLocalStorage(id, value) {}

function getLocalStorage() {}

// ****** METTRE EN PLACE LES ITEMS **********
// récupérer la liste dans le localStorage ou en créer une vide
function setupItems() {}

function createListItem(id, value) {
  const element = document.createElement("article");
  //add classlist
  element.classList.add("item");
  //add id
  element.dataset.id = id;
  //add innerthtml
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button class="edit-btn" type="button">
                e
                <i class=""></i>
              </button>
              <button class="delete-btn" type="button">
                d
                <i class=""></i>
              </button>
            </div>`;
  //appenchild
  list.appendChild(element);
}
