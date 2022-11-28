const darkBtn = document.querySelector(".btn");

darkBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

const articleContent = document.querySelector(".article");

const tableArticle = articles
  .map((article) => {
    const date = moment(article.date).format("Do MMMM YYYY");
    //   console.log(date);
    return `<article class="post">
        <h2 class="post-title">${article.title}</h2>
        <div class="post-info">
          <span class="date">${date}</span>
          <span class="read">${article.length} read time</span>
        </div>
        <p>
          ${article.snippet}
        </p>
      </article>
    `;
  })
  .join(" ");

articleContent.innerHTML = tableArticle;
