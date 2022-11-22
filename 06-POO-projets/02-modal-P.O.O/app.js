const firstSection = document.querySelector(".nature");
const secondeSection = document.querySelector(".city");

// console.log(firstSection);
// console.log(secondeSection);

class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    console.log(this);
    this.modal = document.querySelector(".modal");
    this.modalImg = document.querySelector(".imgCenter");
    this.modalImages = document.querySelector(".modalGalery");
    this.nameImg = document.querySelector(".titleImg");
    this.closeBtn = document.querySelector(".btnClose");
    this.prevBtn = document.querySelector(".btnPrev");
    this.nextBtn = document.querySelector(".btnNext");
    //* bind
    this.openModal = this.openModal.bind(this);
    //* addEvent
    // this.list.forEach(
    //   function (image) {
    //     image.addEventListener(
    //       "click",
    //       function () {
    //         this.openModal();
    //       }.bind(this)
    //     );
    //   }.bind(this)
    // );
    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("img")) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }

  openModal(selectImg, list) {
    this.setMainImg(selectImg);
    this.modal.classList.add("open");
    this.closeBtn.addEventListener("click", this.closeModal.bind(this));
    const newList = list.map(function (image) {
      return `<img src=${
        image.src
      } title=${image.title} data-id=${image.dataset.id} class="${selectImg.dataset.id === image.dataset.id ? "imgGalery selected" : "imgGalery"}" />`;
    });
    this.modalImages.innerHTML = newList.join("");
    this.nextBtn.addEventListener("click", this.nextImg.bind(this));
    this.prevBtn.addEventListener("click", this.prevImg.bind(this));
    this.modalImages.addEventListener("click", this.choiceImg.bind(this));
  }

  closeModal() {
    this.modal.classList.remove("open");
  }

  setMainImg(selectImg) {
    this.modalImg.src = selectImg.src;
    this.nameImg.textContent = selectImg.title;
  }

  nextImg() {
    const selectN = document.querySelector(".selected");
    const next =
      selectN.nextElementSibling || this.modalImages.firstElementChild;
    selectN.classList.remove("selected");
    next.classList.add("selected");
    this.setMainImg(next);
  }

  prevImg() {
    const selectP = document.querySelector(".selected");
    const prev =
      selectP.previousElementSibling || this.modalImages.lastElementChild;
    selectP.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImg(prev);
  }

  choiceImg(e) {
    if (e.target.classList.contains("imgGalery")) {
      const newImg = e.target;
      const select = document.querySelector(".selected");
      select.classList.remove("selected");
      newImg.classList.add("selected");
      this.setMainImg(newImg);
    }
  }
}

const nature = new Gallery(firstSection);
const city = new Gallery(secondeSection);
