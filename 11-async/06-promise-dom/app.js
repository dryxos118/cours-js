//* callbacks, promises, async/await
//* PROMESSES - Pending (En attente), Resolved (Résolue), Rejected (Rejetée)
//* then catch - passe une autre fonction callback

// const t1 = document.querySelector(".one");
// const t2 = document.querySelector(".two");
// const t3 = document.querySelector(".three");
// const btn = document.querySelector(".btn");

const promise = new Promise((Resolved, Reject) => {
  //ici on met une fonctionnaliter
  let value = false;

  if (value) {
    Resolved("hey values est vrai");
  } else {
    Reject("il y a une erreur");
  }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));
