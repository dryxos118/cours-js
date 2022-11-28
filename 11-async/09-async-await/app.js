//* async/await
//* doit avoir async
//* await attends que la promesse soit tenue
//* try/catch - gérer les erreurs

const btn = document.querySelector(".btn");
const t1 = document.querySelector(".one");
const t2 = document.querySelector(".two");
const t3 = document.querySelector(".three");

// const some = async () => {
//   await
// }

btn.addEventListener("click", async () => {
  await showColor();
});

const addColor = (time, el, color) => {
  return new Promise((resolve, rejet) => {
    if (el) {
      setTimeout(() => {
        el.style.color = color;
        resolve();
      }, time);
    } else {
      rejet(new Error(`il y a un probleme sur ${el}`));
    }
  });
};

const showColor = async () => {
  try {
    await addColor(1000, t1, "red");
    await addColor(2000, t2, "green");
    await addColor(1000, t3, "blue");
  } catch (err) {
    console.log(err);
  }
};
