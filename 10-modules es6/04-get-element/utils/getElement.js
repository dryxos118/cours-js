const getElement = (Selection) => {
  const el = document.querySelector(Selection);

  if (el) {
    return el;
  } else {
    throw new Error("perdu");
  }
};

export default getElement;
