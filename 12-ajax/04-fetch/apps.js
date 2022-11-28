//* Fetch est un méthode intégrée
//* basée sur les promesses
//* XHR n'est pas mauvais, on faire tous nos futurs exemples et projets avec.
//* Fetch est juste une approche alternative qui est plus simple et a une syntaxe plus propre. Le résultat final est le même.

const btn = document.querySelector(".btn");
const url = "./api/people.json";

// const response = fetch(url);
// console.log(response);

btn.addEventListener("click", async () => {
  try {
    const rep = await fetch(url);
    const data = await rep.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displaData = items
    .map((item) => {
      const { name } = item;

      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displaData;
  document.body.appendChild(element);
};
