const people = [
  { name: "john", job: "développeur" },
  { name: "susan", job: "designer" },
  { name: "anna", job: "boss" },
];

const div = document.querySelector(".container");
const btn = document.querySelector(".btn");

const showPeople = () => {
  const nexPeople = people.map((person) => {
    const { name, job } = person;

    return `<p/>${name} <strong>${job}</strong></p>`;
  });
  div.innerHTML = nexPeople.join("");
};

btn.addEventListener("click", showPeople);

console.log(div);
