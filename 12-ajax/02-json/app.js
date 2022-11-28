const btn = document.querySelector(".btn");
const url = "./api/people.json";

const getData = (url) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const displayData = data.map((item) => `<p>${item.name}</p>`).join("");
      const el = document.createElement("div");
      el.innerHTML = displayData;
      document.body.appendChild(el);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };

  xhr.send();
};
console.log("hello");

btn.addEventListener("click", () => {
  getData(url);
});
