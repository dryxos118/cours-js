// supprime la classe active pour chaque items
export default (items) => {
  items.forEach((element) => {
    element.classList.remove("active");
  });
};
