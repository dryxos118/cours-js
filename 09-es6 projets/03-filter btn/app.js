let filteredProducts = [...products];
// console.log(filteredProducts);

const containeProd = document.querySelector(".containerProd");

const showProduct = () => {
  containeProd.innerHTML = filteredProducts
    .map((prod) => {
      return `<article class="products" data-id="${prod.id}">
          <img
            src="${prod.image}"
            class="imgP img"
            alt=""
          />
          <footer class="foot">
            <h5 class="Name">${prod.title}</h5>
            <span class="Price">${prod.price} €</span>
          </footer>
        </article>`;
    })
    .join(" ");

  if (filteredProducts.length <= 0) {
    containeProd.innerHTML = `<h6>desolée mais rien ne corespond a la recherche</h6>`;
    return;
  }
};

showProduct();

//! Filter

const form = document.querySelector(".inputForm");
const search = document.querySelector(".inputSearch");

// console.log(form);
// console.log(search);

form.addEventListener("keyup", () => {
  const searchValue = search.value.toLowerCase();
  // console.log(searchValue);

  filteredProducts = products.filter((prod) => {
    return prod.title.toLowerCase().includes(searchValue);
  });

  showProduct();
});

//! btn

const btnCompany = document.querySelector(".company");

const showBtn = () => {
  const btn = [
    "all",
    ...new Set(
      filteredProducts.map((prod) => {
        return prod.company;
      })
    ),
  ];
  console.log(btn);
  btnCompany.innerHTML = btn
    .map((c) => {
      return `<button class="companyBtn">${c}</button>`;
    })
    .join("");
};

showBtn();

btnCompany.addEventListener("click", (e) => {
  if (e.target.classList.contains("companyBtn")) {
    if (e.target.textContent === "all") {
      console.log("ca marche");
      filteredProducts = [...products];
    } else {
      console.log("je suis une company");
      filteredProducts = products.filter((prod) => {
        return e.target.textContent === prod.company;
      });
    }
    showProduct();
  }

  search.value = "";
});
